<template>
    <hooper :settings="hooperSettings" >
        <slide v-for="item in items" :key="item.img" :index="item.img">
          <img :src="item.img"/>
        </slide>
    </hooper>
</template>
<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name: "ModerBaner",
    components: {
        Hooper,
        Slide
    },
    data() {
        return {
            hooperSettings: {
                itemsToShow: 3,
                autoPlay: true,
                playSpeed: 2000,

            },
            items: [
                {
                    img: require("@/assets/suchasno/one.jpg"),
                },
                {
                    img: require("@/assets/suchasno/two.jpg"),
                },
                {
                    img: require("@/assets//suchasno/three.jpg"),
                },
                {
                    img: require("@/assets//suchasno/four.jpg"),
                },
                {
                    img: require("@/assets//suchasno/five.jpg"),
                },
                ],
        }
    },
}
</script>

<style scoped></style>
