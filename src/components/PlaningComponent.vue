<template>
  <div class="planingComponent">
    <v-select
        class="selectFlat"
        v-model="select"
        :items="items"
        label="Обрати планування"
        color="#36593B"
        item-color="#36593B"
    ></v-select>
    <OneRoomFlat v-if="select === 'Однокімнатні квартири'" />
    <SmartFlat v-if="select === 'Смарт квартири'" />
    <TwoRoom v-if="select === 'Двокімнатні квартири'" />
    <ThirdRoom v-if="select === 'Двохповерхові з терасою'" />
  </div>
</template>

<script>
import OneRoomFlat from "@/components/Planing/OneRoomFlat";
import SmartFlat from "@/components/Planing/SmartFlat";
import TwoRoom from "@/components/Planing/TwoRoom";
import ThirdRoom from "@/components/Planing/ThirdRoom";
export default {
  name: "PlaningComponent",
  components: {ThirdRoom, TwoRoom, SmartFlat, OneRoomFlat},
  data: () => ({
    items: [
      "Однокімнатні квартири",
      "Смарт квартири",
      "Двокімнатні квартири",
      "Двохповерхові з терасою",
    ],
    select: "Однокімнатні квартири",
  })
}
</script>

<style scoped>
.planingComponent {
  margin: 75px 15%;
}
.selectFlat {
  width: 250px;
  margin-bottom: 25px;
}
@media screen and (max-width: 1024px) {
  .planingComponent {
    margin: 75px 5%;
  }
}
</style>
