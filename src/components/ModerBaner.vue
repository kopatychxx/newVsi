<template>
  <div class="moderBaner">
    <div class="modern">
      <div class="photo">
        <hooper :settings="hooperSettings" >
          <slide v-for="item in items" :key="item.img" :index="item.img">
               <img class="hooper__img" :src="item.img"/>
          </slide>
        </hooper>
      </div>
      <div data-aos="fade-left" data-aos-duration="6000" class="text">
        <img class="arrowbanner" src="../assets/arrowBanner.webp" alt="">
        <h3>Сучасно</h3>
        <p>Готові квартири підключені до всіх необхідних комунікацій, встановлені вікна і двері, залишається тільки обрати дизайн</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: "ModerBaner",
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 3,
        autoPlay: true,
        playSpeed: 2000,
        infiniteScroll: true

      },
      items: [
        {
          img: require("@/assets/suchasno/one.jpg"),
        },
        {
          img: require("@/assets/suchasno/two.jpg"),
        },
        {
          img: require("@/assets//suchasno/three.jpg"),
        },
        {
          img: require("@/assets//suchasno/four.jpg"),
        },
        {
          img: require("@/assets//suchasno/five.jpg"),
        },
        ],
    }
  },
}
</script>

<style scoped>
.arrowbanner {
/*  width: 170px;*/
  top: -80px;
  position: relative;
}
.moderBaner {
  padding: 35px 15%;
  background-color: #36593B;
}
.modern {
/*  display: flex;*/
/*  flex-direction: row;*/
/*  justify-content: space-between;*/
}
h3 {
  font-size: 25px;
}
.photo {
width: 70%
}
.hooper{
height: 100% !important;
}
.hooper__img {
width: 250px;
}
.text {
  text-align: center;
  color: white;
  width: 350px;
}
.photo {
  display: flex;
  position: relative;
  top: -90px;
}

@media screen and (max-width: 1440px) {
  }
  .arrowbanner {
    width: 160px;
  }
@media screen and (max-width: 1024px) {
  .moderBaner {
    padding: 35px 5%;
  }
  .text {
    position: relative;
    top: 0px
  }
  .arrowbanner {
    top: -80px;
  }
}
@media screen and (max-width: 768px) {

}
</style>
