<template>
    <!-- banner-bottom -->
    <div v-if="data" class="banner-bottom">
        <div class="container">
            <div class="w3_agile_banner_bottom_grid">
                <div id="owl-demo" class="owl-carousel owl-theme">
                    <div class="item" v-for="item in data" :key="item.id">
                        <div class="w3l-movie-gride-agile w3l-movie-gride-agile1">
                            <Movie :movie="item"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- //banner-bottom -->
</template>

<script>
    import $ from "jquery";
    import Movie from "./Movie";

    export default {
        name: "BannerBottom",
        components: {Movie},
        props: {
            data: Array
        },
        watch: {
            data: function (value) {
                if (value) {
                    $(document).ready(function () {
                        $("#owl-demo").owlCarousel({
                            autoPlay: 3000, //Set AutoPlay to 3 seconds
                            items: 5,
                            itemsDesktop: [640, 4],
                            itemsDesktopSmall: [414, 3]
                        });
                    });
                }
            }
        },
        // mounted() {
        //     if (this.data) {
        //         alert("AAAA")
        //         $(document).ready(function () {
        //             $("#owl-demo").owlCarousel({
        //                 autoPlay: 3000, //Set AutoPlay to 3 seconds
        //                 items: 5,
        //                 itemsDesktop: [640, 4],
        //                 itemsDesktopSmall: [414, 3]
        //             });
        //         });
        //     }
        // }
    }
</script>

<style scoped>

</style>