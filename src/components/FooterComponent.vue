<template>
  <div class="footerComponent" id="footerComponent">
    <div class="left">
      <a style="font-weight: 700" href="tel:+380972211570">+38(097)-221-15-70</a>
      <a href="mailto:info@vsisvoihouse.com">info@vsisvoihouse.com</a>
    </div>

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
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  column-gap: 65px;
  padding: 30px 15%;
  position: relative;
}
.left {
  display: flex;
  column-gap: 30px;
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
    padding: 35px 5%;
  }
}
@media only screen and (max-width: 768px) {
  .left a {
    font-size: 18px;
  }
}
@media only screen and (max-width: 768px) {
  .footerComponent {
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 620px) {
  .footerComponent {
    padding: 25px;
    flex-direction: column;
    row-gap: 25px;
  }
  .left{
    text-align: center;
    flex-direction: column;
    row-gap: 25px;
  }
}
</style>
