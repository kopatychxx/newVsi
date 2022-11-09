<template>
  <div class="home">
    <HeaderComponent />
    <HeaderMobile />
    <LandingComponent />
    <BannerReady />
    <MoreAbout />
    <PlaningComponent />
    <ModerBaner />
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

  export default {
    name: 'HomeView',
    components: {
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
.headerDesktop,
.headerMobile {
  position: absolute;
  z-index: 3;
}
.headerMobile {
  display: none;
}
@media screen and (max-width: 768px) {
  .headerDesktop {
    display: flex;
  }
}
</style>
