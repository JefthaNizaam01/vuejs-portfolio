<template>
  <div class="container">
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
  
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'

export default {
    name: 'HomeView',
    components: {
    
   
     
    }
  }
  </script>