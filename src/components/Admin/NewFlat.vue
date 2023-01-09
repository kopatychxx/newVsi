<template>
  <main>
    <v-app-bar height="90px">
      <div class="barContent">
        <img src="../../assets/logo_black.svg" alt="" height="100%">
        <v-btn icon><v-icon size="30" color="gray">mdi-login</v-icon></v-btn>
      </div>
    </v-app-bar>
    <div class="main__content">
      <div class="main_form">
        <v-stepper class="test" v-model="e6" vertical height="550px">
          <v-stepper-step color="#3E583E" :complete="e6 > 1" step="1">
            <p>Тип приміщення та Статус</p>
            <small class="smallInfo">{{ selectType }}</small>
            <small class="smallInfo">{{selectStatus}}</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-card
                elevation="0"
                color="white"
                class="mb-12"
                height="100px"
            >
              <v-select item-color="#3E583E" color="#3E583E" class="testTwo" :items="typeFlat" v-model="selectType" label="Тип приміщення"
              ></v-select>
              <v-select item-color="#3E583E" color="#3E583E" :items="statusFlat" v-model="selectStatus" label="Статус"
              ></v-select>
            </v-card>
            <v-btn color="#3E583E" @click="e6 = 2"><p style="color: white">Далi</p></v-btn>
          </v-stepper-content>

          <v-stepper-step color="#3E583E" :complete="e6 > 2" step="2">
            <p>Розміщення</p>
            <small class="smallInfo">{{ selectSection }}-секція</small>
            <small class="smallInfo" v-if="selectType === 'Комерційні'">{{ selectRoom }}-приміщення</small>
            <small class="smallInfo" v-else>{{selectFloor}}-поверх </small>
          </v-stepper-step>
          <v-stepper-content step="2">
            <v-card
                elevation="0"
                color="white"
                class="mb-12"
                height="100px"
            >
              <v-select item-color="#3E583E" color="#3E583E" :items="sectionFlat" v-model="selectSection" label="Секція"
              ></v-select>
              <v-select item-color="#3E583E" color="#3E583E" v-if="selectType === 'Комерційні'" :items="roomFlat" v-model="selectRoom" label="Приміщення"
              ></v-select>
              <v-select item-color="#3E583E" color="#3E583E" v-else :items="floorFlat" v-model="selectFloor" label="Поверх"
              ></v-select>
            </v-card>
            <v-btn color=#3E583E @click="e6 = 3"><p style="color: white">Далi</p></v-btn>
            <v-btn @click="e6 = 1" > Назад </v-btn>
          </v-stepper-content>

          <v-stepper-step color="#3E583E" :complete="e6 > 3" step="3">
            <p>Розмір та вартість</p>
            <small class="smallInfo">{{selectSize}}m2</small>
            <small class="smallInfo">{{selectCost}}$</small>
            <small class="smallInfo">{{selectPricePay}}</small>

          </v-stepper-step>
          <v-stepper-content step="3">
            <v-card
                elevation="0"
                color="white"
                class="mb-12"
                height="150px"
            >
              <v-text-field item-color="#3E583E" color="#3E583E" label="Розмір" type="text" hide-details="auto" v-model="selectSize"
              ></v-text-field>
              <v-text-field item-color="#3E583E" color="#3E583E" label="Вартість" type="text" hide-details="auto" v-model="selectCost"
              ></v-text-field>
              <v-text-field item-color="#3E583E" color="#3E583E" label="Статус оплати" hide-details="auto" v-model="selectpayStatus"
              ></v-text-field>
            </v-card>
            <v-btn color="#3E583E" @click="e6 = 4"><p style="color: #FFFFFF">Далi</p></v-btn>
            <v-btn @click="e6 = 2" > Назад </v-btn>
          </v-stepper-content>

          <v-stepper-step color="#3E583E" :complete="e6 > 4" step="4">
            <p>Коментар</p>
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-card
                elevation="0"
                color="white"
                class="mb-12"
                height="100px"
            >
              <v-textarea
                  item-color="#3E583E" color="#3E583E"
                  v-model="selectInfo"
                  height="100px"
              >
                <template v-slot:label>
                  <div>
                    Коментар
                  </div>
                </template>
              </v-textarea>
            </v-card>
            <v-btn color="#3E583E" @click="addNewFlat(), e6 = 5"><p style="color: #FFFFFF">Додати</p></v-btn>
            <v-btn @click="e6 = 3" > Назад </v-btn>
          </v-stepper-content>
        </v-stepper>
      </div>
    </div>
  </main>
</template>

<script>
import { db } from '@/config/db'
export default {
  name: "NewFlat",
  data () {
    return {
      selectType: '',
      selectStatus: '',
      selectSection: '',
      selectFloor: '',
      selectRoom: '',
      selectSize: '',
      selectCost: '',
      selectPrice: '',
      selectpayStatus: '',
      selectInfo: '',
      e6: 1,
      typeFlat:['Комерційні', 'Смарт','1кімнатні','2кімнатні','З терасою'],
      statusFlat: ['Вільно', 'Продано','Завдаток','Бронь',],
      sectionFlat: ['1','2','3','4'],
      floorFlat: [1,2,3,4,5,6,7,8,9],
      roomFlat: [1,2,3,4,5,6],
      sizeFlat: '',
      priceFlat: '',
      payStatusFlat: '',
      infoFlat: '',
      AllFlats: {},
      countFlat: null
    }
  },
  firestore: {
    AllFlats: db.collection('flats')
  },
  methods: {
    showCount() {
      console.log(this.AllFlats.length)
    },
    addNewFlat() {
      db.collection("flats").add({
        name: this.selectType,
        size: this.selectSize,
        section: this.selectSection,
        floor: this.selectFloor,
        room: this.selectRoom,
        cost: this.selectCost,
        status: this.selectStatus,
        payStatus: this.selectpayStatus,
        info: this.selectInfo,
        id: this.countFlat+1
      });
      this.countFlat = this.AllFlats.length
      console.log('додано')
    },
  }
}
</script>

<style scoped>
.barContent {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main__content {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/loginBg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  margin: 0;
}
a {
  color: white !important;
  text-decoration: none !important;
}
.main_form{
  width: 650px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.smallInfo {
  font-size: 15px;
  color: #3E583E;
}

</style>
