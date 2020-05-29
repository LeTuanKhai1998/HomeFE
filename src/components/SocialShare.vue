<template>
    <div class="share">
        <h5>Share this</h5>
        <div class="single-agile-shar-buttons">
            <ul>
                <li>
                    <div class="fb-like" data-href="https://www.facebook.com/w3layouts"
                         data-layout="button_count" data-action="like" data-size="small"
                         data-show-faces="false" data-share="false">
                    </div>
                </li>
                <li>
                    <div class="fb-share-button" data-href="https://www.facebook.com/w3layouts"
                         data-layout="button_count" data-size="small" data-mobile-iframe="true">
                        <a class="fb-xfbml-parse-ignore" target="_blank"
                           href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&amp;src=sdkpreparse">Share</a>
                    </div>
                </li>
                <li>
                    <!-- Place this tag where you want the +1 button to render. -->
                    <div class="g-plusone" data-size="medium"></div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SocialShare",
        mounted() {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

        }
    }
</script>

<style scoped>

</style>