<template>
  <div data-aos="slide-up" data-aos-duration="4000" class="planingComponent" id="planing">
    <div class="planning_title">
      <h3>Обери планування квартири мрії</h3>
      <img src="@/assets/finger_down.png" alt="">
    </div>
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
  margin: 35px 15% 150px;
}
.selectFlat {
  width: 250px;
  margin-bottom: 25px;
}
.planning_title {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
}
.planning_title h3 {
  font-size: 25px;
}
.planning_title img {
  width: 35px;
}
@media screen and (max-width: 1024px) {
  .planingComponent {
    margin: 75px 5%;
  }
}
@media screen and (max-width: 425px) {
  .planning_title h3 {
    font-size: 25px;
  }
}
</style>
