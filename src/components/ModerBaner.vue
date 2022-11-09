<template>
  <div class="moderBaner">
    <div class="photo">
      <img src="../assets/ModernBanner/first.png" alt="">
      <img src="../assets/ModernBanner/second.png" alt="">
      <img src="../assets/ModernBanner/third.png" alt="">
    </div>
    <div class="text">
      <h3>Сучасно</h3>
      <p>Готові квартири підключені до всіх необхідних комунікацій, встановлені вікна і двері, залишається тільки обрати дизайн</p>
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
  padding: 0 15%;
  background-color: #36593B;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.photo {
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  top: -40px;
}
.photo img {
  width: 320px;
}
.text {
  text-align: center;
  color: white;
}
@media screen and (max-width: 1440px){
  .photo img {
    width: 250px;
  }
}
@media screen and (max-width: 1440px){
  .moderBaner {
    padding: 0 5%;
  }
  .photo img {
    width: 220px;
  }
}
@media screen and (max-width: 768px){
  .moderBaner {
    flex-direction: column;
  }
  .photo img {
    width: 220px;
  }
}
@media screen and (max-width: 425px){
  .photo img {
    width: 220px;
  }
  .photo img:first-child,
  .photo img:last-child{
    display: none;
  }
}
@media screen and (max-width: 375px){
  .photo img {
    width: 220px;
  }
}
</style>
