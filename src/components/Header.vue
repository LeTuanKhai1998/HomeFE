<template>
    <!-- header -->
    <div class="header">
        <div class="container">
            <div class="w3layouts_logo">
                <router-link :to="{name:'Home'}"><h1>{{$t('one_logo')}}<span>{{$t('movies_logo')}}</span></h1>
                </router-link>
            </div>
            <div class="w3_search">
                <form action="#" method="post">
                    <input type="text" name="Search" v-model="keyword" :placeholder="$t('enter_name_search')"
                           required="">
                    <input type="submit" @click.prevent="gotoSearch" :value="$t('go_search')">
                </form>
            </div>
            <div class="w3l_sign_in_register">
                <ul>
                    <li>
                        <div class="dropdown">
                            <button class="dropbtn" type="button" data-toggle="dropdown">
                                {{$t('language[0].name')}}
                                <span class="caret"></span></button>
                            <div class="dropdown-content">
                                <a v-for="lang in $t('language')" v-bind:key="lang.value"
                                   @click.prevent="callSetLangActions(lang)" :title="lang.name">
                                    <img :src="require(`@/assets/${lang.icon}`)">
                                    {{lang.name }}
                                </a>
                            </div>
                        </div>
                    </li>
                    <li><a href="#" data-toggle="modal" data-target="#myModal">{{$t('login')}}</a></li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <!-- //header -->
</template>

<script>
    import i18n from "../lang/i18n";
    import StringConstant from "../constant/StringConstant";

    export default {
        name: "Header",
        data() {
            return {
                keyword: "",
                formToast: {
                    message: '',
                    type: '',
                    position: 'bottom',
                },
            }
        },
        methods: {
            showToast() {
                this.$toast.open(this.formToast)
            },
            setDataToast(message, type,position) {
                this.formToast.message = message
                this.formToast.type = type
                this.formToast.position = position
            },
            gotoSearch() {
                if (!this.keyword) {
                    this.setDataToast(this.$t('please_enter_a_keyword'), StringConstant.TypeToastError,StringConstant.TopToast);
                    this.showToast();
                } else {
                    this.$router.push({name: 'Search', params: {keyword: this.keyword}});
                }
            },
            callSetLangActions(lang) {
                i18n.locale = lang.value;
                i18n.fallbackLocale = lang.value;
            }
        }
    }
</script>

<style scoped>
    .dropbtn {
        margin-left: -20px;
        font-size: 16px;
        border: none;
        font-weight: bold;
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        background: #333333;
        text-align: center;
        padding: 6px 30px;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #333333;
        min-width: 200px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        font-weight: normal;
        float: left;
        background-color: #333333 !important;
        cursor: pointer;
        color: white;
        text-decoration: none;
        display: block;
    }

    .dropdown-content img {
        max-height: 22px;
        overflow: auto;

    }

    .dropdown-content a:hover {
        background-color: #ddd;
        color: #FF8D1B;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown:hover .dropbtn {
        background-color: #FF8D1B;
    }
</style>