<template>
    <section class="container" id="about">
      <div class="row">
        <h2 class="display-2 text-center" id="Ab" data-aos="fade-up">About</h2>
      </div>
      <div class="row">
        <div class="cardz cardAbout m-auto" data-aos="fade-up">
          <p class="cardz-text m-auto">
            I am an aspiring developer who became interested in coding whilst in my second year of university. At the time I was studying biotechnology but quickly became interested in software development after becoming curious as to how websites are built. When I'm not coding, you'll often find me outdoors, appreciating nature's beauty, whether it's hiking or enjoying a day at the beach. I also love connecting with others and working together to bring ideas to life, from collaborating with fellow developers to just hanging out as friends. Building meaningful relationships is at the heart of what I do.
          </p>
          <div class="aboutInfo col-md-12">
            <div class="myInfo mt-3" data-aos="fade-up">
              <p>Full Name: Nizaam Jeftha</p>
            </div>
            <div class="myInfo mt-3" data-aos="fade-up">
              <p>Date of Birth: 31/05/2001</p>
            </div>
            <div class="myInfo mt-3" data-aos="fade-up">
              <p>Location: Cape Town, South Africa</p>
            </div>
            <div class="myInfo mt-3" data-aos="fade-up">
              <p>Cell Phone Number: (+27) 84 734 9535</p>
            </div>
            <div class="myInfo mt-3" data-aos="fade-up">
              <p>Email Address: nizaam01.jeftha@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script>
  export default {
    name: 'AboutSection',
  };
  </script>
  <style scoped>
  @media (max-width: 720px) {
    #about {
      padding: 15px;
      margin: 15px auto;
      max-width: 90%;
    }
  
    .cardAbout {
      font-size: 16px;
      padding: 15px;
    }
  
    .cardz-text {
      text-align: justify;
    }
  }
  
  /* Responsive styles for 300px */
  @media (max-width: 300px) {
    #about {
      padding: 10px;
      margin: 10px auto;
      max-width: 100%;
      text-align: center; 
      margin-left: 40px;
    }
  
    .cardAbout {
      font-size: 14px;
      padding: 10px;
      text-align:center;
    }
  
    .cardz-text {
      font-size: 12px;
      text-align: center;
    }
  }
  </style>