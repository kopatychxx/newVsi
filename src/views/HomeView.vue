<template>
  <div class="home">
    <LandingComponent />
    <BannerReady />
  </div>
</template>

<script>
  import LandingComponent from "@/components/LandingComponent";
  import BannerReady from "@/components/BannerReady";

  export default {
    name: 'HomeView',
    components: {
      BannerReady,
      LandingComponent
    },
  }
</script>
