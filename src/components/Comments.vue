<template>
    <div class="all-comments">
        <div class="all-comments-info">
            <a href="#">Comments</a>
            <div class="agile-info-wthree-box">
                <form>
                    <input type="text" placeholder="Name" required="">
                    <input type="text" placeholder="Email" required="">
                    <input type="text" placeholder="Phone" required="">
                    <textarea placeholder="Message" required=""></textarea>
                    <input type="submit" value="SEND">
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
        <div class="media-grids">
            <div class="media">
                <h5>TOM BROWN</h5>
                <div class="media-left">
                    <a href="#">
                        <img src="../plugins/images/user.jpg" title="One movies" alt=" "/>
                    </a>
                </div>
                <div class="media-body">
                    <p>Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id ex pretium
                        hendrerit maecenas imperdiet ipsum id ex pretium hendrerit</p>
                    <span>View all posts by :<a href="#"> Admin </a></span>
                </div>
            </div>
            <div class="media">
                <h5>MARK JOHNSON</h5>
                <div class="media-left">
                    <a href="#">
                        <img src="../plugins/images/user.jpg" title="One movies" alt=" "/>
                    </a>
                </div>
                <div class="media-body">
                    <p>Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id ex pretium
                        hendrerit maecenas imperdiet ipsum id ex pretium hendrerit</p>
                    <span>View all posts by :<a href="#"> Admin </a></span>
                </div>
            </div>
            <div class="media">
                <h5>STEVEN SMITH</h5>
                <div class="media-left">
                    <a href="#">
                        <img src="../plugins/images/user.jpg" title="One movies" alt=" "/>
                    </a>
                </div>
                <div class="media-body">
                    <p>Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id ex pretium
                        hendrerit maecenas imperdiet ipsum id ex pretium hendrerit</p>
                    <span>View all posts by :<a href="#"> Admin </a></span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Comments"
    }
</script>

<style scoped>

</style>