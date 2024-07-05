<template>
    <section class="container-md" id="experience" data-aos="fade-up">
        <h2 class="display-2 text-center" id="wrk">Work Experience</h2>
        <div class="row exp">
            <div class="col-lg-6" data-aos="fade-right">
                <div class="work">
                    <span class="day">March 2022 - August 2022</span>
                    <h4>Research Assistant</h4>
                    <h5>University of the Western Cape</h5>
                    <p class="font">As a research assistant at the University of the Western Cape, I collaborated closely with faculty members on various experiments within my field of biotechnology. My responsibilities included literature reviews, data collection and analysis, and setting up experiments. This role provided me with invaluable hands-on experience in academic research methodologies, enhancing my analytical skills and giving me greater practical experience which I can utilize in future job opportunities.</p>
                </div>
            </div>
            <div class="col-lg-6" data-aos="fade-left">
                <div class="work">
                    <span class="day">February 2020 - May 2020</span>
                    <h4>Tutor</h4>
                    <h5>University of the Western Cape</h5>
                    <p class="font">During my time as a tutor for first-year biochemistry students at the University of the Western Cape, I helped students understand tough topics in biochemistry. I did this by organizing study sessions where we worked together to solve problems and discuss ideas. If students needed extra help, I was there to support them. My goal was not just to help students pass their exams, but also to make them more confident in themselves. I wanted them to feel prepared and capable in their studies.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    body {
        font-family: 'Roboto', sans-serif;
    }

    

   
    h4 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 10px;
    }

    h5 {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 15px;
    }

    p.font {
        font-size: 1rem;
        line-height: 1.6;
    }
    @media screen and (max-width: 720px) {
        .exp .col-lg-6 {
          margin-bottom: 30px;
          
        }
      }
      
      @media screen and (max-width: 300px) {
        .exp .col-lg-6 {
         
        }
      }
</style>
