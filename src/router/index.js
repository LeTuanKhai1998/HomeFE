import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            props: true,
            component: Index
        },
        {
            path: "/chi-tiet/:slug",
            name: "Single",
            props: true,
            component: () =>
                import(/* webpackChunkName: "Single" */ "../views/Single.vue")
        },
        {
            path: "/xem-phim",
            name: "Watch Movie",
            props: true,
            component: () =>
                import(/* webpackChunkName: "Single" */ "../views/WatchMovie.vue")
        },
        {
            path: "/faq",
            name: "Faq",
            props: true,
            component: () =>
                import(/* webpackChunkName: "Faq" */ "../views/Faq.vue")
        }
    ]
});


export default router;
