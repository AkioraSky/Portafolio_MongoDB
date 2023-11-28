import React from "react";

const AboutMeSection = () => (
  <section className="section about-me" data-section="section1">
    <div className="container">
      <div className="section-heading">
        <h2>About Me</h2>
        <div className="line-dec"></div>
        <span>
          This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this
          layout for your site. Updated on 21 May 2019 for repeated main menu
          HTML code.
        </span>
      </div>
      <div className="left-image-post">
        <div className="row">
          <div className="col-md-6">
            <div className="left-image">
              <img src="../../src/assets/images/callaito.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-text">
              <h4>Reflux HTML CSS Template</h4>
              <p>
                Donec tristique feugiat lacus, at sollicitudin nunc euismod sed.
                Mauris viverra, erat non sagittis gravida, elit dui mollis ante,
                sit amet eleifend purus ligula eget eros. Sed tincidunt quam
                vitae neque pharetra dignissim eget ut libero.
              </p>
              <div className="white-button">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-image-post">
        <div className="row">
          <div className="col-md-6">
            <div className="left-text">
              <h4>Sed sagittis rhoncus velit</h4>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum fermentum eleifend
                nibh, vitae sodales elit finibus pretium. Suspendisse potenti.
                Ut sollicitudin risus a sollicitudin semper.
              </p>
              <div className="white-button">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <img src="../../src/assets/images/callaito.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section className="section my-services" data-section="section2">
    <div className="container">
      <div className="section-heading">
        <h2>What I’m good at?</h2>
        <div className="line-dec"></div>
        <span>
          Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
          Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
          Nullam eu faucibus diam. Donec eget massa ante.
        </span>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="service-item">
            <div className="first-service-icon service-icon"></div>
            <h4>HTML5 &amp; CSS3</h4>
            <p>
              Phasellus non convallis dolor. Integer tempor hendrerit arcu at
              bibendum. Sed ac ante non metus vehicula congue quis eget eros.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item">
            <div className="second-service-icon service-icon"></div>
            <h4>Creative Ideas</h4>
            <p>
              Proin lacus massa, eleifend sed fermentum in, dignissim vel metus.
              Nunc accumsan leo nec felis porttitor, ultricies faucibus purus
              mollis.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item">
            <div className="third-service-icon service-icon"></div>
            <h4>Easy Customize</h4>
            <p>
              Integer suscipit condimentum aliquet. Nam quis risus metus. Nullam
              faucibus quam eget arcu pretium tincidunt. Nam libero dui.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item">
            <div className="fourth-service-icon service-icon"></div>
            <h4>Admin Dashboard</h4>
            <p>
              Vivamus et dui a massa venenatis fringilla. Proin lacus massa,
              eleifend sed fermentum in, dignissim vel metus. Nunc accumsan leo
              nec felis porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WorkSection = () => (
  <section className="section my-work" data-section="section3">
    <div className="container">
      <div className="section-heading">
        <h2>My Work</h2>
        <div className="line-dec"></div>
        <span>
          Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit
          amet. Duis ac elit vulputate, lobortis arcu quis, vehicula mauris.
        </span>
      </div>
      <div className="row">
        <div className="isotope-wrapper">
          <div className="isotope-box">
            <div className="isotope-item" data-type="nature">
              <figure className="snip1321">
                <img
                  src="../../src/assets/images/callaito.jpg"
                  alt="sq-sample26"
                />
                <figcaption>
                  <a
                    href="../../src/assets/images/callaito.jpg"
                    data-lightbox="image-1"
                    data-title="Caption"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                  <h4>First Title</h4>
                  <span>free to use our template</span>
                </figcaption>
              </figure>
            </div>

            <div className="isotope-item" data-type="people">
              <figure className="snip1321">
                <img
                  src="../../src/assets/images/callaito.jpg"
                  alt="sq-sample26"
                />
                <figcaption>
                  <a
                    href="../../src/assets/images/callaito.jpg"
                    data-lightbox="image-1"
                    data-title="Caption"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                  <h4>Second Title</h4>
                  <span>please tell your friends</span>
                </figcaption>
              </figure>
            </div>

            <div className="isotope-item" data-type="animals">
              <figure className="snip1321">
                <img
                  src="../../src/assets/images/callaito.jpg"
                  alt="sq-sample26"
                />
                <figcaption>
                  <a
                    href="../../src/assets/images/callaito.jpg"
                    data-lightbox="image-1"
                    data-title="Caption"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                  <h4>Item Third</h4>
                  <span>customize anything</span>
                </figcaption>
              </figure>
            </div>

            <div className="isotope-item" data-type="people">
              <figure className="snip1321">
                <img
                  src="../../src/assets/images/callaito.jpg"
                  alt="sq-sample26"
                />
                <figcaption>
                  <a
                    href="../../src/assets/images/callaito.jpg"
                    data-lightbox="image-1"
                    data-title="Caption"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                  <h4>Item Fourth</h4>
                  <span>Re-distribution not allowed</span>
                </figcaption>
              </figure>
            </div>

            <div className="isotope-item" data-type="nature">
              <figure className="snip1321">
                <img
                  src="../../src/assets/images/callaito.jpg"
                  alt="sq-sample26"
                />
                <figcaption>
                  <a
                    href="../../src/assets/images/callaito.jpg"
                    data-lightbox="image-1"
                    data-title="Caption"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                  <h4>Fifth Awesome</h4>
                  <span>Ut sollicitudin risus</span>
                </figcaption>
              </figure>
            </div>

            <div className="isotope-item" data-type="animals">
              <figure className="snip1321">
                <img
                  src="../../src/assets/images/callaito.jpg"
                  alt="sq-sample26"
                />
                <figcaption>
                  <a
                    href="../../src/assets/images/callaito.jpg"
                    data-lightbox="image-1"
                    data-title="Caption"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                  <h4>Awesome Sixth</h4>
                  <span>Donec eget massa ante</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="section contact-me" data-section="section4">
    <div className="container">
      <div className="section-heading">
        <h2>Contact Me</h2>
        <div className="line-dec"></div>
        <span>
          Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
          efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </span>
      </div>
      <div className="row">
        <div className="right-content">
          <div className="container">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your name..."
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Your email..."
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <input
                      name="subject"
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject..."
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      id="message"
                      placeholder="Your message..."
                      required=""
                    ></textarea>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">
                      Send Message
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Cuerpo = () => {
  return (
    <>
      <div>
        <AboutMeSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Cuerpo;
