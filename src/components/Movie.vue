<template>
    <div v-if="movie">
        <router-link active-class="link" :to="{ name : 'Single',  params: { slug: movie.slug }}"
                     class="hvr-shutter-out-horizontal">
            <img :src="getImgUrl(movie.image.url)" title="album-name" class="img-responsive"
                 :alt="movie.image.alt"/>
            <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i>
            </div>
        </router-link>
        <div class="mid-1 agileits_w3layouts_mid_1_home">
            <div class="w3l-movie-text">
                <h6>
                    <router-link :to="{ name : 'Single',  params: { slug: movie.slug }}">{{movie.name}}</router-link>
                </h6>
            </div>
            <div class="mid-2 agile_mid_2_home">
                <p>{{movie.release_year}}</p>
                <div class="block-stars">
                    <StarRating :rate="movie.rate"/>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <div class="ribben">
            <p>{{ $t("new") }}</p>
        </div>
    </div>
</template>

<script>

    import StarRating from "./StarRating";
    import getUrl from "../common/getUrl";

    export default {
        name: "Movie",
        components: {StarRating},
        props: {
            movie: Object
        },
        methods: {
            getImgUrl(val) {
                return getUrl.getImgUrl(val,1)
            },
        }
    }
</script>

<style scoped>

    body a:hover{
        color: #FF8D1B;
    }
</style>