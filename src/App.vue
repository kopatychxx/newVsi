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
  metaInfo: {
    title: 'ЖК "Всі Свої"',
    description: "Житловий комплекс комфорт-класу у Білогородці"
  },
  data: () => ({
    //
  }),
};
</script>
<style>
@font-face {
  font-family: "TT Firs Neue";
  src: local(TT Firs Neue),
  url('./fonts/TTFirsNeue-Regular.ttf') format("truetype");
}
</style>
