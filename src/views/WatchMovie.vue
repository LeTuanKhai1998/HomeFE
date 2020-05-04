<template>
    <!-- single -->
    <div class="single-page-agile-main">
             <div class="box-player">
                    <div class="player" >
                        <video controls class="player">
                            <source src="http://webcoban.vn/file/bunny.mp4">
                        </video>
                    </div>
                </div>
        <div class="container">
            <!-- /w3l-medile-movies-grids -->
            <div class="single-page-agile-info">
                <!-- /movie-browse-agile -->
           

                <div class="show-top-grids-w3lagile">
                    <div class="col-sm-8 single-left">
                        <!-- <div class="song-info">
                                <h3>movie name</h3>
                            </div> -->
                        <!-- <div class="video-grid-single-page-agileits">
                                    <video controls>
                                          <source src="http://webcoban.vn/file/bunny.mp4">
                                  </video>
                            </div> -->
                        <!-- <div class="song-grid-right">
                            <SocialShare/>
                        </div> -->
                        <div class="clearfix"></div>
                        <div class="song-grid-right">
                            <div class="share">
                                <h5>Ten phim</h5>
                                <div class="single-agile-shar-buttons">
                                    <p>mo ta phim</p>
                                </div>
                            </div>
                        </div>
                        <Comments/>
                        <!-- <General/> -->
                        <!-- <LatestTvSeries/> -->
                        <ListSeriesFilm/>
                    </div>
                    <!-- <div class="col-md-4 single-right">
                        <UpNext/>
                    </div> -->
                    <div class="clearfix"></div>
                </div>
                <!-- //movie-browse-agile -->

                <!--body wrapper start-->

                <!--body wrapper end-->

            </div>
            <!-- //w3l-latest-movies-grids -->
        </div>
    </div>
    <!-- //w3l-medile-movies-grids -->
</template>
<script>
    // import LatestTvSeries from "../components/LatestTvSeries";
    import ListSeriesFilm from "../components/ListSeriesFilm";
    import Comments from "../components/Comments";
    // import UpNext from "../components/UpNext";
    // import General from "../components/General";
    export default {
        components: {
            Comments,
            // UpNext,
            // General,
            ListSeriesFilm
            // LatestTvSeries
        }
    }
</script>
<style scoped>
    .title-block {
        background: rgba(54, 71, 86, 0.13);
        padding: 15px 15px 0;
        overflow: hidden;
    }
    
    .title-wrapper.full {
        border-bottom: none;
    }
    
    .title-wrapper h1.entry-title {
        font-size: 22px;
        color: #c7c7c7;
        line-height: 25px;
        display: -webkit-box;
        /* overflow: hidden; */
        -webkit-line-clamp: 2;
        -webkit-box-flex: 1;
        -webkit-box-orient: vertical;
    }
    
    .ratings_wrapper {
        float: right;
        width: 28%;
    }
    .box-player {
    background-color: #1a1a1a;
    padding: 20px 0;
    position: relative;
}
.player {
    margin: 0 auto;
    width: 854px;
    line-height: 1;
    z-index: 2;
}
.w3l-agile-horror, .general-agileits-w3l, .single-page-agile-main, .wthree-comedy {
    padding: 0;
    
}
/* .navbar-default .navbar-nav > .active > a{
      background-color: #FF8D1B !important;
} */
/* .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
    color: #555;
    background-color: #FF8D1B;
} */
</style>