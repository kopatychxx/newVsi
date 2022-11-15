<template>
  <ul class="headerDesktop">
    <li><a href="/">Головна</a></li>
    <li v-scroll-to="{ element: '#planing', duration: 3000, offset: -200 }">
      <a href="">Планування</a>
    </li>
    <li><img src="../assets/logo.svg" alt="" /></li>
    <li v-scroll-to="{ element: '#infrastution', duration: 3000, offset: 90 }">
      <a href="">Інфраструктура</a>
    </li>
    <li v-scroll-to="{ element: '#footerComponent', duration: 3000, offset: 90 }">
      <a href="">Контакти</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
.headerDesktop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 5%;
  position: absolute;
}
.headerDesktop li,
.headerDesktop li a {
  list-style: none;
  color: #ffffff;
  text-decoration: none !important;
  font-family: "TT Firs Neue Regular", serif;
  font-size: 28px;
  position: relative;
}
.headerDesktop li a:after {
  display: block;
  position: absolute;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #36593B;
  content: "";
  transition: width 0.3s ease-out;
}
.headerDesktop li a:hover {
  color: #36593B;
}
.headerDesktop li a:hover:after,
.headerDesktop li a:focus:after {
  width: 100%;
}
@media screen and (max-width: 768px) {
  .headerDesktop {
    display: none;
  }
}
</style>
