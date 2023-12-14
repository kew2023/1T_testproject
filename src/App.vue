<template>
  <section class="main_bg">
    <div class="container">
      <Header :userInfo="userInfo"/>
      <main>
        <Profile/>
        <div class="main__container">
          <div class="main__line"></div>
          <div class="main__title">Отзывы</div>
          <div class="main__author"></div>
          <div class="main__reviews">
            <div class="main__reviews"></div>
          </div>
        </div>
        <section>
          <div class="" v-for="item of reviews">
            <p>{{ item.id }}</p>
            <p>{{ item.body }}</p>
            <p>{{ item.title }}</p>
          </div>

        </section>
        <router-view/>
      </main>
    </div>
  </section>


  <!--<nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</nav>
<router-view />-->
</template>

<style>
* {
  padding: 0 15px;
  margin: 0;
}

.container {
  max-width: 1920px;
  margin: 0 auto;
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
<!--

<script>
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";

export default {
  data() {
    return {
      userInfo: {
        rating: 0,
        reviews: 0,
        sales: 0,
        buy: 0,
      }
    };
  },
  components: {Header, Profile}
};
</script>
-->
<script setup>
import {ref} from "vue";
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";
import axios from "axios";

const userInfo = ref({
  rating: 0,
  reviews: 0,
  sales: 0,
  buy: 0,
})
getPost()

const reviews = ref([])

async function getPost() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?limit=12');
    reviews.value = response.data
    console.log(response)
  } catch (error) {
    console.error(error);
  }
}

</script>
<style>
.main_bg {
  background: url("assets/sparks.png") no-repeat 1% 1%;
}
</style>
