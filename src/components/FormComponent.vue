<template>
  <div class="formComponent">
    <h3>Записатися на перегляд</h3>
    <form class="form">
        <v-text-field class="form__input" label="Імя" color="#36593B"></v-text-field>
        <v-text-field class="form__input" type="number" label="Номер телефона" placeholder="+38(023)-123-45-67" color="#36593B"></v-text-field>
        <v-btn elevation="0" class="form__btn">Записатись</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent"
}
</script>

<style scoped>
.formComponent {
  margin: 75px 15%;
}
h3 {
  font-size: 55px;
  text-transform: uppercase;
}
.form{
  display: flex;
  justify-content: flex-start;
  column-gap: 35px;
  width: 70%;
  margin-top: 50px;
}
.form__input {
  width: 350px !important;
}
.form__btn {
  background-color: #36593B !important;
  border-radius: 35px;
  color: white;
}
@media screen and (max-width: 1024px) {
  .formComponent {
    margin: 75px 5%;
  }
}
@media screen and (max-width: 768px) {
  .form {
  width: 100%;
  }
}
@media screen and (max-width: 425px) {
  .form {
    flex-direction: column;
  }
  h3 {
    font-size: 45px;
  }
}
</style>
