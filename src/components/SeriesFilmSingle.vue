<template>
    <div v-if="movie">
        <router-link active-class="link" :to="{ name : 'Single',  params: { slug: movie.slug }}"
                     class="hvr-shutter-out-horizontal">
            <img :src="getImgUrl(movie.image.url)" title="album-name" class="img-responsive"
                 :alt="movie.image.alt"/>
            <div class="description">
                <h4 class="title">Tập 1</h4>
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
    .description {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    transition: all .4s ease;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjIlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4KICAgIDxzdG9wIG9mZnNldD0iMyUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wMSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMSUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wNCIvPgogICAgPHN0b3Agb2Zmc2V0PSIzMyUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4yMSIvPgogICAgPHN0b3Agb2Zmc2V0PSI3MyUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC42MSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuODciLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);
}
.title {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
    font-weight: bold;
}
</style>