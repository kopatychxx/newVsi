<template>
  <div class="moderBaner">
    <div class="modern">
      <div class="photo">
        <img data-aos="fade-right" data-aos-duration="4000" src="../assets/ModernBanner/first.webp" alt="">
        <img data-aos="fade-right" data-aos-duration="5000" src="../assets/ModernBanner/second.webp" alt="">
        <img data-aos="fade-right" data-aos-duration="6000" src="../assets/ModernBanner/third.webp" alt="">
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
export default {
  name: "ModerBaner"
}
</script>

<style scoped>
.arrowbanner {
  width: 170px;
  top: -80px;
  position: relative;
}
.moderBaner {
  padding: 35px 15%;
  background-color: #36593B;
}
.modern {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
h3 {
  font-size: 25px;
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
.photo img {
  width: 300px;
}

@media screen and (max-width: 1440px) {
  .photo img {
    width: 250px;
  }
  .arrowbanner {
    width: 160px;
  }
}
@media screen and (max-width: 1024px) {
  .moderBaner {
    padding: 35px 5%;
  }
  .text {
    position: relative;
    top: 0px
  }
  .modern {
    column-gap: 20px;
  }
  .photo img {
    width: 200px;
  }
  .arrowbanner {
    top: -80px;
  }
}
@media screen and (max-width: 768px) {

}
</style>
