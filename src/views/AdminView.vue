<template>
  <v-main>
    <div class="headerBar">
      <img src="../assets/logo_black.svg" width="150px" alt="">
      <div class="headerBar__buttons">
        <v-btn @click="dialog = true" class="addNewFlat">Додати квартиру</v-btn>
        <v-btn @click="dialog = true" class="addNewFlatmob"><img src="../assets/addFlatmob.svg" alt=""></v-btn>
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar
                flat
                dark
                color="orange"
                height="60px"
            >
              <v-btn
                  icon
                  dark
                  @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Додати квартиру</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                    dark
                    text
                    @click="dialog = false, addNewFlat()"
                >
                  Додати
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
              <form
                  style="
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                margin: 20px 5%;
                row-gap: 20px;
              "
              >
                <v-text-field
                    required
                    type="text"
                    placeholder="Назва"
                    v-model="newFlatName"
                    outlined
                ></v-text-field>
                <v-text-field
                    outlined
                    required
                    type="number"
                    placeholder="Розмір"
                    v-model="newFlatSize"
                    suffix="m2"
                >
                </v-text-field>
                <v-text-field
                    outlined
                    required
                    type="number"
                    placeholder="Секція"
                    v-model="newFlatSection"
                    suffix="секція"
                >
                </v-text-field>
                <v-text-field
                    outlined
                    required
                    type="number"
                    placeholder="Поверх"
                    v-model="newFlatFloor"
                    suffix="поверх"
                >
                </v-text-field>
                <v-text-field
                    outlined
                    required
                    type="number"
                    placeholder="Вартість"
                    v-model="newFlatCost"
                    suffix="$"
                >
                </v-text-field>
                <v-text-field
                    outlined
                    required
                    type="number"
                    placeholder="Вартість м2"
                    v-model="newFlatCostM2"
                    suffix="$"
                >
                </v-text-field>
                <v-select
                    class="test"
                    label="Статус"
                    outlined
                    v-model="newFlatStatus"
                    :items="filterItemStatus"
                ></v-select>
                <v-text-field
                    outlined
                    required
                    type="text"
                    placeholder="Статус оплати"
                    v-model="newFlatStatusPay"
                    suffix="%"
                >
                </v-text-field>
                <v-text-field
                    height="200px"
                    outlined
                    required
                    type="text"
                    placeholder="Доповнення"
                    v-model="newFlatInfo"
                ></v-text-field>
              </form>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-btn icon><v-icon size="30" color="gray">mdi-login</v-icon></v-btn>
      </div>
    </div>
    <div class="main">
      <StatisticCard />
      <div class="main__content">
        <div class="main__content-filter">
          <v-select
              style="width: 200px"
              v-model="filterItemSelect"
              :items="filterItem"
              label="Фільтрувати за"
          ></v-select>
          {{filterItemSelect}}
          <div class="main__content-filter-search">
            <v-text-field
                v-show="filterItemSelect !== 'status'"
                class="test"
                :label="filterItemSelect"
                placeholder="Ім'я"
                outlined
                @change="handleFilterTableData"
                v-model="filterData"
            ></v-text-field>
            <v-select
                v-show="filterItemSelect === 'status'"
                class="test"
                label="Статус"
                @change="handleFilterTableData"
                v-model="filterData"
                :items="filterItemStatus"
            ></v-select>
            <v-btn @click="handleFilterTableData()" class="main__content-filter-search-btn" style="height: 60px">Показати</v-btn>
          </div>
        </div>
        <div class="main__rows">
          <div class="main__rows-row" v-for="(Flat, index) in filteredData"
               :key="index">
            <p class="main__rows-row-title">{{ Flat.name }}</p>
            <p class="main__rows-row-size">{{Flat.size}} м2</p>
            <p class="main__rows-row-section">{{ Flat.section }} секція</p>
            <p class="main__rows-row-floor">{{ Flat.floor }} поверх/приміщення</p>
            <p class="main__rows-row-cost">{{ Flat.cost }} $</p>
            <p class="main__rows-row-costm2">{{ Flat.costm2 }} $</p>
            <p class="main__rows-row-status">{{ Flat.status }}</p>
            <p class="main__rows-row-statusPay">{{ Flat.statusPay }}%</p>
            <div class="main__rows-row-icons">
              <v-icon color="gray">mdi-pencil</v-icon>
              <v-dialog
                  v-model="accept"
                  persistent
                  max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      color="red"
                  >
                    <v-icon>
                      mdi-delete
                    </v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5 text-center">
                    Ви підтвержуєте <br/> видалення?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="accept = false"
                    >
                      Ні
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="accept = false, deleteFlat(Flat.id)"
                    >
                      Так
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
          <v-pagination class="pagination mb-2" v-model="page" :length="pages" @input="next"></v-pagination>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
import { db } from '@/config/db'
import StatisticCard from "@/components/Admin/StatisticCard";
export default {
  name: "AdminView",
  components: {StatisticCard},
  data: () => ({
      user: null,
      page: 1,
      filterItemSelect: 'name',
      filterItem: [
        { text: 'Ім\'я', value: 'name' },
        { text: 'Секція', value: 'section' },
        { text: 'Розмір', value: 'size' },
        { text: 'Поверх', value: 'floor' },
        { text: 'Вартість', value: 'cost' },
        { text: 'Вартість м2', value: 'costm2' },
        { text: 'Статус', value: 'status' },
        { text: 'Статус оплати', value: 'statuspay' }
      ],
      filterItemStatus: [
        { text: 'Вільно', value: 'Вільно' },
        { text: 'Продано', value: 'Продано' },
        { text: 'Завдаток', value: 'Завдаток' },
        { text: 'Бажаючий', value: 'Бажаючий' },
        { text: 'Всі', value: '' }
      ],
      filterData: null,
      tableData: null,
      AllFlats: {},
      newFlatName: '',
      newFlatSize: '',
      newFlatSection: '',
      newFlatFloor: '',
      newFlatCost: '',
      newFlatCostM2: '',
      newFlatStatus: '',
      newFlatStatusPay: '',
      newFlatInfo: '',
      newFlatStausPay: null,
      allFlat: null,
      filVal: 'name',
      dialog: false,
      accept: false,
      filteredData: []
    }),
  firestore: {
    AllFlats: db.collection('flats')
  },
  async mounted() {
    this.tableData = this.AllFlats;
    console.log(this.tableData, 'cerf')
  },
  computed: {
    pages() {
      return this.tableData ? Math.ceil(this.tableData.length / 15) : 0
    },
  },
  watch: {
    tableData() {
      this.next(1)
    }
  },
  methods: {
    next(page) {
      this.filteredData = this.tableData.slice(5 * page, 5 * (page + 1))
    },
    handleFilterTableData() {
      console.log(this.filterItemSelect, 'это филтр айтем')
      console.log(this.filterData, 'это филтр дата')
      if (!this.filterData) this.tableData = this.AllFlats
      else {
        this.tableData = this.AllFlats.filter(
            // eslint-disable-next-line array-callback-return
            (i) => !i[this.filterItemSelect].toString().toLowerCase().indexOf(this.filterData.toLowerCase())

        )
      }
    },
    addNewFlat() {
      db.collection("flats").add({
        name: this.newFlatName,
        size: this.newFlatSize,
        section: this.newFlatSection,
        floor: this.newFlatFloor,
        cost: this.newFlatCost,
        costm2: this.newFlatCostM2,
        status: this.newFlatStatus,
        statuspay: this.newFlatStatusPay,
        info: this.newFlatInfo,
      });
    },
    deleteFlat(id) {
      db.collection('flats').doc(id).delete()
    }
  },
}
</script>

<style scoped>
.addNewFlatmob {
  display: none;
}
.headerBar {
  padding: 0 5%;
  height: 100px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.headerBar__buttons {
  display: flex;
  column-gap: 25px;
}
.addNewFlat {
  width: 190px;
  height: 43px;
  background: #E65D22 !important;
  border-radius: 5px;
  color: white !important;
}
.main {
  margin: 50px 5%;
}
.main__statistic-card h3 {
  font-weight: 500;
  font-size: 24px;
  color: #FFFFFF;
  margin: 15px;
}
.main__statistic-card p {
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 7px;
}
.main__content {
  margin-top: 45px;
}
.main__content-filter-search{
  display: flex;
  justify-content: space-between;
  column-gap: 100px;
}
.main__content-filter-search-btn {
  height: 60px;
  width: 200px;
}
.main__rows-row {
  background: #FFFFFF;
  box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 90px;
}
.main__rows-row p {
  margin: 0;
}
.main__rows-row-title {
  width: 150px;
}
.main__rows-row-icons {
  display: flex;
  column-gap: 20px;
}
form .v-text-field {
  width: 50%;
  height: 60px;
  border-radius: 5px;
}
form .v-select{
  width: 50%;
  height: 60px;
  border-radius: 5px;
}
@media screen and (max-width: 425px){
  .main__statistic {
    justify-content: center;
  }
  .main__statistic-card {
    width: 100%;
  }
  .addNewFlat {
    display: none;
  }
  .addNewFlatmob {
    display: flex;
    box-shadow: none!important;
    background-color: #fff !important;
  }
  .addNewFlatmob img {
    width: 30px;

  }
}
</style>
