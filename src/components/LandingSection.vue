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

<style>

</style>
