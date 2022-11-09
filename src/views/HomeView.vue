<template>
  <div class="home">
    <HeaderComponent class="headerComponent" />
    <HeaderMobile class="headerMobile" />
    <LandingComponent />
    <BannerReady />
    <MoreAbout />
    <PlaningComponent />
    <ModerBaner class="moderBaner" />
    <p class="textMobile">Життя з усіма її плюсами, але з незайманою природою за вікном - найкраще, що ви можете вибрати для себе та близьких.</p>
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

  export default {
    name: 'HomeView',
    components: {
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
    margin: 35px 5%;
  }
}
</style>
