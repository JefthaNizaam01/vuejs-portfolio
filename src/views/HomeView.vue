<template>
  <div class="container-fluid">
    <section >
<BubblesAnimation />
   
  <section class="row" id="home">
      <LandingSection />
  </section>

  <section class="row" id="about">
     <AboutSection />
  </section>
  
  <section class="row" id="resume">
     <ResumeSection />
  </section>
  
  <section class="row" id="project"></section>
  
  <section class="row" id="testimonials"></section>
  
  <section class="row" id="reachMe"></section>
</section>
  </div>
</template>

<script>
import BubblesAnimation from '@/components/BubblesAnimation.vue'


export default {
  name: 'HomeView',
  components: {
    BubblesAnimation
  
   
  }
}
</script>