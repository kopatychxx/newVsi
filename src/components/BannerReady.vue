<template>
  <div class="bannerReady">
    <div class="bannerHeader">
      <h3>ГОТОВІ КВАРТИРИ</h3>
      <div class="subtitle">
        <div class="lines">
          <div class="line"></div>
        </div>
        <p style="color: gray">перші дві черги введенні в експлуатацію</p>
      </div>
    </div>
    <div class="bannerContent">
      </div>
      <div class="left">
        <p class="textDesktop">Комплекс з продуманою інфраструктурою в межах столиці та на природі одночасно. Тут є все, що може знадобитися, а метро та окружна дорога у 15-хвилинній доступності.
          <br><br>
          Життя з усіма її плюсами, але з незайманою природою за вікном - найкраще, що ви можете вибрати для себе та близьких.
          <br><br>
          Оберіть планування готових апартаментів від 20м2 до 115м2, замовте безкоштовний дизайн і насолоджуйтесь власним житлом вже сьогодні!
        </p>
        <p class="textMobile">Оберіть планування готових апартаментів від 20м2 до 115м2, замовте безкоштовний дизайн і насолоджуйтесь власним житлом вже сьогодні!</p>
        <div class="butt deskButton">Записатися на перегляд
        </div>
      </div>
      <img src="../assets/BannerReady.jpg" alt="">
    <div class="butt mobbutton">Записатися на перегляд
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
  background-color: green;
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
  border: 1px solid green;
  width: 200px;
  text-align: center;
  padding: 5px;
  border-radius: 35px;
  background: white;
  cursor: pointer;
  margin-top: 35px;
}
.butt:hover {
  background: green;
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
  .left {
    width: 280px;
  }
  .bannerContent img {
    width: 380px;
  }
  .bannerHeader h3 {
    line-height: normal;
  }
}
@media screen and (max-width: 425px) {
  .bannerContent {
    align-items: center;
    flex-direction: column;
  }
  .deskButton {
    display: none;
  }
  .mobbutton {
    display: flex;
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
  }
  .left {
    margin-top: 5px;
    width: 100%;
  }
  .butt {
    margin: 25px auto;
  }
  .subtitle {
    display: none;
  }
  .bannerHeader h3 {
    font-size: 45px;
  }
}
</style>
