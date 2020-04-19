/* eslint-disable */
<template>
    <div v-if="data" id="slidey" style="display:none;">
        <ul>
            <li v-for="item in data" v-bind:key="item.id">
                <img :src="getImgUrl(item.banner.url)" :alt="item.banner.alt">
                <p class='title'>
                    <router-link :to="{ name : 'Single',  params: { slug: item.slug }}">{{item.name}}</router-link>
                </p>
                <p class='description'>{{item.description}}</p></li>
        </ul>
    </div>
</template>

<script>

    import $ from "jquery";
    import HomeDataService from "../services/HomeDataService";
    import getUrl from "../common/getUrl";
    import APIPath from "../utils/APIPath";
    /* eslint-disable */

    export default {
        name: "Banner",
        data() {
            return {
                data: null
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
                HomeDataService.getMovies(APIPath.MOVIE.Banner)
                    .then(response => {
                        this.data = response.data.data;
                    });
            }

        },
        watch: {
            data: function (value) {
                if (value) {
                    $(document).ready(function () {
                        $("#slidey").slidey({
                            interval: 8000,
                            listCount: 5,
                            autoplay: false,
                            showList: true
                        });
                        $(".slidey-list-description").dotdotdot();
                    });
                }
            }
        }
    }
</script>

<style scoped>
    body a{
        color: white;
    }
    body a:hover,
    body a:focus,
    body a:active{
        color: #e72a12;
    }

</style>