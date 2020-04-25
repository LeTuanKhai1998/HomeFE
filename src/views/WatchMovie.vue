<template>
    <!-- single -->
    <div class="single-page-agile-main">
        <div class="container">
            <div class="agileits-single-top">
                <ol class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">Tên phim</li>
                </ol>
            </div>
            <!-- /w3l-medile-movies-grids -->
            <div class="single-page-agile-info">
                <!-- /movie-browse-agile -->
                <div class="show-top-grids-w3lagile">
                    <div class="col-sm-8 single-left">
                        <div class="song">
                            <!-- <div class="song-info">
                                <h3>movie name</h3>
                            </div> -->
                            <div class="video-grid-single-page-agileits">
                                <div data-video="dLmKio67pVQ" id="video"> <img src="images/5.jpg" alt="" class="img-responsive">
                                    <div id="play" style=""></div>
                                </div>
                            </div>
                        </div>
                        <div class="song-grid-right">
                            <SocialShare/>
                        </div>
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
                        <General/>
                    </div>
                    <div class="col-md-4 single-right">
                        <UpNext/>
                    </div>
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
    import Comments from "../components/Comments";
    import UpNext from "../components/UpNext";
    import General from "../components/General";
    export default {
        components: {
            Comments,
            UpNext,
            General
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
</style>