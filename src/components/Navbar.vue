<script setup>
import logo from '../assets/img/logo.svg';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info shadow-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img :src="logo" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center pd-auto" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink 
              class="nav-link" 
              :class="{ active: route.path === '/home' }" 
              to="/home">Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink 
              class="nav-link" 
              :class="{ active: route.path === '/selfServices' }" 
              to="/selfServices">Self services
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink 
              class="nav-link" 
              :class="{ active: route.path === '/TeamAdmin' }" 
              to="/TeamAdmin">Team Admin
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink 
              class="nav-link" 
              :class="{ active: route.path === '/eHR' }" 
              to="/eHR">eHR Portal
            </RouterLink>
          </li>
        </ul>
        <span class="navbar-text text-white">
          Welcome, <strong>John Doe</strong>
        </span>
      </div>
    </div>
  </nav>
</template>
