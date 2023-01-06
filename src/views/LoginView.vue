<template>
  <div class="login">
    <form @submit.prevent="userLogin">
      <input type="email" v-model="user.email" />
      <input type="password" v-model="user.password" />
      <button type="submit">Sign In</button>
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
    }
  }
}
</script>

<style scoped>

</style>
