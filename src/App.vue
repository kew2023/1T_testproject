<template>
    <Header v-model:userInfo="userInfo">
    </Header>

    <main>
        <Profile></Profile>
        <div class="main__container">
            <div class="main__line"></div>
            <div class="main__title">Отзывы</div>
            <div class="main__author"></div>
            <div class="main__reviews">
                <div class="main__reviews"></div>
            </div>
        </div>
    </main>
    <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />-->
</template>

<style>
* {
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>

<script>
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";
export default {
    data () {
        return {
            userInfo: {
                rating: 0,
                reviews: 0,
                sales: 0,
                buy: 0,
            }
        };
    },
    components: { Header, Profile }
};
</script>