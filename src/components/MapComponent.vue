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

</style>
