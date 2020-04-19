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
                                        <div class="col-sm-4">
                                            <ul class="multi-column-dropdown">
                                                <li><a href="genres.html">Action</a></li>
                                                <li><a href="genres.html">Biography</a></li>
                                                <li><a href="genres.html">Crime</a></li>
                                                <li><a href="genres.html">Family</a></li>
                                                <li><a href="horror.html">Horror</a></li>
                                                <li><a href="genres.html">Romance</a></li>
                                                <li><a href="genres.html">Sports</a></li>
                                                <li><a href="genres.html">War</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-4">
                                            <ul class="multi-column-dropdown">
                                                <li><a href="genres.html">Adventure</a></li>
                                                <li><a href="comedy.html">Comedy</a></li>
                                                <li><a href="genres.html">Documentary</a></li>
                                                <li><a href="genres.html">Fantasy</a></li>
                                                <li><a href="genres.html">Thriller</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-4">
                                            <ul class="multi-column-dropdown">
                                                <li><a href="genres.html">Animation</a></li>
                                                <li><a href="genres.html">Costume</a></li>
                                                <li><a href="genres.html">Drama</a></li>
                                                <li><a href="genres.html">History</a></li>
                                                <li><a href="genres.html">Musical</a></li>
                                                <li><a href="genres.html">Psychological</a></li>
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
                                        <div class="col-sm-4">
                                            <ul class="multi-column-dropdown">
                                                <li><a href="genres.html">Asia</a></li>
                                                <li><a href="genres.html">France</a></li>
                                                <li><a href="genres.html">Taiwan</a></li>
                                                <li><a href="genres.html">United States</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-4">
                                            <ul class="multi-column-dropdown">
                                                <li><a href="genres.html">China</a></li>
                                                <li><a href="genres.html">HongCong</a></li>
                                                <li><a href="genres.html">Japan</a></li>
                                                <li><a href="genres.html">Thailand</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-4">
                                            <ul class="multi-column-dropdown">
                                                <li><a href="genres.html">Euro</a></li>
                                                <li><a href="genres.html">India</a></li>
                                                <li><a href="genres.html">Korea</a></li>
                                                <li><a href="genres.html">United Kingdom</a></li>
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

    export default {
        name: "Nav",
        mounted() {
            $(document).ready(function () {
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
            });
        }
    }
</script>

<style scoped>
</style>