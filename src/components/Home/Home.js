import React from "react";
import { Button } from "react-bootstrap";



const Home = () => {



  return (
    <div className="container-fluid p-0">



      {/* Hero Section */}
      <section className="hero d-flex align-items-center">
        <div className="container text-center mt-5">
          <h1>Welcome to Sanjay's Portfolio</h1>
          <p className="mt-4">
            A passionate software developer creating innovative solutions.
          </p>

          <div className="mt-4 mb-5">
            <Button variant="dark" className="m-2 px-4 py-2" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </Button>
            <Button className="m-2 px-4 py-2" variant="outline-dark">Contact Me</Button>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2 className="mb-4">About Myself</h2>
              <p>
                Hi there! I'm Sanjay, a dedicated software developer with a passion for crafting efficient, user-friendly applications. I specialize in frontend development and thrive on exploring new technologies to expand my skill set.
              </p>

              <p>
                My focus is on creating visually compelling and intuitive user interfaces. I excel in collaborative environments, transforming concepts into reality through clean and maintainable code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">What I Like</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service-item text-center">
                <i className="bi bi-laptop fs-2 mb-3"></i>
                <h5>Software Development</h5>
                <p>Building responsive and interactive web applications.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item text-center">
                <i className="bi bi-palette fs-2 mb-3"></i>
                <h5>UI/UX Design</h5>
                <p>Creating intuitive and visually appealing user interfaces.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item text-center">
                <i className="bi bi-code-slash fs-2 mb-3"></i>
                <h5>Clean Code</h5>
                <p>Writing well-structured and maintainable code.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

   
  );
};

export default Home;
