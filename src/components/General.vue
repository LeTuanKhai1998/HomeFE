/* eslint-disable */
<template>
    <div class="general">
        <h4 class="latest-text w3_latest_text">{{$t("featured_movies")}}</h4>
        <div class="container">
            <div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                <ul id="myTab" class="nav nav-tabs" role="tablist">
                    <li v-if="featuredData" role="presentation" class="active">
                        <a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home"
                           aria-expanded="true">{{$t("featured")}}</a></li>
                    <li v-if="topViewedData" role="presentation">
                        <a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile"
                           aria-expanded="false">{{$t("top_viewed")}}</a></li>
                    <li v-if="topRatingData" role="presentation">
                        <a href="#rating" id="rating-tab" role="tab" data-toggle="tab" aria-controls="rating"
                           aria-expanded="true">{{$t("top_rating")}}</a></li>
                    <li v-if="recentlyAddedData" role="presentation">
                        <a href="#imdb" role="tab" id="imdb-tab" data-toggle="tab" aria-controls="imdb"
                           aria-expanded="false">{{$t("recently_added")}}</a></li>
                </ul>
                <div id="myTabContent"
                     class="tab-content">
                    <div v-if="featuredData" role="tabpanel" class="tab-pane fade active in" id="home"
                         aria-labelledby="home-tab">
                        <div class="w3_agile_featured_movies">
                            <div class="col-md-2 w3l-movie-gride-agile" v-for="item in featuredData" :key="item.id">
                                <Movie :movie="item"/>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div v-if="topViewedData" role="tabpanel" class="tab-pane fade" id="profile"
                         aria-labelledby="profile-tab">
                        <div class="col-md-2 w3l-movie-gride-agile" v-for="item in topViewedData" :key="item.id">
                            <Movie :movie="item"/>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div v-if="topRatingData" role="tabpanel" class="tab-pane fade" id="rating"
                         aria-labelledby="rating-tab">
                        <div class="col-md-2 w3l-movie-gride-agile" v-for="item in topRatingData" :key="item.id">
                            <Movie :movie="item"/>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div v-if="recentlyAddedData" role="tabpanel" class="tab-pane fade" id="imdb"
                         aria-labelledby="imdb-tab">
                        <div class="col-md-2 w3l-movie-gride-agile" v-for="item in recentlyAddedData" :key="item.id">
                            <Movie :movie="item"/>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import Movie from "./Movie";
    import HomeDataService from "../services/HomeDataService";
    import APIPath from "../utils/APIPath";

    export default {
        name: "General",
        components: {Movie},
        data() {
            return {
                featuredData: null,
                topViewedData: null,
                topRatingData: null,
                recentlyAddedData: null,
                featured_movies: "",
                featured: "",
                top_viewed: "",
                top_rating: "",
                recently_added: ""

            }
        },
        created() {
            this.prepation();
        },
        methods: {
            prepation() {
                if (!this.featuredData) {
                    HomeDataService.getMovies(APIPath.MOVIE.Featured)
                        .then(response => {
                            this.featuredData = response.data.data.data;
                        });
                }
                if (!this.topViewedData) {
                    HomeDataService.getMovies(APIPath.MOVIE.TopViewed)
                        .then(response => {
                            this.topViewedData = response.data.data.data;
                        });
                }
                if (!this.topRatingData) {
                    HomeDataService.getMovies(APIPath.MOVIE.TopRating)
                        .then(response => {
                            this.topRatingData = response.data.data.data;
                        });
                }
                if (!this.recentlyAddedData) {
                    HomeDataService.getMovies(APIPath.MOVIE.RecentlyAdded)
                        .then(response => {
                            this.recentlyAddedData = response.data.data.data;
                        });
                }
            },
        }
    }
</script>

<style scoped>
    /* eslint-disable */
</style>