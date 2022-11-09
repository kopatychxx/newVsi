<template>
  <ul class="headerMobile">
    <li>
      <a
          v-scroll-to="{ element: '#planing', duration: 3000, offset: -50 }"
          href=""
      >Планування</a
      >
    </li>
    <li><img class="logo" src="../assets/logo.svg" alt="" /></li>
    <li><a href="tel:+380631099010">Зв’язатись</a></li>
  </ul>
</template>

<script>
export default {
  name: "HeaderMobile",
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .headerMobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 5%;
  }
  .headerMobile li,
  .headerMobile li a {
    list-style: none;
    color: #ffffff;
    text-decoration: none !important;
    font-family: "TT Firs Neue Regular", serif;
    font-size: 20px;
    position: relative;
  }
}
@media screen and (max-width: 425px) {
  .headerMobile li img {
    width: 100px;
  }
}
@media screen and (max-width: 375px) {
  .headerMobile li a {
    font-size: 15px;
  }
}
</style>
