<template>
    <div class="container" id="home">
      <div class="row">
          <h2 class="display-2 home-1">Home</h2>
      </div>
      <div class="row flex-column flex-md-row">
       <div class="col image-1">
          <img src="https://anushqakandan.github.io/All-images/Images/AnushiPro3.JPG " alt="profile" class="img-thumbnail border-5" loading="lazy">
       </div>
  
       <div class="col"> 
          <div id="details">
             <h1 class="lead">Nizaam Jeftha</h1>
              <p v-if="title">
                 I am a
                <span>{{ title }}</span>
              </p>
              <Spinner v-else/>
          </div> 
       </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Spinner from './Spinner.vue'
  import { computed, onMounted, ref } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const jobTitle =
  computed(() => store.state.jobTitle)
  const title = ref('Aspiring Frontend Developer')
  const cnt = ref(-1)
  function repeat() {
      try {
          if (cnt.value == jobTitle.value?.length) cnt.value = 0;
          title.value =
              jobTitle.value?.at(cnt.value)?.title;
              setTimeout(repeat, 2000)
          cnt.value++
      } catch (e) {
          //
      }
   }
  onMounted(() => {
      store.dispatch('fetchJobTitle')
      repeat()
  })
  
  </script>
  
  <style>
  
  </style>