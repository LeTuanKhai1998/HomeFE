<template>
    <!-- /w3l-medile-movies-grids -->
    <div class="general-agileits-w3l">
        <div class="w3l-medile-movies-grids">

            <!-- /movie-browse-agile -->

            <div class="movie-browse-agile">
                <!--/browse-agile-w3ls -->
                <div class="browse-agile-w3ls general-w3ls">
                    <div class="tittle-head">
                        <h4 class="latest-text">{{title}}</h4>
                        <div class="container">
                            <PathViews :path="path"/>
                        </div>
                    </div>
                    <div class="container">
                        <div class="browse-inner">
                            <div class="col-md-2 w3l-movie-gride-agile" v-for="i in 30" :key="i.id">
                                <Movie :movie="movie"/>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <!--//browse-agile-w3ls -->
                <div class="blog-pagenat-wthree">
                    <ul>
                        <li><a class="frist" href="#">Prev</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a class="last" href="#">Next</a></li>
                    </ul>
                </div>
            </div>
            <!-- //movie-browse-agile -->
            <!--body wrapper start-->
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
    import i18n from "../lang/i18n";
    import Movie from "../components/Movie";
    import BannerBottom from "../components/BannerBottom";

    export default {
        name: "Genres",
        components: {BannerBottom, Movie, PathViews},
        props: {
            genreName: String
        },
        data() {
            return {
                path: null,
                dataBanner: null,
                movie: {
                    "id": 2,
                    "name": "Hành trình của Moana",
                    "slug": "hanh-trinh-cua-moana",
                    "description": "Ở một ngôi làng giữa biển khơi - có một cô bé đầy dũng mãnh, gan dạ, khao khát tự do và luôn tìm đến miền biển khơi, nhưng lại bị người làng ngăn cản - chính là Moana. Thế nhưng rồi, bóng tối hiện về, hòn đảo chết dần, cô được biển khơi trao tặng sứ mệnh vượt đại dương, trả lại trái tim cho Te Fiti, để cứu lấy nhân loại. Xuyên suốt đồng hành trên chuyến đi là Á Thần Maui - kẻ đã gây ra sai lầm trong quá khứ và chú gà HeiHei ngốc nghếch. Hành trình đầy giông bão và khó khăn, Moana và Maui sẽ vượt qua như thế nào ?",
                    "release_year": 2018,
                    "num_view": 1000,
                    "run_time": 180,
                    "rate": 5,
                    "num_rate": 2,
                    "create_time": "2020-03-30T16:23:12Z",
                    "update_time": "2020-04-17T17:28:06Z",
                    "country": {
                        "id": 1,
                        "name": "Châu á"
                    },
                    "image": {
                        "id": 4,
                        "url": "a1.jpg",
                        "alt": "Moana"
                    },
                    "banner": {
                        "id": 5,
                        "url": "a1_banner.jpg",
                        "alt": "Moana banner"
                    },
                    "genres": [
                        {
                            "id": 2,
                            "name": "Khoa học viễn tưởng"
                        }
                    ],
                    "actors": [
                        {
                            "id": 5,
                            "name": "Dwayne Johnson",
                            "description": "Dwayne Johnson tên đầy đủ là Dwayne Douglas Johnson, còn được biết đến với tên The Rock là nam diễn viên, nhà sản xuất và cựu đô vật chuyên nghiệp người Mỹ. Johnson từng tham gia đội bóng bầu dục tại Đại học Miami, và cũng tại đây anh đã giành chức vô địch quốc gia cho đội bóng bầu dục 1991 Miami Hurricanes.",
                            "birthday": "1972-05-01T17:00:00Z"
                        },
                        {
                            "id": 6,
                            "name": "Alan Tudyk",
                            "description": "Alan Wray Tudyk là một diễn viên và diễn viên lồng tiếng người Mỹ, được biết đến với vai diễn Hoban \"Wash\" Washburne trong loạt phim về phía tây không gian Firefly và bộ phim Serenity và Tucker McGee trong Tucker & Dale vs. Evil.",
                            "birthday": "1971-03-15T17:00:00Z"
                        }
                    ]
                }
            }
        },
        created() {
            //alert(this.genreName)
            this.path = [
                {
                    "slug": "the-loai",
                    "pageName": 'Genres'
                },
                {
                    "slug": this.genreName,
                    "pageName": 'Genres'
                }]
        },
        computed: {
            title() {
                return !i18n.locale.localeCompare('vn') ? this.$t('movies').concat(' ', this.genreName) : this.genreName.concat(' ', this.$t('movies'));
            }
        },
        watch: {
            lang() {
                alert()
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>