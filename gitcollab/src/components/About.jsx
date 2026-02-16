import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const About = () => {
  const sectionStyle = {
    padding: "60px 0"
  }

  return (
    <section id="about" style={sectionStyle}>
      <Container>
        <h2 className="text-center display-5 fw-bold mb-5">Why Choose Us</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div className="display-1 text-primary mb-3">⚛️</div>
              <Card.Title className="fw-bold mb-3">React Powered</Card.Title>
              <Card.Text>
                Leverage the full potential of React components for dynamic, 
                fast-loading interfaces.
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div className="display-1 text-primary mb-3">🎨</div>
              <Card.Title className="fw-bold mb-3">Bootstrap Styled</Card.Title>
              <Card.Text>
                Beautiful, responsive designs with Bootstrap's powerful grid 
                and component system.
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div className="display-1 text-primary mb-3">🚀</div>
              <Card.Title className="fw-bold mb-3">Best Practices</Card.Title>
              <Card.Text>
                Clean code, component architecture, and modern development 
                patterns.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;