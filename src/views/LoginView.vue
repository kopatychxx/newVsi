<template>
  <div class="login">
    <form class="loginForm" @submit.prevent="userLogin">
      <img src="../assets/logo_black.svg" alt="">
      <input placeholder="Ім'я користувача" type="email" v-model="user.email" />
      <input placeholder="Пароль" type="password" v-model="user.password" />
      <button type="submit">Увійти</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "LoginView",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
      firebase
          .auth()
          .signInWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            this.$router.push('/admin')
          })
          .catch((error) => {
            alert(error.message);
          });
      localStorage.setItem('Login', true)
      console.log(localStorage.getItem('Login'))
    },
  }
}
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/loginBg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;

}
.loginForm {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 20px 50px 50px;
  row-gap: 30px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.loginForm img {
  width: 250px;
}
.loginForm input{
  height: 65px;
  width: 350px;
  border: 1px solid white;
  border-radius: 15px;
  padding: 5px 15px;
}
.loginForm button {
  height: 65px;
  width: 350px;
  background-color: #3E583E;
  color: white;
  font-size: 25px;
  border-radius: 15px;
  padding: 5px 15px;
}
input:-webkit-autofill{
  -webkit-text-fill-color: #3E583E !important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}
@media screen and (max-width: 425px){
  .loginForm img {
    width: 180px;
  }
  .loginForm input,
  .loginForm button {
    width: 250px;
    height: 50px;
  }
  .loginForm button{
    font-size: 20px;
  }
  .loginForm {
    padding: 20px 8px;
  }
}
</style>
