<template>
  <section class="container" id="experience">
    <div class="row">
      <h2 class="display-2 text-center" id="wrk" data-aos="fade-down">Work Experience</h2>
      <div class="col-xl-12">
        <ul class="timeline-list">
          <li data-aos="fade-left">
            <div class="timeline_content">
              <span>September 2024 - Present</span>
              <h4>Software Developer Intern</h4>
              <h5>LC Studio</h5>
              <p>At LC Studio, I work as a software developer intern, contributing to various frontend and backend projects. I have gained experience in modern web development technologies, collaborating with teams to build scalable applications and enhance user experience.</p>
            </div>
          </li>
          <li data-aos="fade-left">
            <div class="timeline_content">
              <span>March 2022 - August 2022</span>
              <h4>Research Assistant</h4>
              <h5>University of the Western Cape</h5>
              <p>As a research assistant at the University of the Western Cape, I collaborated with the faculty on biotechnology experiments, conducting literature reviews, data collection, and analysis. This role enhanced my analytical skills and provided valuable hands-on experience in academic research methodologies.</p>
            </div>
          </li>
          <li data-aos="fade-right">
            <div class="timeline_content">
              <span>February 2020 - May 2020</span>
              <h4>Tutor</h4>
              <h5>University of the Western Cape</h5>
              <p>As a tutor for first-year biochemistry students at the University of the Western Cape, I organized study sessions to help students understand challenging topics and offered additional support when needed. My goal was to boost their confidence and ensure they felt prepared and capable in their studies, beyond just passing exams.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
.timeline_content span,
.timeline_content h4,
.timeline_content p {
font-family: 'Inter', sans-serif;
}
h2#wrk {
margin-top: 150px;
margin-bottom: 40px; 
}

ul.timeline-list li:first-child {
margin-top: 20px;
}
@media (max-width: 720px) {
  #experience {
    padding: 15px;
    margin: 15px auto;
    max-width: 90%;
    text-align: center;
  }
  .timeline_content {
    font-size: 16px;
    padding: 15px;
    text-align: center;
    margin-bottom: 20px;
  }
  .timeline_content span,
  .timeline_content h4,
  .timeline_content p {
    text-align: center;
    
  }
  ul.timeline-list:before {
    display: none;
  }
  ul.timeline-list li:before {
    display: none;
  }
  ul.timeline-list li .timeline_content,
  ul.timeline-list li:nth-child(2n) .timeline_content {
    width: 80%;
    text-align: center;
    float: none;
    margin: 0 auto 20px;
  }
}

@media (max-width: 300px) {
  #experience {
    padding: 10px;
    margin: 10px auto;
    max-width: 100%;
    text-align: center;
  }
  .timeline_content {
    font-size: 14px;
    padding: 5px;
    text-align: center;
    margin-bottom: 10px;
  }
  .timeline_content span,
  .timeline_content h4,
  .timeline_content p {
    font-size: 12px;
    text-align: center;
  }
  ul.timeline-list:before {
    display: none;
  }
  ul.timeline-list li:before {
    display: none;
  }
  ul.timeline-list li .timeline_content,
  ul.timeline-list li:nth-child(2n) .timeline_content {
    width: 90%;
    text-align: center;
    float: none;
    margin: 0 auto 10px;
  }
}
</style>
