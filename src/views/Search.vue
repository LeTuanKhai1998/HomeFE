<template>
    <!-- /w3l-medile-movies-grids -->
    <div class="general-agileits-w3l">
        <div class="w3l-medile-movies-grids">
            <!-- /movie-browse-agile -->
            <div class="movie-browse-agile">
                <!--/browse-agile-w3ls -->
                <div class="browse-agile-w3ls general-w3ls">
                    <div class="tittle-head">
                        <h4 class="latest-text">{{this.$t('search_with_keyword') +
                            keyword|title(this.$t('search_results')) }} </h4>
                        <div class="container">
                            <PathViews :path="path"/>
                        </div>
                    </div>
                    <div class="container" v-if="movies">
                        <div class="browse-inner">
                            <div class="col-md-2 w3l-movie-gride-agile" v-for="item in movies" :key="item.name">
                                <Movie :movie="item"/>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <!--//browse-agile-w3ls -->
                <div class="blog-pagenat-wthree" v-if="totalPages>1">
                    <ul class="pagination" v-for="index in totalPages+2" :key="index">
                        <li v-if="currentPage==0 && index==1" class=" disabled"><a class="first">{{$t('prev')}}</a>
                        </li>
                        <li v-else-if="index==1"><a class="frist" @click.prevent="prev">{{$t('prev')}}</a></li>
                        <li v-else-if="index==totalPages+2 && currentPage == totalPages-1" class=" disabled"><a>{{$t('next')}}</a>
                        </li>
                        <li v-else-if="index==totalPages+2"><a class="last" @click.prevent="next">{{$t('next')}}</a>
                        </li>
                        <li v-else-if="currentPage == index-2" class=" active"><a href="#">{{index-1}} <span
                                class="sr-only">(current)</span></a></li>
                        <li v-else class=""><a @click.prevent="setPage(index)">{{index-1}}</a></li>
                    </ul>
                </div>
            </div>
            <!-- //movie-browse-agile -->
            <!--body wrapper start-->
            <div class="review-slider">
                <h4 class="latest-text">{{$t('movie_reviews').toUpperCase()}}</h4>
                <BannerBottom :data="dataBanner"/>
            </div>
        </div>
        <!-- //w3l-medile-movies-grids -->
    </div>
    <!-- //comedy-w3l-agileits -->
</template>

<script>
    import PathViews from "../components/PathViews";
    import Movie from "../components/Movie";
    import BannerBottom from "../components/BannerBottom";
    import HomeDataService from "../services/HomeDataService";
    import NumConstant from "../constant/NumConstant";

    export default {
        name: "Search",
        components: {BannerBottom, Movie, PathViews},
        props: {
            keyword: String,
            sort_filter: Number,
            year: Number,
            country: Number,
            genre: Number,
        },
        data() {
            return {
                path: null,
                dataBanner: null,
                currentPage: 0,
                totalPages: 0,
                movies: null,
                form: null,
            }
        },
        created() {
            this.path = [
                {
                    "slug": this.keyword,
                    "pageName": 'Search'
                }]
            this.prepation();
        },
        filters: {
            title(keyword, val) {
                if (keyword) {
                    return keyword;
                } else {
                    return val;
                }
            }
        },
        methods: {
            getSort(sort) {
                switch (sort) {
                    case 1:
                        return "m.num_view";
                    case 2:
                        return "m.rate";
                    case 3:
                        return "m.update_time";
                    default:
                        return "";
                }
            },
            setDataForm() {
                this.form = {
                    release_year: this.year ? this.year : 0,
                    genre_id: this.genre ? this.genre : 0,
                    country_id: this.country ? this.country : 0,
                    keyWord: this.keyword ? this.keyword : "",
                    pagination: {
                        currentPage: this.currentPage,
                        itemsPerPage: NumConstant.MoviePerPage,
                        sort: this.getSort(this.sort_filter),
                        sortOrder: false,
                        totalItemCount: 0
                    }
                }
            },
            next() {
                if (this.currentPage < this.totalPages - 1) {
                    ++this.currentPage;
                    this.prepation();
                }
            },
            prev() {
                if (this.currentPage > 0) {
                    --this.currentPage;
                    this.prepation();
                }
            },
            setPage: function (val) {
                this.currentPage = val - 2;
                this.prepation();
            },
            prepation() {
                this.setDataForm();
                console.log("form", this.form)

                console.log("form", this.form)
                HomeDataService.search(this.form)
                    .then(response => {
                        this.movies = response.data.data.data;
                        this.totalPages = response.data.data.TotalPages;
                    });
            }
        }
    }
</script>


<style scoped>

    .pagination > .active > a {
        background-color: #FF8D1B;
        border-color: black;
    }

    .pagination > li:last-child > a,
    .pagination > li:last-child > a {
        border-radius: 0px 0px;
    }

    .pagination {
        user-select: none;
    }

    .pagination a:hover {
        cursor: pointer;
    }
</style>