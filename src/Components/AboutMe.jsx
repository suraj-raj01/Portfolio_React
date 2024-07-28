import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const AboutMe = () =>{
    return(
        <>
        <Container id='home'>
            <br/><br/><br/>
            <br/><br/>
        <Row >
        <Col md={1}>
        </Col>
        <Col md={7}>
        <br/>
        <h1>HELLO 👋</h1>
        <h1>IT'S SURAJ KUMAR</h1>
        <p>I'm an Engineering Student, Pursuing B.Tech with CSE Stream <br/> From RNTU (Rabindra Nath Tagore University Bhopal (MP)).</p>
        <p>Currently I'm Preparing for Full stack Development with Java</p><br/>
        <Button variant="primary">More About Me</Button>{'  '}
        <Button variant='success'>Download Resume</Button><br/><br/>   
        <div id='icon'>
        <FaFacebook />
                    <FaInstagram />
                    <FaGithub />
                    <FaLinkedin />
          </div>   
        </Col>
        <Col>
          <Image src="https://th.bing.com/th/id/OIP.Hy00K3cd3VHI1LCJCYDimAAAAA?rs=1&pid=ImgDetMain" roundedCircle style={{height:'350px'}} />
        </Col>
      </Row>
        <br/><br/>
        </Container>
        </>
    )
}
export default AboutMe;