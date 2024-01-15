import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/redwan-khan23/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="Icon" /></a>
                <a href="https://github.com/redwan528" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
            </div>
            <p>© 2024 Redwan Khan. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
