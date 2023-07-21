<template>
  <div class="landing">
    <div class="bg_mob">
      <hooper :settings="hooperSettings" >
          <slide v-for="item in items" :key="item.img" :index="item.img">
               <img class="hooper__img" :src="item.img"/>
          </slide>
        </hooper>
    </div>
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
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: "LandingComponent",
  components: {
    Hooper,
    Slide
  },
  data () {
    return {
      hooperSettings: {
        itemsToShow: 1,
       autoPlay: true,
        playSpeed: 3000,
        centerMode: true,
        infiniteScroll: true,
        touchDrag: false,
        mouseDrag: false,
        wheelControl: false
      },
      items: [
        {
          img: require("@/assets/suchasno/two.jpg"),
        },
        {
          img: require("@/assets/suchasno/five.jpg"),
        },
        {
          img: require("@/assets//suchasno/three.jpg"),
        },
        {
          img: require("@/assets//suchasno/four.jpg"),
        },
        {
          img: require("@/assets//suchasno/one.jpg"),
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
  background-image: url('@/assets/Landing/second.webp');
  background-size: cover;
  background-position: center;
}
.bg_mob {
  display: none
}
.landing__title, .landing__title_mob {
  text-align: center;
  font-weight: 400;
  font-size: 55px;
  line-height: 71px;
  color: #ffffff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
}
.landing__title_mob {
  display:none;
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
  .landing__title {
    display: none;
  }
  .ar {
    left: 0;
    right: 0;
  }
}
@media screen and (max-width: 600px) {
  .bg_mob {
  display: block;
  }
  .landing {
    background: none;
  }
  .hooper {
  height: 100vh;
  left: -24px;
  width: 124vw;
  }
  .hooper__img {
  width: 125vw !important;
  height: 100vh !important;
  }
}
@media screen and (max-width: 428px) {
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
