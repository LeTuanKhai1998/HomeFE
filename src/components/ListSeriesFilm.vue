/* eslint-disable */
<template>
    <div>
        <!-- Latest-tv-series -->
        <div v-if="data" class="Latest-tv-series">
            <h4 class="latest-text w3_latest_text w3_home_popular">Tên bộ phim</h4>
            <div class="container">
                <section class="slider">
                    <div class="flexslider">
                        <ul class="slides">
                            <li v-for="item in data" :key="item.id">
                                <div class="agile_tv_series_grid">
                                    <div class="clearfix"></div>
                                    <div class="agileinfo_flexislider_grids">
                                        <div class="col-md-2 w3l-movie-gride-agile" v-for="itemMovie in item"
                                             :key="itemMovie.id">
                                            <SeriesFilmSingle :movie="itemMovie"/>
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
    </div>
</template>

<script>
    import $ from "jquery";
    import HomeDataService from "../services/HomeDataService";
    import getUrl from "../common/getUrl";
    // import Movie from "./Movie";
    import SeriesFilmSingle from "./SeriesFilmSingle";
    /* eslint-disable */
    export default {
        name: "ListSeriesFilm",
        components: {
            // Movie, 
            SeriesFilmSingle

        },
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
                return getUrl.getImgUrl(val,1)
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