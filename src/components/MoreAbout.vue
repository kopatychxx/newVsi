<template>
  <div data-aos="zoom-in" data-aos-duration="4000" class="moreAbout">
    <div class="left">
      <p>Більше про планування</p>
      <h4>Ціна від 30 700грн за м2 <br>
      Площі від 20 до 115м2
      </h4>
    </div>
    <div class="right">
      <p>
        Інформація про наявність квартир, <br>
        ціни та умови придбання  <br>
        можна отримати у персонального менеджера <br>
        під час консультації у відділі продажу.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreAbout"
}
</script>

<style scoped>
.moreAbout {
  width: 800px;
  background-color: #36593B;
  margin: 0 auto;
  padding: 70px 30px;
  border-radius: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.left p {
  font-size: 20px;
  color: white;
}
.left h4 {
  color: white;
  font-size: 25px;
}
.right p {
  color: white;
  font-size: 15px;
  font-weight: 100;
}
@media screen and (max-width: 768px){
  .moreAbout {
    width: 90%;
    margin: 0 auto;
  }
  .left h4 {
    font-size: 20px;
  }
  .left p {
    font-size: 18px;
  }
  .right {
    text-align: right;
  }
}
@media screen and (max-width: 428px) {
  .moreAbout,
  .right{
    flex-direction: column;
    text-align: center;
  }
  .left {
    margin-bottom: 55px;
  }
}
</style>
