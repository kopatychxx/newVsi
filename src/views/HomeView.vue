<template>
  <div class="home">
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

  export default {
    name: 'HomeView',
    components: {
      ModerBaner,
      MoreAbout,
      PlaningComponent,
      BannerReady,
      LandingComponent
    },
  }
</script>
