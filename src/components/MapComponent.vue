<template>
  <div class="mapComponent">
    <p>
      ЖК Всі Свої
      <br>
      с. Білогородка, Саєнка, 11
    </p>
    <gmap-map
        class="map"
        map-type-id="satellite"
        :center="center"
        :options="options"
        :zoom="17"
        style="width: auto; height: 555px"
    >
      <gmap-marker
          :position="center"
          :icon="require('../assets/homeMarker.svg')"
      ></gmap-marker>
    </gmap-map>
    <v-btn class="buttonMap"><a href="https://goo.gl/maps/7F6Ei3FftrxeQyPq5">Прокласти маршрут</a></v-btn>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {
      center: {
        lat: 50.3930871,
        lng: 30.2347964,
      },
      options: {
        mapId: "43f757a40ee9ba64",
      },
      locations: [],
    };
  },
  methods: {
    openMarker(id) {
      this.openedMarkerID = id
    }
  }
}
</script>

<style scoped>
.mapComponent {
  margin: 35px 15%;
}
.buttonMap {
  position: relative;
  bottom: 65px;
  left: 10px;
  border-radius: 35px;
}
.buttonMap a {
  text-decoration: none;
  color: #36593B;
}
@media screen and (max-width: 1024px) {
  .mapComponent {
    margin: 35px 5%;
  }
}

</style>
