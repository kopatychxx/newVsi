<template>
  <div class="landing">
    <v-carousel touchless class="carousel__mobile" cycle hide-delimiters :show-arrows="false" height="100vh">
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <div class="ar">
      <h1 class="landing__title">ЖИТЛОВИЙ КОМПЛЕКС <br> КОМФОРТ-КЛАСУ У БІЛОГОРОДЦІ</h1>
      <div class="arrow-down">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingComponent",
  data () {
    return {
      items: [
        {
          src: require('../assets/LandingMobile/first.webp'),
        },
        {
          src: require('../assets/LandingMobile/second.webp'),
        },
        {
          src: require('../assets/LandingMobile/third.webp'),
        },
      ],
    }
  },
}
</script>

<style scoped>
.carousel__mobile {
  display: none;
}
.landing {
  display: block;
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url('../assets/Landing/second.webp');
  background-size: cover;
  background-position: center;
}
.landing__title {
  text-align: center;
  font-weight: 400;
  font-size: 55px;
  line-height: 71px;
  color: #ffffff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
}
.ar {
  bottom: 70px;
  position: absolute;
  left: calc(50% - 490px);
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.arrow-down {
  margin: 25px auto 0;
}
.arrow-down span {
  display: block;
  width: 40px;
  height: 40px;
  border-bottom: 5px solid #ffffff;
  border-right: 5px solid #ffffff;
  transform: rotate(45deg);
  margin: -16px;
  animation: arrow-down 2s infinite;
}
.arrow-down span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow-down span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes arrow-down {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
@media screen and (max-width: 1440px) {

}
@media screen and (max-width: 1024px) {
  .ar {
    left: calc(50% - 436px);
  }
  .landing__title {
    font-size: 50px;
  }
}
@media screen and (max-width: 768px) {
  .carousel__mobile {
    display: block;
  }
  .landing {
    background-image: none;
  }
  .ar {
    left: 0;
  }
}
@media screen and (max-width: 428px) {
  .landing__title {
    font-size: 32px;
    line-height: normal;
  }
  .ar {
    left: 0;
  }
}
@media screen and (max-width: 320px) {
  .landing__title {
    font-size: 25px;
  }
}


</style>
