import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';


const About = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">About Me</h1>
          <p className="text-center">Hey there! I'm Sanjay, a passionate software developer driven by the art of crafting innovative solutions in the digital world. My journey into 
          the realm of coding began few when I was captivated by the sheer possibilities of transforming ideas into functional, user-centric software.</p>
          <hr />
        </Col>
      </Row>
      <Row className="my-5">
        <Col lg={6}>
          <h2>My Story</h2>
          <p>
          Hailing from Dhanbad, Jharkhand, my fascination with technology sparked when i was 12 years. I was always the curious kid, dismantling gadgets to understand their workings. 
          This curiosity propelled me towards computers and artificial intelligence, i delved into various programming languages and algorithms that laid the foundation for my career.
          </p>
          <p>
            <b>"Picture a world where lines of code orchestrate solutions and turn dreams into reality—that's where I thrive!"</b>
          </p>
        </Col>
        <Col lg={6}>
          <Image
            src="././about-nobg.png"
            alt="Our Team"
            className="rounded about-me-image text-center"
          />
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2>Passion & Interest</h2>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>What Drives Me</Card.Title>
                  <Card.Text>
                  What truly fuels my passion for software development is the potential to create meaningful solutions that address real-world challenges. I am committed to not 
                  only writing clean, efficient code but also ensuring that every product I develop resonates with users, making their lives easier and more enjoyable.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Beyond Coding</Card.Title>
                  <Card.Text>
                  When I'm not immersed in lines of code, you can find me reading and exploring things. Whether playing sports, exploring new tech tools or products, 
                  or reading books and articles about the things i like, I believe in a balanced life that nurtures both professional growth and personal interests.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  );
};

export default About;
