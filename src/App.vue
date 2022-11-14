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
  metaInfo() {
    return {
      title: "ЖК Всі Свої",
      meta: [
        { name: 'description', content:  'Квартири і комерційні приміщення в готовому житловому комплексі ВСІ СВОЇ у Білогородці. Вигідні умови придбання.'},
        { property: 'og:title', content: "Житловий комплекс комфорт-класу у Білогородці"},
        { property: 'og:site_name', content: 'ЖК Всі Свої'},
        {property: 'og:type', content: 'website'}
      ]
    }
  }
};
</script>
<style>
@font-face {
  font-family: "TT Firs Neue";
  src: local(TT Firs Neue),
  url('./fonts/TTFirsNeue-Regular.ttf') format("truetype");
}
</style>
