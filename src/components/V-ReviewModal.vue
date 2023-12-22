<template>
    <div class="modal">
        <div class="content">
            <img src="../assets/icon.png" alt="" class="review__logo">
            <div class="review__info">
                <div class="review__top">
                    <p class="review__userName">Пользователь{{ selectedReview.id }}</p>
                    <p class="review__type">World of Warcraft, {{ Math.round(Math.random() * 1000) }} ₸</p>
                    <div class="review__rating">
                        <p class="rating__text">Этот месяц</p>
                        <img src="../assets/stars.png" alt="" class="review__rating_score">
                    </div>

                </div>
                <div class="review__disctiption">
                    {{ selectedReview.body }}
                </div>
            </div>
            {{ selectedReview.id }}
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['showReview', 'reviews']);

let selectedReview = {};
for (let review of props.reviews) {
    if (review.id == props.showReview) selectedReview = review;
}

</script>

<style lang="css" scoped>
.modal {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
}

.content {
    margin: auto;
    display: flex;
    height: 65px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.02);
    background: rgba(0, 0, 0, 0.877);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
    padding: 20px;
}

.review__logo {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    padding: 15px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}

.review__info {
    margin-left: 19px;
    width: 100%;
}

.review__top {
    width: 100%;
    display: flex;
    align-items: end;
    margin-bottom: 15px;
}

.review__userName {
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin-right: 20px;
}

.review__type {
    color: #FF9839;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.review__rating {
    display: flex;
    align-items: end;
    margin-left: auto;
}

.rating__text {
    color: #7D7781;
    text-align: right;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 20px;
}

.review__rating_score {
    width: 112px;
    height: 16px;
    flex-shrink: 0;
}

.review__disctiption {
    color: #7D7781;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    /* 175% */
}
</style>
