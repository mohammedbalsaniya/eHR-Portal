<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const route = ref('/');

// Function to handle login
const handleLogin = () => {
  if (username.value === 'admin' && password.value === '1234') {
    console.log('Login successful');
    route.value = '/home'; // Redirect to the home page on success
  } else {
    console.log('Login failed');
    route.value = '/'; // Stay on the login page
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h4 class="text-center">Sign in to Accord eHR</h4>
        <p class="text-center text-muted">
          For the purpose of security, we recommend you change your password periodically.
        </p>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input type="text" class="form-control" id="username" placeholder="Enter your username"
              v-model="username" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input type="password" class="form-control" id="password" placeholder="Enter your password"
              v-model="password" />
          </div>
          <!-- Dynamic RouterLink -->
          <RouterLink class="btn btn-primary w-100" :to="route" @click.prevent="handleLogin">
            Sign In
          </RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>
