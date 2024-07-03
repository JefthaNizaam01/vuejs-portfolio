<template>
    <div class="container justify-content-center text-center" id="reachMe">
      <div class="row">
        <h2 id="reach" class="display-2 text-center justify-content-center">Reach Me</h2>
        <section id="formz" class="py-3 py-md-5">
          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 class="mb-4 display-5 text-center">Let's get in touch</h2>
                <p class="text-secondary mb-5 text-center">I'm always open to new opportunities and collaborations. Don't hesitate to reach out!</p>
                <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">
              </div>
            </div>
          </div>
          
          <div class="container text-center">
            <div class="row justify-content-center">
              <div class="col">
                <div class="card-Contact">
                  <div class="card-body text-black">
                    <p>
                      <i class="bi bi-telephone-forward-fill"></i> Phone: 084-734-9535
                    </p>
                    <p>
                      <i class="bi bi-envelope"></i> Email: nizaam01.jeftha@gmail.com
                    </p>
                    <p>
                      <i class="fa-sharp fa-solid fa-location-dot"></i> Address: Grassy Park, Cape Town
                    </p>
                    <p>
                        <a id="social-icon" href="https://www.linkedin.com/yourprofile" target="_blank" ><i class="bi bi-linkedin"></i></a>
                        <a id="social-icon" href="https://github.com/JefthaNizaam01" target="_blank" ><i class="bi bi-github"></i></a>
                      </p>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="container text-center justify-content-lg-center">
            <div class="row justify-content-lg-center">
              <div class="col-12 col-lg-9">
                <div>
                  <form action="https://formspree.io/f/mrgndglz" method="POST" class="formal">
                    <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                      <div class="col-12">
                        <label for="fullname" class="form-label">Full Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="fullname" name="fullname" value="" required>
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                        <div class="input-group">
                          <span class="input-group-text">
                            <i class="bi bi-envelope"></i>
                          </span>
                          <input type="email" class="form-control" id="email" name="email" value="" required>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="phone" class="form-label">Phone Number</label>
                        <div class="input-group">
                          <span class="input-group-text">
                            <i class="bi bi-telephone"></i>
                          </span>
                          <input type="tel" class="form-control" id="phone" name="phone" value="">
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                        <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
                      </div>
                      <div class="col-12">
                        <div id="resbutton" class="d-grid">
                          <button id="sub" class="btn btn-primary btn-lg" type="submit">Submit</button>
                          <button id="sub" class="btn btn-primary btn-lg" type="reset">Clear</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
   
  }
  </script>
  
  <style scoped>
  #social-icon {
    color: black;
    font-size: 2em; 
    margin: 0 10px; 
  }
  
  #social-icon:hover {
    color: black; 
  }
  </style>
  