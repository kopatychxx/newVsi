<template>
  <div>
  <vue-good-table
      :columns="columns"
      :line-numbers="true"
      :search-options="{
    enabled: true
  }"
      :sort-options="{
        enabled:false}"
      :pagination-options="{
        enabled: true,
        perPageDropdown: [ 10, 15, 20]
      }"
      :rows="rows">
    <div slot="table-actions">
    </div>
  </vue-good-table>
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
      AllFlats: {},
      columns: [
        {
          label: 'name',
          field: 'name',
          filterOptions: {
            styleClass: 'class1', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: 'Пошук за назвою', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          }
        },
        {
          label: 'Статус',
          field: 'status',
          filterOptions: {
            styleClass: 'class3', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: 'Пошук за статусом', // placeholder for filter input
            filterDropdownItems: [
                "Вільно", "Продано", "Завдаток", "Бронь"
            ],
            filterValue: '', // initial populated value for this filter
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          }
        },
        {
          label: 'Секція',
          field: 'section',
          type: 'text',
          filterOptions: {
            styleClass: 'class2', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: 'Пошук за секції ', // placeholder for filter input
            filterDropdownItems: [
              "1", "2", "3", "4"
            ],
            filterValue: '', // initial populated value for this filter
            // filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          }
        },
        {
          label: 'Поверх',
          field: 'floor',
          type: 'text',
          filterOptions: {
            styleClass: 'class2', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: 'Пошук за поверхом', // placeholder for filter input
            filterDropdownItems: [
              "1", "2", "3", "4","5","6","7","8","9",
            ],
            filterValue: '', // initial populated value for this filter
            // filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          }
        },
        {
          label: 'Приміщення',
          field: 'room',
          type: 'text',
          filterOptions: {
            styleClass: 'class2', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: 'Пошук за приміщенням', // placeholder for filter input
            filterDropdownItems: [
              "1", "2", "3", "4","5","6","7","8","9",
            ],
            filterValue: '', // initial populated value for this filter
            // filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          }
        },
        {
          label: 'Розмiр',
          field: 'size',
          type: 'text',
          filterOptions: {
            styleClass: 'class2', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: 'Пошук за розмiром', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          }
        },
        {
          label: 'Вартість',
          field: 'cost',
          type: 'text',
          filterOptions: {
            styleClass: 'class2', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: 'Пошук за вартістю', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          }
        },
        {
          label: 'Статус оплати',
          field: 'statusPay',
          type: 'text',
          filterOptions: {
            styleClass: 'class2', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: 'Пошук за статусом оплати', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          }
        },
        {
          label: 'Коментар',
          field: 'info',
          type: 'text',
          filterOptions: {
            styleClass: 'class2', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: 'Пошук за коментарем', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          }
        }
      ],
      rows: []
    };
  },
  firestore: {
    rows: db.collection('flats')
  },
  components: {
    VueGoodTable,
  },
}
</script>

<style scoped>

</style>
