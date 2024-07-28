import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
const Details = () =>
{
    return(
        <>
        <Container id='details'>
            <br/><br/><br/>
            <br/>
            <br/>
        <Row >
        <Col md={1}>
        </Col>
        <Col>
          <Image src="https://i.pinimg.com/736x/6d/1e/bf/6d1ebf50b4a2c395dabbd4f8c1670c4b.jpg" roundedCircle style={{height:'350px'}} />
        </Col>
        <Col md={5}>
        <br/>
        <h2>About Me _____________________________________</h2><br/>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea, est ad, eius, accusantium deserunt libero delectus repudiandae at sed doloremque tempora velit ducimus quia nesciunt molestias nobis quas commodi. Explicabo sint a pariatur officiis quis porro inventore velit neque esse dolor. Culpa ratione, voluptatum in, quidem dolorum totam nihil animi, maxime ullam sequi et iusto assumenda eveniet fuga? Ea.
        </p><br/>
        <Button variant='primary'>Download Resume</Button>
        </Col>
        
      </Row>
        <br/><br/>
        <br/><br/>
        <hr/>
        </Container>
        </>
    )
}
export default Details;