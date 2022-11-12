<template>
  <div class="formComponent">
    <h3>Записатися на перегляд</h3>
    <form class="form" ref="form" @submit.prevent="sendEmail">
      <v-text-field name="user_name" class="form__input" label="Імя" color="#36593B"></v-text-field>
      <v-text-field name="message" class="form__input" type="number" label="Номер телефона" placeholder="+38(023)-123-45-67" color="#36593B"></v-text-field>
      <input  @click.stop="dialog = true" class="form__btn" type="submit" value="Записатись">
    </form>
    <v-dialog
        v-model="dialog"
        max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5 ">
          <p class="card__title">Ваша заявка прийнята</p>
        </v-card-title>

        <v-card-text>
        Добридень!  Дякуємо за зацікавленість. Найближчим часом з вами зв'яжеться наш менеджер.
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
  name: "FormComponent",
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_c5su7be', 'template_d7i1qli', this.$refs.form, 'R6tVQhwgEHtKs6UqN')
    }
  }
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
  width: 250px;
  height: 50px;
}
.card__title {
  font-size: 20px;
}
@media screen and (max-width: 1440px) {
  .form__btn {
    width: 50%;
  }
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
    font-size: 30px;
  }
  .form__btn {
    width: 70%;
  }
}
</style>
