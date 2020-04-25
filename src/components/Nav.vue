<template>
    <!-- nav -->
    <div class="movies_nav">
        <div class="container">
            <nav class="navbar navbar-default">
                <div class="navbar-header navbar-left">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                    <nav>
                        <ul class="nav navbar-nav">
                            <li class="active">
                                <router-link :to="{name:'Home'}">{{$t('one_movie')}}</router-link>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{$t('genres')}} <b
                                        class="caret"></b></a>
                                <ul class="dropdown-menu multi-column columns-3">
                                    <li>
                                        <div class="col-sm-4" v-for="genre in genres" :key="genre.id">
                                            <ul class="multi-column-dropdown">
                                                <li v-for="item in genre" :key="item.id">
                                                    <router-link active-class="link" :to="{ name : 'Genres',  params: { slug: item.slug }}">{{item.name}}</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="clearfix"></div>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="series.html">{{$t('tv_series')}}</a></li>
                            <li><a href="news.html">{{$t('news')}}</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{$t('country')}} <b
                                        class="caret"></b></a>
                                <ul class="dropdown-menu multi-column columns-3">
                                    <li>
                                        <div class="col-sm-4" v-for="country in countrys" :key="country.id">
                                            <ul class="multi-column-dropdown">
                                                <li v-for="item in country" :key="item.id">
                                                    <router-link active-class="link" :to="{ name : 'Genres',  params: { slug: item.name }}">{{item.name}}</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="clearfix"></div>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="list.html">{{$t('Az_list')}}</a></li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    </div>
    <!-- //nav -->
</template>

<script>
    import $ from "jquery";
    import HomeDataService from "../services/HomeDataService";
    import APIPath from "../utils/APIPath";

    export default {
        name: "Nav",
        data() {
            return {
                genres: null,
                countrys:null
            }
        },
        created() {
            this.prepation()
        },
        watch: {
            genres: function (value) {
                if (value || this.countrys ) {
                    $(".dropdown").hover(
                        function () {
                            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
                            $(this).toggleClass('open');
                        },
                        function () {
                            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
                            $(this).toggleClass('open');
                        }
                    );
                }
            }
        },
        methods: {
            prepation() {
                HomeDataService.getGenres(APIPath.MOVIE.Genres)
                    .then(response => {
                        this.genres = response.data.data.data;
                    });
                HomeDataService.getCountrys(APIPath.MOVIE.Countrys)
                .then(respose =>{
                    this.countrys = respose.data.data.data;
                });
            }
        }
    }
</script>

<style scoped>

</style>