<template>
  <div class="flatPlan">
    <carousel
        :touchDrag="false"
        :mouseDrag="false"
        :paginationEnabled="false"
        :centerMode="false"
        :perPageCustom="[
        [1920, 5],
        [1440, 4],
        [1024, 3],
        [768, 2],
        [425, 1],
        [375, 1],
        [320, 1],
      ]"
        :navigationEnabled="true"
    >
      <slide v-for="(item, i) in flats" :key="i"
      ><div class="flatCard">
        <img class="flat__img" :src="item.img"  v-if="floor3d === 1" alt="">
        <img class="flat__img" :src="item.imgTwo" v-if="floor3d === 2" alt="">
        <div class="card_row" v-if="item.countFloor === 2">
          <v-btn
              :class="{ active: firstFloor3d }"
              class="card_row-btn"
              @click="
                firstFloor3d = true;
                secondFloor3d = false;
                floor3d = 1;
              "
          >1 поверх</v-btn
          >
          <v-btn
              :class="{ active: secondFloor3d }"
              class="card_row-btn"
              @click="
                firstFloor3d = false;
                secondFloor3d = true;
                floor3d = 2;
              "
          >2 поверх</v-btn
          >
        </div>
        <div class="flat__info">
          <p class="flat__size">{{ item.size }}</p>
          <div class="flat__info-more">
            <span>{{ item.floor }}</span>
            <span>{{ item.section }}</span>
          </div>
        </div>
      </div></slide
      >
    </carousel>
  </div>
</template>

<script>
export default {
  name: "ThirdRoom",
  data: () => ({
    flats: [
      {
        img: require("../../assets/3room/3room3D.png"),
        imgTwo: require("../../assets/3room/3room3D2.png"),
        size: " 106,5 до 115,3 м² ",
        floor: "9 поверх",
        section: "1-2 секція",
        text: "двохповерхові",
        countFloor: 2,
      },
      {
        img: require("../../assets/3room/3room2d1.png"),
        imgTwo: require("../../assets/3room/3room2d1.png"),
        size: "106,5 м² ",
        floor: "9 поверх",
        section: "1-2 секція",
        text: "двохповерхові",
      },
      {
        img: require("../../assets/3room/3room2d2.png"),
        imgTwo: require("../../assets/3room/3room2d2.png"),
        size: " 110,2 м² ",
        floor: "9 поверх",
        text: "двохповерхові",
        section: "1-2 секція",
      },
      {
        img: require("../../assets/3room/3room2d3.png"),
        imgTwo: require("../../assets/3room/3room2d3.png"),
        size: " 115,3 м² ",
        floor: "9 поверх",
        text: "двохповерхові",
        section: "1-2 секція",
      },
    ],
    firstFloor3d: true,
    secondFloor3d: false,
    floor3d: 1,
  }),
}
</script>

<style scoped>
.card_row {
  width: 260px;
  display: flex;
}
.active {
  border-bottom: 2px solid #36593B;
}
.card_row-btn {
  width: 50% !important;
  background: none !important;
  box-shadow: none;
  border-radius: 0;
}
.flat__img {
  padding: 10px;
  width: 260px;
  box-shadow: 10px 10px 6px -5px rgba(0, 0, 0, 0.17);
}
.flat__info {
  padding: 10px;
}
.flat__size {
  font-weight: 700;
  font-size: 20px;
  margin: 0;
}
.flat__info-more{
  display: flex;
  column-gap: 5px;
}
.flat__info-more span {
  font-size: 14px;
  padding: 5px;
  background-color: #36593B;
  border-radius: 5px;
  color: white;
}
@media screen and (max-width: 1440px) {
  .flat__img,
  .card_row{
    width: 230px;
  }
}
@media screen and (max-width: 1024px) {
  .flat__img,
  .card_row{
    width: 230px;
  }
}
@media screen and (max-width: 768px) {
  .flat__img,
  .card_row{
    width: 260px;
  }
  .flatPlan {
    margin: 0 5%;
  }
}
@media screen and (max-width: 425px) {
  .flat__img,
  .card_row{
    width: 330px;
  }
}
@media screen and (max-width: 375px) {
  .flat__img,
  .card_row{
    width: 290px;
  }
}
@media screen and (max-width: 320px) {
  .flat__img,
  .card_row{
    width: 250px;
  }
}
</style>
