<template>
  <div class="formComponent" id="formComponent">
    <h3>Записатися на перегляд</h3>
    <form class="form" ref="form" @submit.prevent="sendEmail">
      <v-text-field v-model="name" name="user_name" class="form__input" label="Імя" color="#36593B"></v-text-field>
      <v-text-field v-model="message" name="message" class="form__input" type="number" label="Номер телефона" placeholder="+38(023)-123-45-67" color="#36593B"></v-text-field>
      <v-btn  class="form__btn" type="submit" value="Записатись">Записатись</v-btn>
    </form>
    <p class="typo__p" style="color: red" v-if="submitStatus === 'ERROR'">Заповніть усі поля</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Відправка</p>
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
import { required } from 'vuelidate/lib/validators'
import * as emailjs from "@emailjs/browser";
export default {

  name: "FormComponent",
  data () {
    return {
      dialog: false,
      name: '',
      message: '',
      submitStatus: null
    }
  },
    validations: {
        name: { required },
        message: { required }
    },
  methods: {
    sendEmail() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
              this.name = ''
              this.message = ''
              this.dialog = true
              emailjs.sendForm('service_c5su7be', 'template_d7i1qli', this.$refs.form, 'R6tVQhwgEHtKs6UqN')
        }, 500)
      }
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
    flex-direction: column;
    margin-top: 10px;
  }
  h3 {
    font-size: 30px;
  }
  .form__input {
    width: 100% !important;
  }
  .form__btn {
    width: 100% !important;
    height: 50px !important;
  }
}
@media screen and (max-width: 428px) {
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
