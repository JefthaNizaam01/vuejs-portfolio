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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                      <path d="M168 0C75.1 0 0 75.1 0 168c0 87.5 129.7 214.5 152.2 235.2c8.5 7.9 21 7.9 29.5 0C222.3 382.5 352 255.5 352 168C352 75.1 276.9 0 184 0H168zM168 240c-39.8 0-72-32.2-72-72c0-39.8 32.2-72 72-72c39.8 0 72 32.2 72 72C240 207.8 207.8 240 168 240z"/>
                    </svg> Address: Grassy Park, Cape Town
                  </p>
                  <p>
                      <a id="social-icon" href="https://www.linkedin.com/in/nizaam-jeftha-53684a2a8/" target="_blank" ><i class="bi bi-linkedin"></i></a>
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
                        <input type="number" class="form-control" id="phone" name="phone" value="">
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
@media (min-width: 1080px) {
#formz {
  width: 100%;
  text-align: center;
}
}
@media (max-width: 720px) {
#resbutton {
  flex-direction: column;
  align-items: center;
  gap:3rem;
}
}
@media (max-width: 300px) {
#resbutton {
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}
}
</style>