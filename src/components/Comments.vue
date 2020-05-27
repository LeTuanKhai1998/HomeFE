<template>
    <div class="all-comments">
        <div class="all-comments-info">
            <a href="#">{{$t('share_about_movie')}}</a>
            <div class="agile-info-wthree-box">
                <form>
                    <textarea :placeholder="$t('message')" v-model="comment" required=""></textarea>
                    <input type="submit" @click.prevent="postComment" :value="$t('send')">
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
        <h3 style="  margin-top: 3em;">{{$t('comments')|commment}}</h3>
        <div v-if="!data || data.length == 0" class="comment text-center" style="font-size: 12pt">
            {{$t('movie_no_comments')}}
        </div>
        <div class="comment media-grids " v-if="data && data.length>0">
            <div class="media" v-for="item in data" :key="item.id">
                <div class="media-left">
                    <a href="#">
                        <!--                        <img src="../plugins/images/user.jpg" title="One movies" alt=" "/>-->
                        <img style="max-height: 64px;max-width: 64px" v-lazy="getImgUrl(item.avatar.url)"
                             :title="item.user_name" :alt="item.avatar.alt"/>
                    </a>
                </div>
                <div class="media-body">
                    <p style="font-size:14pt;font-weight: bold;color: #333333">{{item.user_name}}</p>
                    <p style="float: right">{{item.update_time | formatDate}}</p>
                    <p style="font-size: 12pt">{{item.description}}</p>
                </div>
            </div>
        </div>
        <div v-if="data && data.length>0" class="text-center"
             style="margin-top: 20px;margin-bottom: 50px">
            <a @click.prevent="loadMore" class="laodmore" style="cursor: pointer">{{$t('load_more')}}</a>
        </div>
    </div>
</template>

<script>
    import HomeDataService from "../services/HomeDataService";
    import NumConstant from "../constant/NumConstant";
    import getUrl from "../common/getUrl";
    import moment from 'moment';
    import StringConstant from "../constant/StringConstant";


    export default {
        name: "Comments",
        props: {
            movie_id: Number
        },
        data() {
            return {
                data: null,
                temp: null,
                form: null,
                formPostComment: null,
                currentPage: 0,
                totalPages: 0,
                comment: '',
                messageReponsse: '',
                isLoading: false,
                formToast: {
                    message: '',
                    type: '',
                    position: StringConstant.BottomToast,
                },
            }
        },
        created() {

            if (this.movie_id) {
                this.prepation();
            }
        },
        filters: {
            commment: function (value) {
                return value.toUpperCase()
            },
            formatDate: function (value) {
                if (value) {
                    return moment(String(value)).format('hh:mm MM/DD/YYYY')
                }
            }
        },
        methods: {
            showToast() {
                this.$toast.open(this.formToast)
            },
            loadMore() {
                ++this.currentPage;
                this.prepation();
            },
            getImgUrl(val) {
                return getUrl.getImgUrl(val, 2)
            },
            setDataToast(message, type) {
                this.formToast.message = message
                this.formToast.type = type
            },
            setDataFormPostComment() {
                this.formPostComment = {
                    description: this.comment,
                    movie_id: this.movie_id,
                    user_id: Math.floor(Math.random() * (6 - 4 + 1)) + 4
                }
            },
            setDataForm() {
                this.form = {
                    pagination: {
                        currentPage: this.currentPage,
                        itemsPerPage: NumConstant.CommentPerMovie,
                        sort: "",
                        sortOrder: false,
                        totalItemCount: 0
                    },
                    movie_id: this.movie_id
                }
            },
            postComment() {
                if (this.comment.length < 15) {
                    this.setDataToast(this.$t('validate_comment'), StringConstant.TypeToastWarning)
                    this.showToast()
                } else {
                    this.setDataFormPostComment();
                    HomeDataService.postComment(this.formPostComment)
                        .then(response => {
                            this.messageReponsse = response.data.data.message;
                            if (this.messageReponsse.localeCompare(StringConstant.Successful) == 0) {
                                this.setDataToast(this.$t('comment_has_sent'), StringConstant.TypeToastSuccess)
                                this.showToast()
                                this.comment = ''
                                this.isLoading = true;
                                this.prepation();
                            } else {
                                this.setDataToast(this.$t('comment_failed'), StringConstant.TypeToastError)
                                this.showToast()
                            }
                        });
                }
            },
            prepation() {
                this.setDataForm()
                HomeDataService.getCommentByMovieId(this.form)
                    .then(response => {
                        if (!this.data || this.isLoading) {
                            this.data = response.data.data.data;
                        } else {
                            this.temp = response.data.data.data;
                            if (this.temp && this.temp.length > 0) {
                                this.temp.forEach(item => {
                                    this.data.push(item);
                                })
                            } else {
                                this.setDataToast(this.$t('all_comments_loaded'), StringConstant.TypeToastInfo)
                                this.showToast()
                            }
                        }
                        this.isLoading = false;
                        this.totalPages = response.data.data.TotalPages;
                    });
            }
        }
    }
</script>

<style scoped>
    .media-grids {
        margin-top: 2em;
    }

    .comment {
        padding: 10px;
        border: 1pt solid #9E9E9E;
        border-style: dotted
    }

    .laodmore {
        color: white;
        background-color: #333333;
        padding: 10px;
    }

    .laodmore:hover {
        background-color: #FF8D1B;

    }
</style>