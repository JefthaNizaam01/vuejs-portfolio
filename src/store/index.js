import { createStore } from 'vuex'
import axios from 'axios'
// import Swal from 'sweetalert2/dist/sweetalert2'

// const portfolioURL = 'https://jefthanizaam01.github.io/EompData/data/'

export default createStore({
  state: {
    //state array
    home: "",
    about: "",
    resume: [],
    skills: [],
    projects: [],
    testimonials: [],
    contact: ""
  },
  getters: {
  },
  mutations: {
    setHome(state , data){
      state.home = data
    },
    setAbout(state , about){
      state.about = about
    },
    setResume(state , resume){
      state.resume = resume
    },
    setSkills(state , skills){
      state.skills = skills
    },
    setProjects(state , projects ){
      state.projects = projects
    },
    setTestimonials(state , testimonials){
      state.testimonials = testimonials
    },
    setContact(state , contact){
      state.contact = contact
    }
  },
  actions: {
    getHome (context){
      try {
        axios.get('https://jefthanizaam01.github.io/EompData/data/')
        .then (res => {
          context.commit('setHome',res.data.home)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getAbout (context){
      try {
        axios.get('https://jefthanizaam01.github.io/EompData/data/')
        .then (res => {
          context.commit('setAbout',res.data.about)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getResume (context){
      try {
        axios.get('https://jefthanizaam01.github.io/EompData/data/')
        .then (res => {
          context.commit('setResume',res.data.resume)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getSkills (context){
      try {
        axios.get('https://jefthanizaam01.github.io/EompData/data/')
        .then (res => {
          console.log(res.data.skills);
          context.commit('setSkills',res.data.skills)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getProjects (context){
      try {
        axios.get('https://jefthanizaam01.github.io/EompData/data/')
        .then (res => {
          context.commit('setProjects',res.data.projects)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getTestimonials (context){
      try {
        axios.get('https://jefthanizaam01.github.io/EompData/data/')
        .then (res => {
          context.commit('setTestimonials',res.data.testimonials)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getContact (context){
      try {
        axios.get('https://jefthanizaam01.github.io/EompData/data/')
        .then (res => {
          context.commit('setContact',res.data.contact)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    }
  },
  modules: {
  }
})















