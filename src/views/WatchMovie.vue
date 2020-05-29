<template>
    <div>
        <div>
            <div class="md-subhead">
                <PathViews :path="path"/>
            </div>
        </div>
        <div>
            <div class="item">
                <div class="player" v-if="movie">
                    <video-player class="vjs-custom-skin"
                                  ref="videoPlayer"
                                  :options="playerOptions"
                                  :playsinline="true"
                                  @play="onPlayerPlay($event)"
                                  @pause="onPlayerPause($event)"
                                  @ended="onPlayerEnded($event)"
                                  @loadeddata="onPlayerLoadeddata($event)"
                                  @waiting="onPlayerWaiting($event)"
                                  @playing="onPlayerPlaying($event)"
                                  @timeupdate="onPlayerTimeupdate($event)"
                                  @canplay="onPlayerCanplay($event)"
                                  @canplaythrough="onPlayerCanplaythrough($event)"
                                  @ready="playerReadied"
                                  @statechanged="playerStateChanged($event)">
                    </video-player>
                </div>
            </div>
        </div>

        <div class="song-info" style="padding: 2%" v-if="movie">
            <h3 style=";color: #FF8D1B;font-weight: bold">{{movie.name.toUpperCase()}}</h3>
            <h3 style="font-size: xx-large;color:#feb900 ">{{movie.rate}}<span style="font-size: medium"> /5</span><span
                    style="font-size: medium;color: black"> ({{movie.num_rate}} {{$t('star_rating')}}) </span></h3>
            <StarRating style="float: left;margin-right: 5px" :rate="movie.rate"/>
        </div>

        <div style="padding: 2%">
            <h4>{{$t('synopsis-of-the-film-content')}}</h4>
            <form v-if="movie">
                <textarea-autosize
                        style="min-width: 100%;padding: 10px;font-size: medium;margin-top: 10px"
                        placeholder="Type something here..."
                        ref="myTextarea"
                        v-model="movie.description"
                        :min-height="30"
                        :max-height="350"
                />
                <!--                                <textarea style="min-width: 500px"  v-model="movie.description" ></textarea>-->
            </form>
            <Comments v-if="movie" :movie_id="movie.id"/>
            <h3 style="margin: 2em">{{$t('recently_added').toUpperCase()}}</h3>
            <BannerBottom :data="bannerBottom"/>
        </div>
    </div>
</template>

<script>
    // custom skin css
    // import '../src/custom-theme.css'

    import HomeDataService from "../services/HomeDataService";
    import PathViews from "../components/PathViews";
    import StarRating from "../components/StarRating";
    import Comments from "../components/Comments";
    import BannerBottom from "../components/BannerBottom";
    import APIPath from "../utils/APIPath";

    export default {
        name: "WatchMovie",
        components: {BannerBottom, Comments, StarRating, PathViews},
        props: {
            slug: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                bannerBottom: [],
                selectServe: null,
                path: null,
                movie: null,
                // videojs options
                playerOptions: {
                    height: '480',
                    autoplay: true,
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        // mp4
                        src: '',
                        // webm
                        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    poster: '',
                }
            }
        },
        created() {
            this.getMovieBySlug();
            this.prepation()
            this.path = [{
                "slug": this.slug,
                "pageName": 'WatchMovie'
            }]
        },
        mounted() {
            // console.log('this is current player instance object', this.player)
            setTimeout(() => {
                console.log('dynamic change options', this.player)

                // change src
                // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';

                // change item
                // this.$set(this.playerOptions.sources, 0, {
                //   type: "video/mp4",
                //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
                // })

                // change array
                // this.playerOptions.sources = [{
                //   type: "video/mp4",
                //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
                // }]
                this.player.muted(false)
            }, 5000)
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods: {
            prepation() {
                HomeDataService.getMovies(APIPath.MOVIE.BannerBottom)
                    .then(response => {
                        this.bannerBottom = response.data.data.data;
                    });
            },
            setPlayerOptions() {
                console.log(this.selectServe)
                this.playerOptions = {
                    height: '480',
                    autoplay: true,
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        // mp4
                        src: this.selectServe.url,
                        // webm
                        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    poster: this.movie.banner.url,
                }
            },
            getMovieBySlug() {
                if (!this.movie) {
                    HomeDataService.getMovieBySLug(this.slug)
                        .then(response => {
                            this.movie = response.data.data.data;
                            if (this.movie.serves != null && this.movie.serves.length > 0) {
                                this.selectServe = this.movie.serves[0]
                            }
                            this.setPlayerOptions()
                        });
                }
            },
            // listen event
            onPlayerPlay(player) {
                console.log('player play!', player)
            },
            onPlayerPause(player) {
                console.log('player pause!', player)
            },
            onPlayerEnded(player) {
                console.log('player ended!', player)
            },
            onPlayerLoadeddata(player) {
                console.log('player Loadeddata!', player)
            },
            onPlayerWaiting(player) {
                console.log('player Waiting!', player)
            },
            onPlayerPlaying(player) {
                console.log('player Playing!', player)
            },
            onPlayerTimeupdate(player) {
                console.log('player Timeupdate!', player.currentTime())
            },
            onPlayerCanplay(player) {
                console.log('player Canplay!', player)
            },
            onPlayerCanplaythrough(player) {
                console.log('player Canplaythrough!', player)
            },

            // or listen state event
            playerStateChanged(playerCurrentState) {
                console.log('player current update state', playerCurrentState)
            },

            // player is ready
            playerReadied(player) {
                // seek to 10s
                console.log('example player 1 readied', player)
                player.currentTime(10)
                // console.log('example 01: the player is readied', player)
            }
        }
    }
</script>
<style>
</style>

