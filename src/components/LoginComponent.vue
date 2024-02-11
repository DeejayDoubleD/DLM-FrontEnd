<template>
    <main>
        <h1>Login</h1>
      <form  @submit.prevent="login">
        <label for="username">Nutzername:</label><br>
        <input type="text" id="username" name="Username" v-model="username"><br>
        <label for="password">Passwort:</label><br>
        <input type="password" id="password" name="Password" v-model="password">
        <button type="submit">Login</button>
      </form>
      <p v-if="error" style="color: red;">{{ error }}</p>
    </main>
  </template>

<script>
import router from '@/router';
import { useUserStore } from '@/stores/user';
import axios from 'axios';

export default {
  data() {
    return {
      error: '',
    };
  },
  methods: {
    async login() {
      const userStore = useUserStore(this.$pinia)
      try {
        const response = await axios.post('http://127.0.0.1:8080/auth/login', {
            username: this.username,
            password: this.password
        });
        console.log('Login successful');
        userStore.setUserData(this.username, this.password, response.data['jwtToken'])
        router.push('/home')
      } catch (error) {
        this.error = error.response.data['message']
        console.error('Login error:', error);
      }
    }
  }
};
</script>