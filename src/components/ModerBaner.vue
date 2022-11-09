<template>
  <div class="moderBaner">
    <div class="text">
      <h3>Сучасно</h3>
      <p>Готові квартири підключені до всіх необхідних комунікацій, встановлені вікна і двері, залишається тільки обрати дизайн</p>
    </div>
    <img src="../assets/guys.jpeg" alt="">
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
  padding: 35px 15%;
  background-color: #36593B;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  text-align: center;
  color: white;
}
@media screen and (max-width: 1440px) {
  .moderBaner {
    padding: 35px 15%;
    column-gap: 35px;
  }
  img {
    width: 350px;
  }
}
@media screen and (max-width: 1024px) {
  .text p {
    font-size: 12px;
  }
}
@media screen and (max-width: 768px) {
  .moderBaner {
    flex-direction: column;
    row-gap: 35px;
  }
}
@media screen and (max-width: 768px) {
  img {
    width: 290px;
  }
}
</style>
