import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <Container>
                <br /><br /><hr /><br />
                <Row>
                    <Col md={3}></Col>
                    <Col md={6} style={{ textAlign: 'center', padding: '10px 0px' }}><h5>EVERYTHING IS RESERVED BY COPYRIGHT ©SURAJ~KUMAR</h5>
                        <p style={{ fontSize: '12px' }}>LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. SIT, ASPERIORES REPUDIANDAE! QUAERAT, FUGIAT REICIENDIS ALIAS EUM SIT ANIMI AUTEM MAIORES, NECESSITATIBUS ULLAM AD DOLORUM LABORE RATIONE EXPLICABO RECUSANDAE, OBCAECATI REPREHENDERIT!</p>
                    </Col>
                    <Col md={3}></Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={1}>
                        <a style={{ textDecoration: 'none', color: 'white',fontWeight:'400'}} href="#">Home</a><br />
                    </Col>
                    <Col md={1}>
                        <a style={{ textDecoration: 'none', color: 'white',fontWeight:'400'}} href="#contact">Contact</a><br />
                    </Col>
                    <Col md={1}>
                        <a style={{ textDecoration: 'none', color: 'white',fontWeight:'400'}} href="#">Services</a><br />
                    </Col>
                    <Col md={1}>
                        <a style={{ textDecoration: 'none', color: 'white',fontWeight:'400'}} href="#details">About</a><br />
                    </Col>
                    <Col md={4}></Col>
                    <br /><br />
                </Row>
                <Row>
                    <Col xs={5}></Col>
                    <Col xs={2} id='icons'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaGithub />
                    <FaLinkedin />
                    <FaTwitterSquare/>
                    </Col>
                    <Col xs={5}></Col>
                </Row>
                <br />
                <center>Copyright ©Suraj~Kumar. All Right Reserved</center>
                <br/>
            </Container>
        </>
    )
}
export default Footer;