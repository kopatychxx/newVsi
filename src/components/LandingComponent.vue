<template>
  <div class="landing">
    <h1 class="landing__title">ЖИТЛОВИЙ КОМПЛЕКС <br> КОМФОРТ-КЛАСУ У БІЛОГОРОДЦІ</h1>
    <v-carousel class="carousel__mobile" cycle hide-delimiters :show-arrows="false" height="100vh">
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <img class="landingImg" src="../assets/Landing/second.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: "LandingComponent",
  data () {
    return {
      items: [
        {
          src: require('../assets/Landing/first.jpg'),
        },
        {
          src: require('../assets/Landing/second.jpg'),
        }
      ],
    }
  },
}
</script>

<style scoped>
.carousel__mobile {
  display: none;
}
.landingImg {
  display: block;
  height: 100vh;
  width: 100vw;
}
.landing__title {
  z-index: 2;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 25%;
  font-weight: 400;
  font-size: 55px;
  line-height: 71px;
  color: #ffffff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
@media screen and (max-width: 1440px) {
  .landing__title {
    left: 20%;
  }
}
@media screen and (max-width: 1024px) {
  .landing__title {
    top: 40%;
    left: 7%;
  }
}
@media screen and (max-width: 768px) {
  .landing__title {
    left: 2%;
  }
  .carousel__mobile {
    display: block;
  }
  .landingImg {
    display: none;
  }

}
@media screen and (max-width: 425px) {
  .landing__title {
    top: 50%;
    font-size: 32px;
    line-height: normal;
  }
}
@media screen and (max-width: 320px) {
  .landing__title {
    font-size: 25px;
  }
}


</style>
