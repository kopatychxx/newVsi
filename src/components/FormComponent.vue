<template>
  <div class="formComponent">
    <h3>Записатися на перегляд</h3>
    <form class="form" ref="form" @submit.prevent="sendEmail">
      <v-text-field v-model="name" name="user_name" class="form__input" label="Імя" color="#36593B"></v-text-field>
<!--        <div v-if="v$.name.$error">-->
<!--            {{ v$.name.$errors[0].$message }}-->
<!--        </div>-->
      <v-text-field v-model="message" name="message" class="form__input" type="number" label="Номер телефона" placeholder="+38(023)-123-45-67" color="#36593B"></v-text-field>
<!--        <div v-if="v$.message.$error">-->
<!--            {{ v$.message.$errors[0].$message }}-->
<!--        </div>-->
      <v-btn  class="form__btn" type="submit" value="Записатись">Записатись</v-btn>
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
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
export default {
  name: "FormComponent",
  data () {
    return {
      v$: useVuelidate(),
      dialog: false,
        name: '',
        message: '',
    }
  },
    validations: {
        name: {
            required: helpers.withMessage('This field is required', required),
        },
        message: {
            required: helpers.withMessage('This field is required', required),
        },
    },
  methods: {
    sendEmail() {
        this.v$.$validate()
        if (!this.v$.$error) {
            console.log(this.name, this.message)
          this.dialog = true
        }
      // emailjs.sendForm('service_c5su7be', 'template_d7i1qli', this.$refs.form, 'R6tVQhwgEHtKs6UqN')
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
