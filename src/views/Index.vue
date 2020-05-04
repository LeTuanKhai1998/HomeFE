<template>
    <div>
        <FilterMovie :genres="genres" :country="countrys" />
        <Banner/>
        <BannerBottom :data="bannerBottom"/>
        <General/>
        <LatestTvSeries/>
    </div>
</template>

<script>
    /* eslint-disable */
    import FilterMovie from "../components/FilterMovie";
    import Banner from "../components/Banner";
    import BannerBottom from "../components/BannerBottom";
    import General from "../components/General";
    import LatestTvSeries from "../components/LatestTvSeries";
    import HomeDataService from "../services/HomeDataService";
    import APIPath from "../utils/APIPath";

    export default {
        name: "Index",
        components: {LatestTvSeries, General, BannerBottom, Banner, FilterMovie},
        data() {
            return {
                bannerBottom: null,
                genres: null,
                countrys: null,
            }
        },
        created() {
            this.prepation();
        },
        methods: {
            prepation() {
                // HomeDataService.getMovies(APIPath.MOVIE.Banner)
                //     .then(response => {
                //         this.$store.state.banner = response.data.data;
                //     });
                HomeDataService.getMovies(APIPath.MOVIE.BannerBottom)
                    .then(response => {
                        this.bannerBottom = response.data.data.data;
                    });
                     HomeDataService.getGenres(APIPath.MOVIE.Genres)
                    .then(response => {
                        this.genres = response.data.data.data;
                    });
                HomeDataService.getCountrys(APIPath.MOVIE.Countrys)
                    .then(respose => {
                        this.countrys = respose.data.data.data;
                    });
            },
        },
            watch: {
            genres: function (value) {
                if (value || this.countrys) {
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

    }
</script>

<style scoped>


</style>