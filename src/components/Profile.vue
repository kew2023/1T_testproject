<template lang="html5">
    <div class="profile">
        <div class="profile__header" >
            <router-link to='/profile'>
                <img class="profile__icon" src="../assets/icon.png" alt="Икон">
            </router-link>
            <div class="profile__info">
                <p class="profile__name">Ivan_Mazepa</p>
                <p class="profile__status" :class="{ 'online': online, 'offline': !online }" @click="online = !online; n = (n+1)%2 ">{{statusText[n]}}</p>
                <p class="profile__status" style = "display:none">Офлайн</p>
            </div>
        </div>
        <p class="profile__description">Продажа голды WOW 24/7</p>
        <div class="profile__register">
            <p class="register__info">Регистрация: <span>Месяц назад</span> </p>
            <p class="register__date">25 ноября 2022, в 11:33</p>
        </div>
        <nav>
            <router-link to='/transactions' active-class="active" class="nav__item" id="nav1" >Сделки</router-link>
            <router-link to='/ads' active-class="active" class="nav__item" id="nav2" >Объявления</router-link>
            <router-link to='/reviews' active-class="active" class="nav__item" id="nav3" >Отзывы</router-link>
            <router-link to='/profile' active-class="active" class="nav__item" id="nav4" >Редактировать профиль</router-link>
            <router-link to='/exit' active-class="active" class="nav__item exit" id="nav5" > Выйти</router-link>
        </nav>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
let online = ref(true);
let n = 0;
const statusText = ['Онлайн', 'Офлайн']

</script>
<style scoped>
.profile {
    height: 100%;
    width: 320px;
    padding: 25px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}

.profile__header {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: default;
}

.profile__icon {
    width: 34.426px;
    height: 34.426px;
    padding: 17.79px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}

.profile__info {
    margin-left: 15px;
}

.profile__name {
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
}

.profile__status {
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.online,
.online::before {
    color: #29C226
}

.online::before {
    content: '';
    display: inline-block;
    margin-bottom: 2px;
    width: 5px;
    height: 5px;
    -moz-border-radius: 2.5px;
    -webkit-border-radius: 2.5px;
    border-radius: 2.5px;
    color: #29C226;
    background-color: #29C226;
    margin-right: 10px;
    box-shadow: 0px 0px 5px 4px rgba(41, 194, 38, 0.20);
}


.offline {
    color: #b42d2d;
}

.offline::before {
    margin-bottom: 2px;
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    -moz-border-radius: 2.5px;
    -webkit-border-radius: 2.5px;
    border-radius: 2.5px;
    color: #b42d2d;
    background-color: #b42d2d;
    margin-right: 10px;
    box-shadow: 0px 0px 5px 4px rgba(41, 194, 38, 0.20);
}

.profile__description {
    color: #7D7781;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;
}

.profile__register {
    width: 95%;
    border-radius: 15px;
    background: rgba(14, 9, 19, 0.50);
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 15px;
}

.register__info {
    display: block;
    color: #7D7781;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
}

.register__info span {
    display: inline;
}

.register__date {
    display: block;
    color: #FFF;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
}

nav {
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.nav__item {
    display: flex;
    align-items: center;
    width: 270px;
    height: 60px;
    margin-bottom: 0px;
    padding-left: 15px;
    text-decoration-line: none;

    color: #7D7781;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.nav__item::before {
    margin-right: 15px;
}

nav>.active {
    color: #FFFFFF;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}

#nav1::before {
    content: url("../assets/icon_nav_1.svg");
}

#nav2::before {
    content: url("../assets/icon_nav_2.svg");
}

#nav3::before {
    content: url("../assets/icon_nav_3.svg");
}

#nav4::before {
    content: url("../assets/icon_nav_4.svg");
}

#nav5::before {
    content: url("../assets/icon_nav_5.svg");
}

.exit {
    color: #FA3939;
}

@media (max-width: 1919px) {

    .profile {
        width: 234px;
        padding: 20px;
    }

    .profile__icon {
        width: 24.59px;
        height: 24.59px;
        padding: 12.71px;
        border-radius: 15px;
    }

    .profile__info {
        margin-left: 15px;
        padding-top: 12px;
        padding-bottom: 12px;

    }

    .profile__name {
        font-size: 14px;
    }

    .profile__status {
        font-size: 12px;
    }


    .profile__description {
        color: #7D7781;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .profile__register {
        border-radius: 15px;
        background: rgba(14, 9, 19, 0.50);
        padding-left: 15px;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .register__info {
        font-size: 12px;
        line-height: 20px;
    }

    .register__info span {
        display: inline;
    }

    .register__date {
        display: block;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
    }

    .nav__item {
        width: 220px;
        height: 48px;
        padding-left: 15px;
        font-size: 14px;
    }
}

@media (max-width: 1279px) {}

@media (max-width: 1023px) {}
</style>