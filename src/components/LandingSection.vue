<template>
    <main class="container-fluid">
      <section class="container min-vh-100" id="home">
        <div class="row my-4 flex-column flex-md-row align-items-center justify-content-center">
          <div class="col" data-aos="fade-right">
            <img
              class="img-thumbnail border-5"
              src="https://jefthanizaam01.github.io/favoriteimages/images/Profile2.jpg"
              alt="profile"
              loading="lazy"
            />
          </div>
          <div class="col" data-aos="fade-left">
            <div class="name">
              <h1>Hi, It's <span>Nizaam Jeftha</span></h1>
              <h3 class="developer">I'm an <span>Aspiring Developer</span></h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  <script setup>
  import { onMounted } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  onMounted(() => {
    AOS.init({
        duration: 1500,
        once: false
      });
    });
  </script>
  <style >
  </style>