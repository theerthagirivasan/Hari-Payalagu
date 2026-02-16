import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

const Contact = () => {
  const sectionStyle = {
    padding: "60px 0",
    backgroundColor: "#f8f9fa"
  }

  return (
    <section id="contact" style={sectionStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center display-5 fw-bold mb-5">Get In Touch</h2>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="john@example.com" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="How can we help?" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Your message..." />
                  </Form.Group>
                  <Button variant="primary" size="lg" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact