<template>
  <div class="ecologicalBanner">
    <div class="left" data-aos="fade-right" data-aos-duration="6000">
      <h3>Екологічно</h3>
      <p>Зона для зберігання автомобілів та <br> зарядки електрокарів відділена від <br> ігрового майданчика</p>
      <img src="../assets/mapIcon.png" alt="">
    </div>
    <img data-aos="fade-left" data-aos-duration="6000" src="../assets/guys.jpeg" alt="">
  </div>
</template>

<script>
export default {
  name: "EcologicalBanner"
}
</script>

<style scoped>
.ecologicalBanner {
  padding: 0 15% 35px;
  background-color: #36593B;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h3 {
  font-size: 25px;
}
p {
  margin: 35px 0;
}
img {
  width: 50%;
}
@media screen and (max-width: 1024px) {
  .ecologicalBanner {
    padding: 0 5% 35px;
  }
}
@media screen and (max-width: 768px) {
  .ecologicalBanner {
    display: none;
  }
}
</style>
