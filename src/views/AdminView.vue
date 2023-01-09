<template>
  <v-main>
    <div class="headerBar">
      <img src="../assets/logo_black.svg" width="150px" alt="">
      <div class="headerBar__buttons">
        <v-btn class="addNewFlat"><router-link to="/add">Додати квартиру</router-link></v-btn>
        <v-btn @click="dialog = true" class="addNewFlatmob"><img src="../assets/addFlatmob.svg" alt=""></v-btn>
        <v-btn icon><v-icon size="30" color="gray">mdi-login</v-icon></v-btn>
      </div>
    </div>
    <div class="main">
<!--      <StatisticCard />-->
      <TableView />
    </div>
  </v-main>
</template>

<script>
import { db } from '@/config/db'
// import StatisticCard from "@/components/Admin/StatisticCard";
import TableView from "@/components/Admin/TableView";

export default {
  name: "AdminView",
  components: {TableView},
  data: () => ({
      user: null,
      AllFlats: {},
    }),
  firestore: {
    AllFlats: db.collection('flats')
  },
  deleteFlat(id) {
    db.collection('flats').doc(id).delete()
  }
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
a {
  color: #FFFFFF !important;
  text-decoration: none;
}
@media screen and (max-width: 425px){
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
