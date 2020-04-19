<template>
    <div id="app">
        <Header/>
        <Nav/>
        <SocialNav/>
        <router-view :key="$route.path"/>
        <Footer/>
    </div>
</template>
<script>
    /* eslint-disable */
    import Header from "./components/Header";
    import Nav from "./components/Nav";
    import Footer from "./components/Footer";
    import $ from "jquery";
    import "./plugins/js/move-top";
    import SocialNav from "./components/SocialNav";

    export default {
        components: {
            SocialNav,
            Footer,
            Nav,
            Header
        }, mounted() {
            // here stars scrolling icon
            addEventListener("load", function () {
                setTimeout(hideURLbar, 0);
            }, false);

            function hideURLbar() {
                window.scrollTo(0, 1);
            }
        }
    }
</script>

<style>
    /* eslint-disable */

    @import "./plugins/css/bootstrap.css";
    @import "./plugins/css/style.css";
    @import "./plugins/css/contactstyle.css";
    @import "./plugins/css/faqstyle.css";
    @import "./plugins/css/single.css";
    @import "./plugins/css/medile.css";
    /*banner-slider */
    @import "./plugins/css/jquery.slidey.min.css";
    /*//banner-slider*/
    /*pop-up*/
    @import "./plugins/css/popuo-box.css";
    /*//pop-up*/
    /*font-awesome icons*/
    @import "./plugins/css/font-awesome.min.css";
    /*//font-awesome icons*/
    /*banner-bottom-plugin*/
    @import "./plugins/css/owl.carousel.css";
    /*//banner-bottom-plugin*/
    @import "./plugins/news-css/news.css";
    @import "./plugins/list-css/list.css";
    @import "./plugins/css/flexslider.css";

</style>
