<template>
  <div class="flatPlan">
    <carousel
        :touchDrag="false"
        :mouseDrag="false"
        :paginationEnabled="false"
        :centerMode="false"
        :perPageCustom="[
        [1920, 3],
        [1440, 3],
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
        <img class="flat__img" :src="item.img" alt="">
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
  name: "TwoRoom",
  data: () => ({
    flats: [
      {
        img: require("../../assets/2room/2room3D.webp"),
        size: "  59 до 63,4 м²",
        floor: "1-8 поверх",
        section: "1-2 секція",
      },
      {
        img: require("../../assets/1room/1room2d4.webp"),
        size: " 47,2 м²",
        floor: "1 поверх",
        section: "1-2 секція",
      },
      {
        img: require("../../assets/2room/2room2d1.webp"),
        size: " 59 м²",
        floor: "1-8 поверх",
        section: "1-2 секція",
      },
      {
        img: require("../../assets/2room/2room2d2.webp"),
        size: " 63,4 м²",
        floor: "1-8 поверх",
        section: "1-2 секція",
      },
    ],
  }),
}
</script>

<style scoped>
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
  .flat__img {
    width: 252px;
  }
}
@media screen and (max-width: 1024px) {
  .flat__img {
    width: 220px;
  }
}
@media screen and (max-width: 768px) {
  .flat__img {
    width: 260px;
  }
  .flatPlan {
    margin: 0 5%;
  }
}
@media screen and (max-width: 428px) {
  .flat__img {
    width: 330px;
  }
}
@media screen and (max-width: 375px) {
  .flat__img {
    width: 290px;
  }
}
@media screen and (max-width: 320px) {
  .flat__img {
    width: 250px;
  }
}
</style>
