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
        { name: 'description', content:  'Житловий комплекс комфорт-класу у Білогородці.Комплекс з продуманою інфраструктурою в межах столиці та на природі одночасно. Тут є все, що може знадобитися, а метро та окружна дорога у 15-хвилинній доступності.'},
        { property: 'og:title', content: "Житловий комплекс комфорт-класу у Білогородці"},
        { property: 'og:site_name', content: 'ЖК Всі Свої'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
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
