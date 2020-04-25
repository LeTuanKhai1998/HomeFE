<template>
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="w3ls_footer_grid">
                <div class="col-md-6 w3ls_footer_grid_left">
                    <div class="w3ls_footer_grid_left1">
                        <h2>{{$t('subscribe_to_us')}}</h2>
                        <div class="w3ls_footer_grid_left1_pos">
                            <form action="#" method="post">
                                <input type="email" name="email" :placeholder="$t('your_email')" required="">
                                <input type="submit" :value="$t('send')">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 w3ls_footer_grid_right">
                    <a href="index.html"><h2>{{$t('one_logo')}}<span>{{$t('movies_logo')}}</span></h2></a>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="col-md-5 w3ls_footer_grid1_left">
                <p>&copy; {{$t('all_rights_reserved')}}</p>
            </div>
            <div class="col-md-7 w3ls_footer_grid1_right">
                <ul>
                    <li>
                        <a href="faq.html">{{$t('faq')}}</a>
                    </li>
                    <li>
                        <a href="contact.html">{{$t('contact_us')}}</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <!-- //footer -->
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>