<template>
  <div class="wrapper">
    <NavBar />
    <main class="container-fluid">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import BubblesAnimation from "@/components/BubblesAnimation.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    BubblesAnimation,
    NavBar,
    Footer,
  },
};
</script>

<style src="@/assets/css/style.css"></style>