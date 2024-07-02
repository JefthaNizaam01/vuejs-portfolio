<template>
  <div>
    <BubblesAnimation />
    <div class="container">
      <section class="row" id="home">
        <LandingSection />
      </section>
      <section class="row" id="aboutt">
        <AboutSection />
      </section>
      <section class="row" id="education">
        <EducationSection />
      </section>
      <section class="row" id="skills">
        <SkillsSection />
      </section>
      <section class="row" id="experience">
        <WorkExperienceSection />
      </section>
      <section class="row" id="projects">
        <ProjectSection />
      </section>
      <section class="row" id="testimonialss">
        <TestimonialSection />
      </section>
      <section class="row" id="reachMe"></section>
    </div>
  </div>
</template>
<script>
import BubblesAnimation from '@/components/BubblesAnimation.vue'
import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import EducationSection from '@/components/EducationSection.vue'

export default {
  name: 'HomeView',
  components: {
    BubblesAnimation,
    LandingSection,
    AboutSection,
    EducationSection
  }
}
</script>