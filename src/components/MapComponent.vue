<template>
  <div class="mapComponent">
    <p>
      ЖК Всі Свої
      <br>
      с. Білогородка, Саєнка, 11
    </p>
    <GmapMap
        class="map"
        :center="center"
        :options="options"
        :zoom="17"

        map-type-id="satellite"
        style="width: auto; height: 555px"
    >
      <GmapMarker
          :position="center"
          :icon="require('../assets/homeMarker.svg')"
      >
      </GmapMarker>
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {
      openedMarkerID: null,
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
