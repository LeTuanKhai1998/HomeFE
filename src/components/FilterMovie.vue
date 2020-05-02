<template>
    <div class="movies_nav" style="background-color: #a4a4a5;margin-top: 20px;margin-bottom: 1px ">
        <div class="container">
            <nav class="navbar navbar-default">
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                    <nav>
                        <ul class="nav navbar-nav">
                            <li v-if="sortArr" class="dropdown" style="width: auto">
                                <select class="dropdown-toggle" data-toggle="dropdown" v-model="sortSelected">
                                    <option :value="item" v-for="item in sortArr" :key="item.id">
                                        {{item.name}}
                                    </option>
                                </select>
                            </li>
                            <li v-if="yearArr" class="dropdown" style="width: auto">
                                <select class="dropdown-toggle" data-toggle="dropdown" v-model="yearSelected">
                                    <option :value="item.toString()" v-for="item in yearArr" :key="item">
                                        {{item}}
                                    </option>
                                </select>
                            </li>
                            <li v-if="country" class="dropdown" style="width: auto">
                                <select class="dropdown-toggle" data-toggle="dropdown" v-model="countrySelected">
                                    <option :value="item" v-for="item in countryArr" :key="item.id">
                                        {{item.name}}
                                    </option>
                                </select>
                            </li>
                            <li v-if="genres" class="dropdown" style="width: auto">
                                <select class="dropdown-toggle" data-toggle="dropdown" v-model="genresSelected">
                                    <option :value="item" v-for="item in genresArr" :key="item.id">
                                        {{item.name}}
                                    </option>
                                </select>
                            </li>
                            <li style="float:right ">
                                <input type="submit" @click.prevent="gotoFilter" :value="$t('filter')">
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import HomeDataService from "../services/HomeDataService";

    export default {
        name: "FilterMovie",
        props: {
            country: Array,
            genres: Array,
        },
        data() {
            return {
                countrySelected: '',
                genresSelected: '',
                yearSelected: '',
                sortSelected: '',
                genresArr: [],
                countryArr: [],
                yearArr: [],
                sortArr: []
            }
        },
        created() {
            this.sortArr = [
                {
                    id: 0,
                    name: "Xắp xếp theo"
                },
                {
                    id: 1,
                    name: this.$t('top_viewed')
                },
                {
                    id: 2,
                    name: this.$t('top_rating')
                },
                {
                    id: 3,
                    name: this.$t('recently_added')
                }]
            this.sortSelected = this.sortArr[0]
            this.prepation();
        },
        methods: {
            gotoFilter() {
                this.$router.push({name: 'SearchFilter',
                    params: {
                        sort_filter: parseInt(this.sortSelected.id, 10),
                        year: isNaN(this.yearSelected) ? 0 : parseInt(this.yearSelected, 10),
                        country: parseInt(this.countrySelected.id, 10),
                        genre: parseInt(this.genresSelected.id, 10)
                    }
                });
            },
            prepation() {
                this.yearArr.push(this.$t('date_of_release'),);
                this.yearSelected = this.yearArr[0];
                HomeDataService.getYear()
                    .then(response => {
                        response.data.data.data.forEach(item => {
                            this.yearArr.push(item)
                        });
                    });
            }
        }
        ,
        watch: {
            genres(val) {
                this.genresArr.push({
                    id: 0,
                    name: this.$t('genres'),
                });
                this.genresSelected = this.genresArr[0];
                val.forEach(item => {
                    item.forEach(itemGenre => {
                        this.genresArr.push(itemGenre)
                    })
                })
            },
            country(val) {
                this.countryArr.push({
                    id: 0,
                    name: this.$t('country'),
                });
                this.countrySelected = this.countryArr[0];
                val.forEach(item => {
                    item.forEach(itemGenre => {
                        this.countryArr.push(itemGenre)
                    })
                })
            }
        }
    }
</script>


<style scoped>
    input {
        background-color: white !important;
        color: #333333 !important;
        border-radius: 10px;
        font-weight: bolder;
        outline: none;
    }

    input:hover {
        background-color: #FF8D1B !important;
        color: white !important;
    }

    option {
        color: #333333;
    }

    select option:checked,
    select option:hover {
        box-shadow: 0 0 10px 100px #000 inset;
    }

    select:focus > option:checked {
        background: #333333 !important;
        color: white;
    }

    select, input {
        text-transform: uppercase;
        position: relative;
        display: block;
        padding: 10px 15px;
        background-color: transparent;
        width: 100%;
        height: 100%;
        margin-top: 5px;
        color: white;
        border: 0px;
    }

    .pagination > .active > a {
        background-color: #FF8D1B;
        border-color: black;
    }

    .pagination > li:last-child > a,
    .pagination > li:last-child > a {
        border-radius: 0px 0px;
    }

    .pagination a:hover {
        cursor: pointer;
    }
</style>