<template>
  <section class="container" id="education">
    <div class="row">
      <h2 class="display-2 text-center" id="Ed" data-aos="fade-down">Education</h2>
      <div class="col-xl-12">
        <ul class="timeline-list">
          <li data-aos="fade-left">
            <div class="timeline_content">
              <span>April 2024 - Present</span>
              <h4>Student at Life Choices Academy</h4>
              <p>
                I am currently enrolled as a student at Life Choices Academy to become a full stack developer and I am learning a lot. The environment encourages growth and development not only when it comes to learning how to code but also personal development.
              </p>
            </div>
          </li>
          <li data-aos="fade-right">
            <div class="timeline_content">
              <span>2019-2023</span>
              <h4>University of the Western Cape</h4>
              <p>
                I obtained my Bachelor of Science degree in Biotechnology and while the journey had its challenges and obstacles, It has taught me a lot about how failure is needed for growth and it takes perseverance and dedication to succeed. It was quite rigorous and at times I definitely had moments of doubt and uncertainty. However, the challenges I faced have shaped me into the resilient and determined individual I am today.
              </p>
            </div>
          </li>
          <li data-aos="fade-left">
            <div class="timeline_content">
              <span>November 2022 - December 2022</span>
              <h4>Internship</h4>
              <p>
                I had the opportunity to participate in a science internship that provided me with invaluable experiences and insights into the world of scientific research. Throughout the internship, I was immersed in a dynamic and collaborative environment where I worked alongside seasoned scientists and researchers.
              </p>
            </div>
          </li>
          <li data-aos="fade-right">
            <div class="timeline_content">
              <span>2014 - 2018</span>
              <h4>High School</h4>
              <p>
                I went to Grassdale High School and while it was a major adjustment, each obstacle served as an opportunity for growth and self-discovery. High school provided me with a solid foundation upon which to build my future aspirations and pursue my dreams. As I reflect on my high school experience, I am grateful for the memories, lessons, and friendships which I have obtained along the way.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'EducationSection',
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
.timeline_content span,
  .timeline_content h4,
  .timeline_content p {
  font-family: 'Inter', sans-serif;
  }

h2#Ed {
  margin-bottom: 40px; 
}

@media (max-width: 720px) {
  #education {
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
  #education {
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