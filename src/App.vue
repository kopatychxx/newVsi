<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@font-face {
  font-family: "TT Firs Neue";
  src: local("Neue Regilar"),
  url('./fonts/TTFirsNeue-Regular.ttf') format("truetype");
}
@font-face {
  font-family: "TT Firs Neue";
  src: local("Neue Bold"),
  url('./fonts/TTFirsNeue-Bold.ttf') format("truetype");
}
</style>
