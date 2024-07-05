<template>
  <section class="container" id="testimonials">
    <div class="row">
      <h2 class="display-2 text-center justify-content-center" id="testimonial">
        Testimonials
      </h2>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div v-for="(testimonial, index) in testimonials" :key="index" :class="['carousel-item', 'text-center', { 'active': index === 0 }]">
            <img :src="testimonial.image" class="testimg mx-auto" :alt="'Testimonial ' + (index + 1)">
            <div class="carousel-content">
              <h3>{{ testimonial.name }}</h3>
              <p>{{ testimonial.message }}</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: []
    };
  },
  mounted() {
    this.fetchTestimonials();
  },
  methods: {
    fetchTestimonials() {
      try {
       
        const jsonData = [
          {
            name: 'Aakifah Palekar',
            image: 'https://jefthanizaam01.github.io/favoriteimages/images/kiefah.jpg',
            message: "Nizaam is a delightful colleague, exhibiting strong interpersonal skills and a grounded personality. He demonstrates wisdom and possesses exceptional knowledge in his field. Nizaam generously offers assistance and displays remarkable patience. It is indeed an honor to have Nizaam as both a friend and a professional peer."
          },
          {
            name: 'Shakeel Davids',
            image: 'https://jefthanizaam01.github.io/favoriteimages/images/ShakeelTestimonial.jpg',
            message: "Nizaam is an excellent coder. He's super dedicated to what he does, and he's really good at it. Whether it's solving tough problems or making cool-looking websites, Nizaam knows his stuff. He's like an artist with code, always coming up with clever solutions. If you need someone to bring your ideas to life online, Nizaam is your guy."
          },
          {
            name: 'Anushqa Kandan',
            image: 'https://jefthanizaam01.github.io/favoriteimages/images/anush.jpg',
            message: "Nizaam is an incredibly committed individual who consistently strives for excellence. What sets Nizaam apart is his knack for creating a warm and welcoming environment wherever he goes. He's the kind of person who goes above and beyond, making everyone feel valued and supported. Working with Nizaam is not just about getting the job done, it's about feeling inspired and appreciated every step of the way."
          },
          {
            name: 'Abdurahmaan Charif',
            image: 'https://jefthanizaam01.github.io/favoriteimages/images/abdu.jpg',
            message: "Nizaam is a good colleague and a smart worker. He applies himself to all that which he does and has a positive attitude that is contagious who find themselves with him. He will definitely be an asset to any team that he's a part of."
          },
          {
            name: 'Robyn Carnow',
            image: 'https://jefthanizaam01.github.io/favoriteimages/images/RobinTestimonial.jpg',
            message: "Nizaam is an easy-going and high-spirited person who puts his creative foot first. He approaches challenges with a calm demeanor, never straying from focus when it comes to making a deadline. Charm comes easily to him, coupled with a natural affinity to make one feel at ease, whether that be individually or within a team."
          },
          {
            name: 'Joel Mukanya (Lecturer)',
            image: 'https://jefthanizaam01.github.io/favoriteimages/images/joel.png',
            message: "Nizaam is a highly creative, well-behaved, and dedicated individual who thrives on collaborating with his peers and excels at working on project assignments. He has acquired various skills and tools, including HTML5, CSS3, Bootstrap, VS Code, and wireframe. I am pleased to introduce him as an exceptional candidate and developer."
          }
        ];

      
        this.testimonials = jsonData;
      } catch (error) {
        console.error('Error fetching testimonials:', error.message);
      
      }
    }
  }
};
</script>

<style scoped>
#joel-img {
  width: 300px;
  height: 400px;
}
</style>
