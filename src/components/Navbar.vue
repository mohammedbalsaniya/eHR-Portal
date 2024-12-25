<script setup>
import logo from '../assets/img/logo.svg';
</script>

<template>
<nav class="navbar navbar-expand-lg  navbar-dark bg-info shadow-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img :src="logo" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  justify-content-center pd-auto" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Self services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team Admin </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">eHR Portal</a>
        </li>
      </ul>
      <span class="navbar-text text-white">
        Welcome, <strong>John Doe</strong>
      </span>
    </div>
  </div>
</nav>

</template>