<template>
    <div>
        <Banner/>
        <BannerBottom :data="bannerBottom"/>
        <General/>
        <LatestTvSeries/>
    </div>
</template>

<script>
    /* eslint-disable */

    import Banner from "../components/Banner";
    import BannerBottom from "../components/BannerBottom";
    import General from "../components/General";
    import LatestTvSeries from "../components/LatestTvSeries";
    import HomeDataService from "../services/HomeDataService";
    import APIPath from "../utils/APIPath";

    export default {
        name: "Index",
        components: {LatestTvSeries, General, BannerBottom, Banner},
        data() {
            return {
                bannerBottom: null
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
                        this.bannerBottom = response.data.data;
                    });
            },
        }

    }
</script>

<style scoped>


</style>