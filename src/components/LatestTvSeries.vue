/* eslint-disable */
<template>
    <div>
        <!-- Latest-tv-series -->
        <div v-if="data" class="Latest-tv-series">
            <h4 class="latest-text w3_latest_text w3_home_popular">{{$t('most-popular-movies')}}</h4>
            <div class="container">
                <section class="slider">
                    <div class="flexslider">
                        <ul class="slides">
                            <li v-for="item in data" :key="item.id">
                                <div class="agile_tv_series_grid">
                                    <div class="col-md-6 agile_tv_series_grid_left">
                                        <div class="w3ls_market_video_grid1">
                                            <img :src="getImgUrl(item[0].banner.url)" :alt="item[0].banner.alt"
                                                 class="img-responsive cropped"/>
                                            <a class="w3_play_icon" href="#small-dialog">
                                                <span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 agile_tv_series_grid_right">
                                        <p class="fexi_header">{{item[0].name}}</p>
                                        <p class="fexi_header_para"><span
                                                class="conjuring_w3">{{$t('story_line')}}<label>:</label></span>{{item[0].description}}
                                        </p>
                                        <p class="fexi_header_para">
                                            <span>{{$t('date_of_release')}}<label>:</label></span>
                                            {{item[0].release_year}}</p>
                                        <p class="fexi_header_para">
                                            <span>{{$t('genres')}}<label>:</label> </span>
                                            <a href="genres.html" v-for="itemGenres in item[0].genres"
                                               v-bind:key="itemGenres.id">
                                                <router-link active-class="link" :to="{ name : 'Genres',  params: { slug: itemGenres.slug }}">
                                                    {{itemGenres.name}}
                                                </router-link>
                                                |</a>
                                        </p>
                                        <p class="fexi_header_para fexi_header_para1">
                                            <span>{{$t('star_rating')}} ({{item[0].num_rate}})<label>:</label></span>
                                            <StarRating :rate="item[0].rate"/>
                                        </p>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="agileinfo_flexislider_grids">
                                        <div class="col-md-2 w3l-movie-gride-agile" v-for="itemMovie in item"
                                             :key="itemMovie.id">
                                            <Movie :movie="itemMovie"/>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <div id="small-dialog" class="mfp-hide">
            <iframe src="https://www.youtube.com/embed/JOAWOLaxcCA"></iframe>
        </div>
        <div id="small-dialog1" class="mfp-hide">
            <iframe src="https://www.youtube.com/embed/JOAWOLaxcCA"></iframe>
        </div>
        <div id="small-dialog2" class="mfp-hide">
            <iframe src="https://www.youtube.com/embed/JOAWOLaxcCA"></iframe>
        </div>
        <!-- //Latest-tv-series -->
    </div>
</template>

<script>
    import $ from "jquery";
    import HomeDataService from "../services/HomeDataService";
    import getUrl from "../common/getUrl";
    import StarRating from "./StarRating";
    import Movie from "./Movie";
    /* eslint-disable */
    export default {
        name: "LatestTvSeries",
        components: {Movie, StarRating},
        data() {
            return {
                data: null,
                numberItem: 18,
            }
        },
        created() {
            this.prepation();
        },
        methods: {
            getImgUrl(val) {
                return getUrl.getImgUrl(val)
            },
            prepation() {
                HomeDataService.getMostPopularMovie(this.numberItem)
                    .then(response => {
                        this.data = response.data.data.data;
                    });
            }

        },
        watch: {
            data: function (value) {
                if (value) {
                    $(document).ready(function () {
                        $('.flexslider').flexslider({
                            animation: "slide",
                            // eslint-disable-next-line no-unused-vars
                            start: function (slider) {
                                $('body').removeClass('loading');
                            }
                        });

                        $('.w3_play_icon,.w3_play_icon1,.w3_play_icon2').magnificPopup({
                            type: 'inline',
                            fixedContentPos: false,
                            fixedBgPos: true,
                            overflowY: 'auto',
                            closeBtnInside: true,
                            preloader: false,
                            midClick: true,
                            removalDelay: 300,
                            mainClass: 'my-mfp-zoom-in'
                        });

                    });
                }
            }
        }
    }
</script>

<style scoped>
    .cropped {
        height: 786px; /* height of container */
        object-fit: cover;
        border: 5px solid black;
    }
</style>