<template>
  <div class="home">
    <HeaderComponent class="headerComponent" />
    <HeaderMobile class="headerMobile" />
    <LandingComponent />
    <BannerReady />
    <MoreAbout />
    <PlaningComponent />
    <ModerBaner />
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
@media screen and (max-width: 768px) {
  .headerComponent {
    display: flex;
  }
}
</style>
