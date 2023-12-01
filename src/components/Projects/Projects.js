import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Explore My Projects</h1>
          <p className="text-center">Take a visual tour through my portfolio—an eclectic mix of projects that capture imagination and innovation. 
          Each crafted with enthusiasm and a unique narrative that reflects my creative journey.</p>
          <hr />
        </Col>
      </Row>
      <Row className="my-5">
       <Col md={3} className="mt-4">
          <Card>
            <Card.Img variant="top" src="././images/projects/react-portfolio.png" />
            <Card.Body>
              <Card.Title>React portfolio Site</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">HTML, CSS, React & Bootstrap</Card.Subtitle>
              <Card.Text>
              Crafted a responsive personal portfolio displaying skills, projects, and achievements. Integrated contact details for a polished web presence.
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="dark" href="#project1">
                  <FaExternalLinkAlt className="me-2" />
                  View Project
                </Button>
                <Button variant="dark" href="#github_project1">
                  <FaGithub className="me-2" />
                  GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

       <Col md={3} className="mt-4">
          <Card>
            <Card.Img variant="top" src="././images/projects/react-calc.png" />
            <Card.Body>
              <Card.Title>Super Calculator</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">HTML, CSS, React & Bootstrap</Card.Subtitle>
              <Card.Text>
              Built a React web app featuring 20+ diverse calculators across categories like finance, health, and more for enhanced user utility.
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="dark" href="#project1">
                  <FaExternalLinkAlt className="me-2" />
                  View Project
                </Button>
                <Button variant="dark" href="#github_project1">
                  <FaGithub className="me-2" />
                  GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>


       <Col md={3} className="mt-4">
          <Card>
            <Card.Img variant="top" src="././images/images.png" />
            <Card.Body>
              <Card.Title>Amazon Sales Data Analysis</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Python & Jupyter Notebook</Card.Subtitle>
              <Card.Text>
              Analyzed sales data, extracting insights for strategic decision-making, leveraging data analysis techniques to drive business optimization
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="dark" href="#project1">
                  <FaExternalLinkAlt className="me-2" />
                  View Project
                </Button>
                <Button variant="dark" href="#github_project1">
                  <FaGithub className="me-2" />
                  GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>


       <Col md={3} className="mt-4">
          <Card>
            <Card.Img variant="top" src="././images/projects/angular-password-generator.png" />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">HTML, CSS, JavaScript & Angular</Card.Subtitle>
              <Card.Text>
              Crafted an Angular-powered password generator with customizable settings and encryption capabilities
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="dark" href="#project1">
                  <FaExternalLinkAlt className="me-2" />
                  View Project
                </Button>
                <Button variant="dark" href="https://github.com/sanjay-gitwork/Advance-Password-Generator">
                  <FaGithub className="me-2" />
                  GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>


        <Col md={3} className="mt-4">
          <Card>
            <Card.Img variant="top" src="././images/projects/angular-portfolio.png" />
            <Card.Body>
              <Card.Title>Angular Portfolio</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">HTML, CSS, JavaScript & Angular</Card.Subtitle>
              <Card.Text>
              Developed a responsive portfolio showcasing skills, projects, achievements, and contact details for a professional online presence.
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="dark" href="#project1">
                  <FaExternalLinkAlt className="me-2" />
                  View Project
                </Button>
                <Button variant="dark" href="https://github.com/sanjay-gitwork/MyPortfolio">
                  <FaGithub className="me-2" />
                  GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

       <Col md={3} className="mt-4">
          <Card className="">
            <Card.Img variant="top" src="././images/images.png" />
            <Card.Body>
              <Card.Title>PDS Transaction Analysis</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Python & Jupyter Notebook</Card.Subtitle>
              <Card.Text>
              Utilizing Python and visualization libraries, analyzed ration card transactions to extract insights on item quantities and trends in rice/wheat amounts.
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="dark" href="#project1">
                  <FaExternalLinkAlt className="me-2" />
                  View Project
                </Button>
                <Button variant="dark" href="https://github.com/sanjay-gitwork/PDS-Shop-Transactions-Analysis">
                  <FaGithub className="me-2" />
                  GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>



        {/* Add more columns for additional projects */}
      </Row>
      {/* Add more rows for additional projects */}
    </Container>
  );
};

export default Projects;
