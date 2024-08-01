<template>
  <section class="container" id="skills">
    <div class="row">
      <h2 class="display-2 text-center" id="skill" data-aos="fade-up">Skills</h2>
      <section class="skills-tools" id="skills-tools">
        <div class="wrapper">
          <div class="container-icons" data-aos="fade-up">
            <div class="box-icon">
              <i class="devicon devicon-html5-plain" aria-hidden="true"></i>
              <p class="skillheading">HTML5</p>
            </div>
            <div class="box-icon">
              <i class="devicon devicon-css3-plain" aria-hidden="true"></i>
              <p class="skillheading">CSS3</p>
            </div>
            <div class="box-icon">
              <i class="fab fa-js" aria-hidden="true"></i>
              <p class="skillheading">JavaScript</p>
            </div>
            <div class="box-icon">
              <i class="devicon devicon-jquery-plain" aria-hidden="true"></i>
              <p class="skillheading">jQuery</p>
            </div>
            <div class="box-icon">
              <i class="devicon devicon-react-original" aria-hidden="true"></i>
              <p class="skillheading">React</p>
            </div>
            <div class="box-icon">
              <i class="devicon devicon-git-plain" aria-hidden="true"></i>
              <p class="skillheading">Git</p>
            </div>
            <div class="box-icon">
              <i class="devicon devicon-github-plain" aria-hidden="true"></i>
              <p class="skillheading">GitHub</p>
            </div>
            <div class="box-icon">
              <i class="fas fa-cogs" aria-hidden="true"></i>
              <p class="skillheading">RESTful APIs</p>
            </div>
            <div class="box-icon">
              <i class="fas fa-database" aria-hidden="true"></i>
              <p class="skillheading">Firebase</p>
            </div>
            <div class="box-icon">
              <i class="devicon devicon-sass-original" aria-hidden="true"></i>
              <p class="skillheading">SASS</p>
            </div>
            <div class="box-icon">
              <i class="fas fa-terminal" aria-hidden="true"></i>
              <p class="skillheading">Command Line</p>
            </div>
            <div class="box-icon">
              <i class="devicon devicon-visualstudio-plain" aria-hidden="true"></i>
              <p class="skillheading">VS Code</p>
            </div>
            <div class="box-icon">
              <i class="fas fa-mobile-alt" aria-hidden="true"></i>
              <p class="skillheading">Responsive Websites</p>
            </div>
            <div class="box-icon">
              <i class="fas fa-universal-access" aria-hidden="true"></i>
              <p class="skillheading">Web Accessibility</p>
            </div>
            <div class="box-icon">
              <i class="devicon devicon-wordpress-plain" aria-hidden="true"></i>
              <p class="skillheading">WordPress</p>
            </div>
            <div class="box-icon">
              <i class="fas fa-file-alt" aria-hidden="true"></i>
              <p class="skillheading">Adobe Suite</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection'
 
}
</script>

<style scoped>

.skillheading {
  color: red;
  font-family: 'Helvetica', Helvetica; 
  font-size: 1.2rem; 
  margin-top: 0.5rem; 
  margin-bottom: 0; 
  text-shadow: 0 0 1px red,
  0 0 1px red, 
  0 0 1px red;

  
}


#skill {
  margin-bottom: 3rem; 
}

/* Container for icons */
.container-icons {
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
}


.container-icons .box-icon {
  width: 50%;
  height: 142px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
 
}

/* Set all icons to white */
.container-icons .box-icon i {
  color: #fff;
  font-size: 4.5rem;
  text-shadow: 0 0 1px white,
  0 0 5px white;
  

}

/* Hover effect for icon boxes */
.container-icons .box-icon:hover {
  box-shadow: 0 0 5px red,
   0 0 10px red,
   0 0 40px red; 
  transform: scale(1.05); 
}

@media (min-width: 600px) {
  .container-icons .box-icon {
    width: 25%;
  }
}

@media (min-width: 1024px) {
  .container-icons .box-icon {
    width: 12.5%;
  }
}


</style>
