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
            <h3 class="developer">I'm <span>{{ title }}</span></h3>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import AOS from 'aos'
import 'aos/dist/aos.css'

const store = useStore()

const jobTitle = computed(() => store.state.jobTitle)
const title = ref(' an Aspiring Developer')
const cnt = ref(0)

function repeat() {
  try {
    if (cnt.value >= jobTitle.value.length) cnt.value = 0
    title.value = jobTitle.value[cnt.value]?.title || 'Aspiring Frontend Developer'
    setTimeout(repeat, 2000)
    cnt.value++
  } catch (e) {
    console.error(e)
  }
}

onMounted(async () => {
  AOS.init({
    duration: 1500,
    once: false
  })
  await store.dispatch('fetchJobTitle')
  repeat()
})
</script>

<style scoped>
@media screen and (max-width: 300px) {
  .name h1 {
    font-size: 1.5rem; 
  }
  .developer h3 {
  
    font-size: 1rem; 
  }
  img[alt='profile'] {
    width: 80%; 
    margin-top: 2rem; 
  }
  .navbar {
    position: sticky;
    top: 0;
    z-index: 1000; 
    background-color: red; 
  }
  
}

@media screen and (min-width: 301px) and (max-width: 720px) {
  .name h1 {
    font-size: 2rem; 
  }
  .developer h3 {
    font-size: 1.25rem; 
  }
  img[alt='profile'] {
    width: 60%; 
    margin-top: 2rem; 
  }
  
}
</style>



