<template>
    <section class="container" id="projects">
        <div class="row">
            <h2 class="display-2 text-center" id="proj">Projects</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" data-aos="fade-up">
                    <div class="card">
                        <img img id="shadow" src="https://jefthanizaam01.github.io/favoriteimages/images/fullstack1.png" class="card-img-top" alt="keyboard" loading="lazy">
                        <div class="card-body">
                            <h5 class="card-title">Full-Stack E-Commerce Store</h5>
                            <p class="card-text">Developed a full-stack e-commerce platform with seamless shopping, user authentication, and an intuitive front-end design.</p>
                            <div class="btn-container">
                                <a href="https://timeless-8f9ab.web.app/" class="btn btn-dark" target="_blank">Live Site</a>
                                <a href="https://github.com/JefthaNizaam01/Capstone" class="btn btn-dark" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="fade-up">
                    <div class="card">
                        <img img id="shadow" src="https://jefthanizaam01.github.io/favoriteimages/images/Art Store .png" class="card-img-top" alt="Art Store">
                        <div class="card-body">
                            <h5 class="card-title">Art Store</h5>
                            <p class="card-text">Crafted with elegance and simplicity, where exceptional artworks from global artists await discovery by passionate art enthusiasts.</p>
                            <div class="btn-container">
                                <a href="https://artistic-store.vercel.app/" class="btn btn-dark" target="_blank">Live Site</a>
                                <a href="https://github.com/JefthaNizaam01/Artistic-Store" class="btn btn-dark" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="fade-up">
                    <div class="card">
                        <img img id="shadow" src="https://jefthanizaam01.github.io/favoriteimages/images/realhangman.png" class="card-img-top" alt="cube" loading="lazy">
                        <div class="card-body">
                            <h5 class="card-title">Hangman Game</h5>
                            <p class="card-text">Hangman game built with Python Flask, featuring a dynamic word system and an interactive UI.</p>
                            <div class="btn-container">
                                <a href="https://hangman-4.onrender.com/" class="btn btn-dark" target="_blank">Live Site</a>
                                <a href="https://github.com/JefthaNizaam01/Hangman" class="btn btn-dark" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="fade-up">
                    <div class="card">
                        <img img id="shadow" src="https://jefthanizaam01.github.io/favoriteimages/images/tributemandela.png" class="card-img-top" alt="tribute" loading="lazy">
                        <div class="card-body">
                            <h5 class="card-title">Nelson Mandela's Tribute Page</h5>
                            <p class="card-text">A tribute page honoring Nelson Mandela's enduring legacy, celebrating his remarkable life and contributions to humanity.</p>
                            <div class="btn-container">
                                <a href="https://tribute-page-five-ecru.vercel.app/" class="btn btn-dark" target="_blank">Live Site</a>
                                <a href="https://github.com/JefthaNizaam01/TributePage" class="btn btn-dark" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="fade-up">
                    <div class="card">
                        <img img id="shadow" src="https://jefthanizaam01.github.io/favoriteimages/images/calculator.png" class="card-img-top" alt="calculator" loading="lazy">
                        <div class="card-body">
                            <h5 class="card-title">Calculator</h5>
                            <p class="card-text">It's a static calculator interface based on a 80s theme created with HTML and CSS to provide a retro-inspired experience. </p>
                            <div class="btn-container">
                                <a href="https://calculator-theta-weld.vercel.app/" class="btn btn-dark" target="_blank">Live Site</a>
                                <a href="https://github.com/JefthaNizaam01/calculator" class="btn btn-dark" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="fade-up">
                    <div class="card">
                        <img img id="shadow" src="https://jefthanizaam01.github.io/favoriteimages/images/surveyform.png" class="card-img-top" alt="survey" loading="lazy">
                        <div class="card-body">
                            <h5 class="card-title">SurveyForm</h5>
                            <p class="card-text">I built a survey form to gather valuable feedback from users. It helps me understand their opinions and preferences better.</p>
                            <div class="btn-container">
                                <a href="https://survey-form-green-five.vercel.app/" class="btn btn-secondary" target="_blank">Live Site</a>
                                <a href="https://github.com/JefthaNizaam01/SurveyForm" class="btn btn-secondary" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body, .card-title, .card-text {
    font-family: 'Inter', sans-serif;
}

.card {
    margin-left: 15px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    height: 100%; 
}

.card-img-top {
   /* Maintain aspect ratio */
    width: 100%; /* Ensure image takes up the full width */
}

.card-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensure content is spaced */
}

.btn-container {
    display: flex;
    gap: 10px; /* Space between buttons */
    margin-top: auto;
     /* Push buttons to the bottom of the card body */
}

.btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: black;
    border: 2px solid transparent; /* Add a border to create space for the effect */
    transition: all 0.3s ease; /* Smooth transition for the hover effect */
    position: relative; /* Required for the pseudo-element */
    overflow: hidden; /* Ensure the effect doesn't overflow */
}

.btn:hover {
    color: black; /* Change text color on hover */
    background-color: rgb(248, 6, 6); /* Change background color on hover */
    border-color: black; /* Add border color on hover */
}

.btn::before {
    content: ''; /* Empty content for the pseudo-element */
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%; /* Large enough to cover the button */
    height: 300%; /* Large enough to cover the button */
    background: radial-gradient(circle, rgba(255,255,255,0.2), rgba(255,255,255,0) 80%); /* Gradient effect */
    transform: translate(-50%, -50%) scale(0); /* Center and scale down initially */
    transition: transform 0.6s ease; /* Smooth scaling transition */
}

.btn:hover::before {
    transform: translate(-50%, -50%) scale(1); /* Scale up on hover */
}

.row-cols-md-3 > .col:nth-child(n+4) {
    margin-top: 90px; /* Adjust this value as needed */
}
@media (min-width: 768px) and (max-width: 991px)  {
    .btn {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
    }

    .card {
        margin-left: 15px;
        margin-bottom: 30px;
    }

    .card-body {
        padding: 1.5rem;
    }
    .btn-container {
        display: flex;
        gap: 10px; /* Space between buttons */
        margin-top: auto;
         /* Push buttons to the bottom of the card body */
    }
    
    .btn {
        padding: 0.5rem 0.4rem;
        font-size: 0.7rem;
        color:white;
        background-color: black;
    }
}
</style>
