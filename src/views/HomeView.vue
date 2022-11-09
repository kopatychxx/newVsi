<template>
  <div class="home">
    <LandingComponent />
    <BannerReady />
    <MoreAbout />
    <PlaningComponent />
  </div>
</template>

<script>
  import LandingComponent from "@/components/LandingComponent";
  import BannerReady from "@/components/BannerReady";
  import PlaningComponent from "@/components/PlaningComponent";
  import MoreAbout from "@/components/MoreAbout";

  export default {
    name: 'HomeView',
    components: {
      MoreAbout,
      PlaningComponent,
      BannerReady,
      LandingComponent
    },
  }
</script>
