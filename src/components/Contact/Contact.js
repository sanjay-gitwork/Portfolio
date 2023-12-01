import React from 'react';
import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'; // Import icons as needed
import emailjs from 'emailjs-com';
import { useState } from 'react';


const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    emailjs.sendForm('service_kqrhg3d', 'template_3l8ruf6', e.target, 'x9g2Dqms0zHxMmZGs')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSubmitStatus('success');
        // Optionally, show a success message to the user
      }, (error) => {
        console.error('There was an error sending the email:', error.text);
        setSubmitStatus('failed');
        // Optionally, show an error message to the user
      });
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Get In Touch!!</h1>
          <p className="text-center">Welcome to my contact page! Whether you have questions, exciting opportunities, or simply want to say hello, I'm thrilled to hear from you. This is where ideas come to life, collaborations take shape, and projects flourish. Drop me a line below, and let's bring our visions together.</p>
          <hr />
        </Col>
      </Row>
      <Row className="my-5">
       
        <Col md={6} className="mb-4 mb-md-0">
            
        <Card className="p-4 ">
            <h2 className="mb-4">Let's Connect!</h2>
            <Form onSubmit={handleSubmit}>

              <Form.Group controlId="name">
                <Form.Label><b>Name</b></Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="mail">
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control type="email" name="mail" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label><b>Message</b></Form.Label>
                <Form.Control as="textarea" rows={4} name="message" placeholder="Enter your message" />
              </Form.Group>

              {submitStatus === 'success' && <p className="text-success"> <b>Email sent successfully!</b></p>}
              {submitStatus === 'failure' && <p className="text-danger"><b>Failed to send email. Please try again.</b></p>}
     
              <Button variant="dark" type="submit" className="rounded mt-3" >
                Submit
              </Button>
            </Form>
          </Card>

        </Col>
        <Col lg={6}>
            
          <Image
            src="././contact.jpg"
            alt="Our Team"
            className="rounded about-me-image text-center shadow"
          />
        </Col>
      </Row>

      {/* Bottom Section with Contact Information */}
      <Row className="text-center">
      {/* <h2>Let's Talk</h2> */}
        <Col md={4 } >
        
        <Card className="p-1 ">
            <Card.Body>
                <Card.Title><h4><HiOutlineMail size={30}/>Email</h4></Card.Title>
                <Card.Text>
                <p>contact@example.com</p>
                </Card.Text>
            </Card.Body>
        </Card>
          
        </Col>

        <Col md={4}>
            <Card className="p-1 ">
                <Card.Body>
                    <Card.Title><h4><HiOutlinePhone size={30} /> Phone</h4></Card.Title>
                    <Card.Text> <p>+91 7991148434</p></Card.Text>
                    </Card.Body>
            </Card>        
        </Col>


        <Col md={4}>
            <Card className="p-1">
                <Card.Body>
                    <Card.Title> <h4><HiOutlineLocationMarker size={30} /> Address</h4></Card.Title>
                    <Card.Text> <p>Dhanbad, Jharkhand, India</p></Card.Text>
                </Card.Body>
            </Card>   
        </Col>
      </Row>


      

    </Container>
  );
};

export default Contact;
