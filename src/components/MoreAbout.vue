<template>
  <div data-aos="zoom-in" data-aos-duration="4000" class="moreAbout">
    <div class="left">
      <p>Більше про планування</p>
      <h4>Ціна від 30 000грн за м2 <br>
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
  width: 100vw;
  background-color: #36593B;
  padding: 70px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 100px;
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
}
@media screen and (max-width: 768px){
  .moreAbout {
    margin: 0 auto;
    flex-direction: column;
  }
  .right {
    display: none;
  }
  .left p { display: none}
  .left h4 {
    font-size: 25px;
    text-align: center;
  }
}
@media screen and (max-width: 428px) {
}
</style>
