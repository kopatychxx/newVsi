<template>
  <div class="main__statistic">
    <v-card class="main__statistic-card"
            :color="statisticCard.color"
            v-for="statisticCard in statisticCards"
            :key="statisticCard
        ">
      <h3>{{ statisticCard.name }}</h3>
      <hr>
      <p>{{ statisticCard.number }}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "StatisticCard",
  data() {
    return{
    statisticCards: [
      {
        name: 'Всього',
        number: 200,
        color: 'orange'
      },
      {
        name: 'Вільно',
        number: 2000,
        color: 'red'
      },
      {
        name: 'Продано',
        number: 400,
        color: 'green'
      },
      {
        name: 'Завдаток',
        number: 600,
        color: 'yellow'
      },
      {
        name: 'Бажаючий',
        number: 800,
        color: 'blue'
      }
    ]
    }
  }
}
</script>

<style scoped>
.main__statistic {
  display: flex;
  flex-wrap:wrap;
  row-gap: 25px;
  flex-direction: row;
  justify-content: space-between;
}
.main__statistic-card {
  padding: 0;
  width: 200px;
  height: 140px;
  border-radius: 10px;
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
@media screen and (max-width: 425px){
  .main__statistic {
    justify-content: center;
  }
  .main__statistic-card {
    width: 100%;
  }
}
</style>
