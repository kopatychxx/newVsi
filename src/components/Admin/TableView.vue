<template>
  <div class="table">
    <v-menu
        v-model="showMenu"
        absolute
        offset-y
        style="max-width: 600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <vue-good-table
            v-bind="attrs"
            v-on="on"
            @on-cell-click="onCellClick"
            :columns="columns"
            :rows="rows"
            :line-numbers="true"
            :search-options="{ enabled: false }"
            :sort-options="{ enabled:false }"
            :pagination-options="{ enabled: true, perPageDropdown: [5, 10, 15, 20] }">
        </vue-good-table>
      </template>
      <v-list>
        <v-list-item class="menuClick">
          <v-list-item-title><button class="buttonMenu" @click="dialog = true">Редагувати</button></v-list-item-title>
          <v-list-item-title><button class="buttonMenu" @click="deleteFlat">Видалити</button></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h6">
          Редагування квартири
        </v-card-title>
        <v-card-text>
          <v-select item-color="#3E583E" color="#3E583E" :items="typeFlat" v-model="selectedFlat.name" label="Тип"></v-select>
          <v-select item-color="#3E583E" color="#3E583E" :items="statusFlat" v-model="selectedFlat.status" label="Статус"></v-select>
          <v-select item-color="#3E583E" color="#3E583E" :items="sectionFlat" v-model="selectedFlat.section" label="Секція"></v-select>
          <v-select v-if="selectedFlat.name === 'Комерційні'" item-color="#3E583E" color="#3E583E" :items="roomFlat" v-model="selectedFlat.room" label="Приміщення"></v-select>
          <v-select v-else item-color="#3E583E" color="#3E583E" :items="floorFlat" v-model="selectedFlat.floor" label="Поверх"></v-select>
          <v-text-field item-color="#3E583E" color="#3E583E" label="Розмір" type="text" hide-details="auto" v-model="selectedFlat.size"></v-text-field>
          <v-text-field item-color="#3E583E" color="#3E583E" label="Вартість" type="number" hide-details="auto" v-model="selectedFlat.cost"></v-text-field>
          <v-text-field item-color="#3E583E" color="#3E583E" label="Статус оплати" type="text" hide-details="auto" v-model="selectedFlat.statuPay"></v-text-field>
          <v-text-field item-color="#3E583E" color="#3E583E" label="Коментар" hide-details="auto" v-model="selectedFlat.info"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="gray darken-1" text @click="dialog = false">
            Назад
          </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false, editFlat()">
            Зберегти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from '@/config/db'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
export default {
  name: "TableView",
  data() {
    return {
      columns: [
        {
          label: 'Тип',
          field: 'name',
          filterOptions: {
            enabled: true,
            placeholder: 'Пошук за назвою',
            filterValue: '',
            trigger: 'onchange',
          }
        },
        {
          label: 'Статус',
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Пошук за статусом',
            filterDropdownItems: [
              "Вільно", "Продано", "Завдаток", "Бронь"
            ],
            filterValue: '',
            trigger: 'onchange',
          }
        },
        {
          label: 'Секція',
          field: 'section',
          type: 'text',
          filterOptions: {
            enabled: true,
            placeholder: 'Пошук за секції ',
            filterDropdownItems: [
              "1", "2", "3", "4"
            ],
            trigger: 'onchange', //only trigger on enter not on keyup
          }
        },
        {
          label: 'Поверх',
          field: 'floor',
          type: 'text',
          filterOptions: {
            enabled: true,
            placeholder: 'Пошук за поверхом',
            filterDropdownItems: [
              "1", "2", "3", "4", "5", "6", "7", "8", "9",
            ],
            filterValue: '',
            trigger: 'onchange',
          }
        },
        {
          label: 'Приміщення',
          field: 'room',
          type: 'text',
          filterOptions: {
            enabled: true,
            placeholder: 'Пошук за приміщенням',
            filterDropdownItems: [
              "1", "2", "3", "4", "5", "6", "7", "8", "9",
            ],
            filterValue: '',
            trigger: 'onchange',
          }
        },
        {
          label: 'Розмiр',
          field: 'size',
          type: 'text',
          filterOptions: {
            enabled: true,
            placeholder: 'Пошук за розмiром',
            filterValue: '',
            trigger: 'onchange',
          }
        },
        {
          label: 'Вартість',
          field: 'cost',
          type: 'text',
          filterOptions: {
            enabled: true,
            placeholder: 'Пошук за вартістю',
            filterValue: '',
            trigger: 'onchange',
          }
        },
        {
          label: 'Статус оплати',
          field: 'statusPay',
          type: 'text',
          filterOptions: {
            enabled: true,
            placeholder: 'Пошук за статусом оплати',
            filterValue: '',
            trigger: 'onchange',
          }
        },
        {
          label: 'Коментар',
          field: 'info',
          type: 'text',
          filterOptions: {
            enabled: true,
            placeholder: 'Пошук за коментарем',
            filterValue: '',
            trigger: 'onchange',
          }
        }
      ],
      rows: [],
      typeFlat: ['Комерційні', 'Смарт', '1кімнатні', '2кімнатні', 'З терасою'],
      statusFlat: ['Вільно', 'Продано','Завдаток','Бронь',],
      sectionFlat: ['1','2','3','4'],
      floorFlat: ['1','2','3','4','5','6','7','8','9'],
      roomFlat: ['1','2','3','4','5','6'],
      showMenu: false,
      id: '',
      dialog: false,
      selectedFlat: {
        name: '',
        status: '',
        section: '',
        floor: '',
        room: '',
        size: '',
        cost: '',
        statuPay: '',
        info: ''
      },
    };
  },
  firestore: {
    rows: db.collection('flats'),
  },
  methods: {
    onCellClick(params) {
      this.selectedFlat = params.row
      this.id = params.row.id
      this.selectedFlat.name = params.row.name
      this.selectedFlat.status = params.row.status
      this.selectedFlat.section = params.row.section
      this.selectedFlat.floor = params.row.floor
      this.selectedFlat.room = params.row.room
      this.selectedFlat.cost = params.row.cost
      this.selectedFlat.size = params.row.size
      this.selectedFlat.statuPay = params.row.statuPay
      this.selectedFlat.info = params.row.info
      console.log(params.row);
      this.showMenu = true
    },
    deleteFlat() {
      db.collection('flats').doc(this.id).delete()
      console.log('удаленно')
    },
    editFlat() {

      db.collection('flats')
          .doc(this.id)
          .set(this.selectedFlat)
          .then(() => {
            console.log('обновленно')
          })
    }
  },
  components: {
    VueGoodTable,
  },
}
</script>
<style>
.buttonMenu {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #3E583E;
}
.menuClick {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px 20px 0;
}
</style>

