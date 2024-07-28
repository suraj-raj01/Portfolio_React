import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Skills = () =>{
    return(
        <>
        <br/>
        <hr/>
        <br/>
        <Container id='skills'>
            <br/>
        <center><h1>About My Skills</h1></center>
        <br/><br/>
        <br/>
            <Row>
            <Col md={1}>
            </Col>
                <Col md={4}>
                <h4>C++</h4>
                <ProgressBar animated now={80} style={{height:'10px'}}/><br/>
                <h4>JavaScript</h4>
                <ProgressBar animated now={75} style={{height:'10px'}}/><br/>
                <h4>Java</h4>
                <ProgressBar animated now={65} style={{height:'10px'}}/><br/>
                </Col>
                <Col md={2}>
                </Col>
                <Col md={4}>
                {/* <br/><br/>
                <br/><br/><br/>
                <h1>GitHub Link</h1>
                <Nav.Link href="https://github.com/suraj-raj01" id='link'><h3>Open GitHub For Code</h3></Nav.Link> */}
                <h4>HTML</h4>
                <ProgressBar animated now={90} style={{height:'10px'}}/><br/>
                <h4> CSS</h4>
                <ProgressBar animated now={75} style={{height:'10px'}}/><br/>
                <h4>React</h4>
                <ProgressBar animated now={65} style={{height:'10px'}}/><br/>
                </Col>
            </Row>
            <br/>
            <br/>
        </Container>
        </>
    )
}
export default Skills;