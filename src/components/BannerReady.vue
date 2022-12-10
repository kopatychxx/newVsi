<template>
  <div class="bannerReady">
    <div class="bannerHeader">
      <h3>ГОТОВІ КВАРТИРИ</h3>
      <div class="subtitle">
        <div class="lines">
          <div class="line"></div>
        </div>
        <p style="color: gray; margin: 0;">перші дві черги введенні в експлуатацію</p>
      </div>
    </div>
    <div  class="bannerContent">
      <div data-aos="fade-right" data-aos-duration="4000" class="left">
        <p class="textDesktop">Комплекс з продуманою інфраструктурою в межах столиці та на природі одночасно. Тут є все, що може знадобитися, а метро та окружна дорога у 15-хвилинній доступності.
          <br><br>
          Життя з усіма її плюсами, але з незайманою природою за вікном - найкраще, що ви можете вибрати для себе та близьких.
          <br><br>
          Оберіть планування готових апартаментів від 20м2 до 115м2, замовте безкоштовний дизайн і насолоджуйтесь власним житлом вже сьогодні!
        </p>
        <p class="textMobile">Оберіть планування готових апартаментів від 20м2 до 115м2, замовте безкоштовний дизайн і насолоджуйтесь власним житлом вже сьогодні!</p>
        <div class="butt deskButton" v-scroll-to="{ element: '#formComponent', duration: 3000, offset: 0 }">Записатися на перегляд
        </div>
      </div>
      <img data-aos="fade-left" data-aos-duration="4000" src="../assets/BannerReady.webp" alt="">
    <v-btn  v-scroll-to="{ element: '#formComponent', duration: 3000, offset: 90 }" class="butt mobbutton">Записатися на перегляд
    </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerReady"
}
</script>

<style scoped>
.bannerReady {
  display: flex;
  flex-direction: column;
  margin: 75px 15%;
}
.mobbutton {
  display: none;
}
.bannerHeader {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
}
.bannerHeader h3 {
  font-size: 55px;
}
.subtitle{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.line {
  width: 50px;
  height: 2px;
  content: '';
  background-color: #36593B;
  margin-right: 35px;
}
.bannerContent {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 55px;
}
.left {
  width: 450px;
}
.bannerContent img{
  height: 100%;
  width: 450px;
}
.butt {
  border: 1px solid #36593B;
  width: 220px;
  text-align: center;
  padding: 15px;
  border-radius: 35px;
  background: white;
  cursor: pointer;
  margin-top: 35px;
}
.butt:hover {
  background: #36593B;
  transition: background 0.5s ease;
  color: white;
}
.textMobile {
  display: none;
}
@media screen and (max-width: 1024px) {
  .bannerReady {
    margin: 75px 5%;
  }
}
@media screen and (max-width: 768px) {
  .bannerContent {
    align-items: center;
    flex-direction: column;
  }
  .deskButton {
    display: none;
  }
  .mobbutton {
    display: flex;
    width: 350px !important;
    height: 60px !important;
  }
  .bannerContent {
    margin-top: 15px;
  }
  .bannerContent img {
    width: 100%;
  }
  .textDesktop {
    display: none;
  }
  .textMobile {
    display: flex;
    margin: 0 0 15px;
  }
  .left {
    margin-top: 5px;
    width: 100%;
  }
  .butt {
    margin: 25px auto;
    padding: 15px 30px;
    width: 250px;
  }
  .subtitle {
    display: none;
  }
  .bannerHeader h3 {
    font-size: 30px;
  }
}
@media screen and (max-width: 425px){
  .mobbutton {
    display: flex;
    width: 100% !important;
    height: 60px !important;
  }
}
</style>
