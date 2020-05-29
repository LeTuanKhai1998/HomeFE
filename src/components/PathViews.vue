<template>
    <div class="agileits-single-top">
        <ol class="breadcrumb">
            <li>
                <router-link :to="{name:'Home'}">{{$t('one_movie')}}</router-link>
            </li>
            <li class="active" v-for="item in path" :key="item.id">
                <router-link :to="{name: item.pageName,params: { slug: item.slug }}">{{item.slug}}</router-link>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "PathViews",
        props: {
            path: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>