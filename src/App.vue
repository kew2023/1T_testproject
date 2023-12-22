<template>
    <div class="container">
        <Header v-model:userInfo="userInfo">
        </Header>

        <main>
            <Profile></Profile>
            <router-view />

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
</style>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";

const userInfo = ref({
    rating: 0,
    reviews: 0,
    sales: 0,
    buy: 0,
});

</script>