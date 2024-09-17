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
      <section class="row" id="experience">
        <WorkExperienceSection />
      </section>
      <section class="row" id="projects">
        <ProjectsSection />
      </section>
      <section class="row" id="reachMe">
        <ReachMeSection />
      </section>
    </div>
  </div>
</template>

<script>
import BubblesAnimation from '@/components/BubblesAnimation.vue'
import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import WorkExperienceSection from '@/components/WorkExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ReachMeSection from '@/components/ReachMeSection.vue'

export default {
  name: 'HomeView',
  components: {
    BubblesAnimation,
    LandingSection,
    AboutSection,
    EducationSection,
    WorkExperienceSection,
    ProjectsSection,
    ReachMeSection
  }
}
</script>
