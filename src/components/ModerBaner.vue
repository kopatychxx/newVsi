<template>
  <div class="moderBaner">
    <div class="modern">
      <div class="photo">
        <img data-aos="fade-right" data-aos-duration="4000" src="../assets/ModernBanner/first.png" alt="">
        <img data-aos="fade-right" data-aos-duration="5000" src="../assets/ModernBanner/second.png" alt="">
        <img data-aos="fade-right" data-aos-duration="6000" src="../assets/ModernBanner/third.png" alt="">
      </div>
      <div data-aos="fade-left" data-aos-duration="6000" class="text">
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
.moderBaner {
  padding: 35px 15%;
  background-color: #36593B;
}
.modern {
  display: flex;
  flex-direction: row;
}
.text {
  text-align: center;
  color: white;
  margin-top: 50px;
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
}
@media screen and (max-width: 1024px) {
  .moderBaner {
    padding: 35px 5%;
  }
  .text {
    position: relative;
    top: -50px
  }
  .modern {
    column-gap: 20px;
  }
  .photo img {
    width: 200px;
  }
}
@media screen and (max-width: 768px) {

}
</style>
