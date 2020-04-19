<template>
    <ul class="w3l-ratings" v-if="rate">
        <li v-for="index in Math.trunc(rate)" :key="index.id">
            <a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
        <li v-if="rate-Math.trunc(rate)">
            <a href="#"><i class="fa fa-star-half-o" aria-hidden="true"></i></a>
        </li>
        <li v-for="index in getNoStar(rate)" :key="index.id">
            <a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
    </ul>
</template>

<script>
    import getStar from "../common/getStar";

    export default {
        props: {
            rate: Number
        },
        name: "StarRating"
        , methods: {
            getNoStar(val) {
                return getStar.getNoStar(val)
            }
        }
    }
</script>

<style scoped>

</style>