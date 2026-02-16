import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#212529",
    color: "white",
    padding: "40px 0"
  }

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">ReactBootstrap</h5>
            <p className="text-white-50">
              Creating exceptional web experiences with React and Bootstrap.
            </p>
          </Col>
          <Col lg={2} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-white-50 text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#about" className="text-white-50 text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#contact" className="text-white-50 text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col lg={3} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Documentation</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Tutorials</a></li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5 className="fw-bold mb-3">Connect</h5>
            <p className="text-white-50 mb-2">contact@reactbootstrap.com</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white-50 fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white-50 fs-4"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
        </Row>
        <hr className="my-4 bg-secondary" />
        <Row>
          <Col className="text-center text-white-50">
            <small>&copy; {new Date().getFullYear()} ReactBootstrap. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer