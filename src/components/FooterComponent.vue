<template>
  <div class="footerComponent">
    <a href="mailto:info@vsisvoihouse.com">info@vsisvoihouse.com</a>
    <div class="link">
      <a href="https://www.facebook.com/vsisvoihouse"
      ><img src="../assets/facebook.svg" alt=""
      /></a>
      <a href="https://instagram.com/vsi.svoi.house?igshid=MTA0ZTI1NzA="
      ><img src="../assets/instagram.svg" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
.footerComponent {
  background: #36593B;
  height: 85px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  column-gap: 65px;
  position: relative;
}
.link {
  display: flex;
  column-gap: 30px;
}
.footerComponent a {
  font-family: "TT Firs Neue Regular", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  color: #ffffff;
  text-decoration: none;
}
@media only screen and (max-width: 1024px) {
  .footerComponent {
    padding: 0 5%;
  }
}
@media only screen and (max-width: 768px) {
  .footerComponent a {
    font-size: 18px;
  }
}
@media only screen and (max-width: 768px) {
  .footerComponent {
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 425px) {
  .footerComponent {
    padding: 25px;
    flex-direction: column;
    height: 180px;
    row-gap: 25px;
  }
}
</style>
