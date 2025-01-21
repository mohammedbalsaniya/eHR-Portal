<script setup>
import mainContant from './mainContant.vue';
</script>

<template>

  <div class="d-flex ">
    <!-- Toggle Button (For Small Screens Only) -->
    <button class="navbar-toggler d-lg-none p-2 vh-100" type="button" data-bs-toggle="collapse"
      data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
    <!-- Sidebar -->

    <div class="collapse d-lg-block bg-light  shadow-lg" id="sidebar" style="width: 250px;">
      <ul class="nav flex-column p-3">
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">My Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Careers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Knowledge Center</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Settings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Sign Out</a>
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="flex-grow-1 p-3">
      <mainContant />
    </div>
  </div>
</template>