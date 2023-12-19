<template>
    <div class="container">
        <Header v-model:userInfo="userInfo">
        </Header>

        <main>
            <Profile></Profile>
            <div class="main__container">
                <div class="main__line"></div>
                <div class="main__title" @click="() => { getPost(0); countReviews = 5 }">Отзывы</div>
                <div class="main__author" v-if="reviews.length > 0">
                    <img src="./assets/icon.png" alt="" class="author__logo">
                    <div class="author__info">

                        <div class="info__container">
                            <div class="author__name">Ivan Mazepa</div>
                            <div class="author__rating">
                                <img src="./assets/stars.png" alt="">
                            </div>
                        </div>
                        <div class="author__text">50 отзывов за 1 месяц</div>
                        <div class="author__filter">
                            <div class="filter__title">Фильтр рейтинга</div>
                            <select class="filter__list" name="filter" id="0">
                                <option value="1">Все отзывы или от 1 до 5</option>
                                <option value="2">Вариант 2</option>
                                <option value="3">Вариант 3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="main__reviews" v-if="reviews.length > 0">
                    <Review :reviews="reviews" />
                </div>
                <div class="main__noreviews" v-else>Ещё не было отзывов ...</div>
                <div class="main__button_more" @click="loadMore">
                    Показать больше отзывов
                </div>
            </div>
        </main>
        <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />-->
    </div>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    font-family: Montserrat;
    font-style: normal;
    line-height: normal;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-left: 130px;
    padding-top: 130px;
    padding-right: 130px;
}

main {
    display: flex;
}

.container {
    max-width: 1920px;
    margin: 0 auto;

}

.main__container {
    margin-left: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.main__line {
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    border-radius: 1px;
    opacity: 0.2;
    background: var(--tx, #7D7781);
}

.main__title {
    color: #FFF;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 40px;
}

.main__author {
    display: flex;
    margin-bottom: 30px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
    padding: 20px;
}

.author__logo {
    width: 21.702px;
    height: 21.702px;
    padding: 19px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}

.author__info {
    width: 100%;
    display: flex;
    align-items: top;
    padding-top: 5px;
    margin-left: 20px;
}

.info__container {
    margin-right: 20px;
}

.author__name {
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
}

.author__text {
    color: #FFCE4F;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    padding-bottom: 10px;
    position: relative;
    top: -2px;
    /* 175% */
}

.author__rating img {
    width: 70px;
    height: 10px;
}

.author__filter {
    margin-left: auto;
}

.filter__title {
    color: #FFF;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.filter__list {
    width: 100%;
    height: 66px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
    color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 20px;
    padding-right: 20px;
}

.filter__list option {
    background: rgba(255, 255, 255, 0.08);
    color: black;
}

.main__reviews {}

.main__noreviews {
    color: #FFF;
    font-size: 18px;
}

.main__button_more {
    display: inline-flex;
    padding: 23px 30px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #FF9839;
    color: var(--ffffff, #FFF);
    font-size: 16px;
    font-weight: 600;
    align-self: center;
    margin-top: 20px;
}
</style>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";
import Review from "@/components/V-Review.vue";
import axios from "axios";

const userInfo = ref({
    rating: 0,
    reviews: 0,
    sales: 0,
    buy: 0,
});

const reviews = ref([]);
let countReviews = 5;
getPost(countReviews);



async function loadMore () {
    getPost(countReviews);
    countReviews += 5;
}

async function getPost (n) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        reviews.value = response.data.slice(0, n);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

</script>