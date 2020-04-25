<template xmlns:StarRating="http://www.w3.org/1999/html">
    <!-- single -->
    <div class="single-page-agile-main">
        <div class="container">
            <!-- /w3l-medile-movies-grids -->
            <PathViews :path="path"/>
            <div class="single-page-agile-info">
                <!-- /movie-browse-agile -->
                <div class="show-top-grids-w3lagile">
                    <div class="col-sm-8 single-left">
                        <div v-if="movie" class="song">
                            <div class="song-info">
                                <h3>{{movie.name.toUpperCase()}}</h3>
                            </div>
                            <div class="video-grid-single-page-agileits">
                                <!-- <div data-video="dLmKio67pVQ" id="video"> <img src="images/5.jpg" alt="" class="img-responsive" /> </div> -->
                                <div class="agile_tv_series_grid">
                                    <div class="col-md-6 agile_tv_series_grid_left">
                                        <div class="w3ls_market_video_grid1">
                                            <!--                                            <img style="min-height:312px" src="images/h1-1.jpg" alt=" " class="img-responsive"/>-->
                                            <img style="min-height:490px;" :src="getImgUrl(movie.image.url)" alt=" "
                                                 class="img-responsive"/>
                                            <a class="w3_play_icon" href="#small-dialog" style="margin: auto">
                                                <span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 agile_tv_series_grid_right" style="min-height:489px">
                                        <p class="fexi_header">{{movie.name}}</p>
                                        <p class="fexi_header_para">
                                            <span>{{$t('date_of_release')}}<label>:</label></span>{{movie.release_year}}
                                        </p>
                                        <p class="fexi_header_para">
                                            <span>{{$t('genres')}}<label>:</label> </span>
                                            <a href="genres.html" v-for="items in movie.genres" v-bind:key="items.id">
                                                <router-link active-class="link"
                                                             :to="{ name : 'Genres',  params: { slug: items.slug }}">
                                                    {{items.name}}
                                                </router-link>
                                                |</a>
                                        </p>
                                        <p class="fexi_header_para"><span>{{$t('country')}}<label>:</label></span>
                                            {{movie.country.name}}</p>
                                        <p class="fexi_header_para"><span>{{$t('actor')}}<label>:</label></span>
                                            <a href="genres.html" v-for="items in movie.actors" v-bind:key="items.id">
                                                {{items.name}} |</a>
                                            <br v-if="movie.actors"/>
                                        </p>
                                        <p class="fexi_header_para fexi_header_para1">
                                            <span>{{$t('star_rating')}} ({{movie.num_rate}})<label>:</label></span>
                                            <StarRating :rate="movie.rate"/>
                                        </p>
                                        <div class="fexi_header" style="margin-top: 40%">
                                            <div class="text-center">
                                                <a class="btn btn-red"
                                                   style="color: white;font-weight: bold;font-size: larger"
                                                   @click="gotoPlay">{{$t('watch')}}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>

                                </div>
                            </div>
                        </div>
                        <div class="song-grid-right">
                            <SocialShare/>
                        </div>
                        <div class="clearfix"></div>
                        <Comments/>
                    </div>
                    <div class="col-md-4 single-right">
                        <UpNext/>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <!-- //movie-browse-agile -->

                <!--body wrapper start-->
                <BannerBottom/>
                <!--body wrapper end-->

            </div>
            <!-- //w3l-latest-movies-grids -->
        </div>
    </div>
    <!-- //w3l-medile-movies-grids -->
</template>

<script>
    import PathViews from "../components/PathViews";
    import SocialShare from "../components/SocialShare";
    import Comments from "../components/Comments";
    import UpNext from "../components/UpNext";
    import BannerBottom from "../components/BannerBottom";
    import HomeDataService from "../services/HomeDataService";
    import getUrl from "../common/getUrl";
    import StarRating from "../components/StarRating";

    export default {
        name: "Single",
        components: {StarRating, BannerBottom, UpNext, Comments, SocialShare, PathViews},
        props: {
            slug: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                movie: null,
                path: null
            }
        },
        created() {
            this.getMovieBySlug();
            this.path = [{
                "slug": this.slug,
                "pageName": 'Single'
            }]
        },
        methods: {
            getImgUrl(val) {
                return getUrl.getImgUrl(val)
            },
            getMovieBySlug() {
                if (!this.movie) {
                    HomeDataService.getMovieBySLug(this.slug)
                        .then(response => {
                            this.movie = response.data.data.data;
                            console.log(this.movie.name)
                        });
                }
            }

        }
    }
</script>

<style scoped>
    p.fexi_header {
        color: white;
    }

    p.fexi_header_para span {
        width: 40%;
    }

    p.fexi_header_para label {
        left: 35%;
    }

    .btn-red {
        padding: 10px;
        padding-right: 25px;
        padding-left: 25px;
        color: #ffffff;
        background-color: #333333;
        border-color: #d9534f;
    }

    .btn-red:hover,
    .btn-red:focus,
    .btn-red:active {
        background-color: #e71300;
        border-color: #333333;
    }
</style>