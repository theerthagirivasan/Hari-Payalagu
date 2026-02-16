import { Container, Row, Col, Button } from 'react-bootstrap'

const Home = () => {
  const heroStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "100px 0"
  }

  return (
    <section id="home" style={heroStyle}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="display-3 fw-bold mb-4">Build Better React Apps</h1>
            <p className="lead mb-4">
              Combine the power of React with the elegance of Bootstrap to create 
              stunning, responsive websites.
            </p>
            <Button variant="light" size="lg" className="me-3">Get Started</Button>
            <Button variant="outline-light" size="lg">Learn More</Button>
          </Col>
          <Col lg={6}>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" 
              alt="React and Bootstrap"
              className="img-fluid rounded-3 shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home