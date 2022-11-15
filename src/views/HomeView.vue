<template>
  <div class="home">
    <HeaderComponent class="headerComponent" />
    <HeaderMobile class="headerMobile" />
    <LandingComponent />
    <BannerReady />
    <MoreAbout />
    <PlaningComponent />
    <ModerBaner class="moderBaner" />
    <EcologicalBanner class="ecologicalBanner" />
    <div class="textMobile">
      <h3>ПРО ЛОКАЦІЮ ТА ІНФРАСТРУКТУРУ</h3>
      <p>Життя з усіма її плюсами, але з незайманою природою за вікном - найкраще, що ви можете вибрати для себе та близьких.</p>
    </div>
    <FormComponent />
    <MapComponent />
    <FooterComponent />
  </div>
</template>

<script>
  import LandingComponent from "@/components/LandingComponent";
  import BannerReady from "@/components/BannerReady";
  import PlaningComponent from "@/components/PlaningComponent";
  import MoreAbout from "@/components/MoreAbout";
  import ModerBaner from "@/components/ModerBaner";
  import HeaderComponent from "@/components/HeaderComponent";
  import HeaderMobile from "@/components/HeaderMobile";
  import FooterComponent from "@/components/FooterComponent";
  import EcologicalBanner from "@/components/EcologicalBanner";
  import FormComponent from "@/components/FormComponent";
  import MapComponent from "@/components/MapComponent";

  export default {
    name: 'HomeView',
    components: {
      MapComponent,
      FormComponent,
      EcologicalBanner,
      FooterComponent,
      HeaderMobile,
      HeaderComponent,
      ModerBaner,
      MoreAbout,
      PlaningComponent,
      BannerReady,
      LandingComponent
    },
  }
</script>
<style>
h1, h2,h3,h4 {
  font-family: 'TT Firs Neue', serif !important;
}
p, span, a, li{
  font-family: 'TT Firs Neue' ,serif !important;
}
h3 {
  font-weight: 300;
}
.home {
  overflow: hidden;
}
.headerComponent,
.headerMobile {
  position: absolute;
  z-index: 3;
}
.headerMobile {
  display: none;
}
.textMobile {
  display: none;
}
@media screen and (max-width: 768px) {
  .headerComponent {
    display: flex;
  }
  .moderBaner {
    display: none;
  }
  .textMobile {
    display: flex;
    flex-direction: column;
    margin: 35px 5%;
  }
  .textMobile h3 {
    line-height: normal;
    font-size: 25px;
    margin-bottom: 15px;
  }
}
</style>
