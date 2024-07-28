import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const Contact = () =>{
    return(
        <>
            <br/>
            <br/>
            <hr/>
            <br/>
         <Container id='contact'>
          <br/>
            <center><h1>Contact Us</h1></center>
            <br/>
         <Form id='form'>
         <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="number" placeholder="Enter contact" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <textarea placeholder='Comment?' name="" id="textarea" style={{width:'400px',height:'100px'}}></textarea>
      <p id='forgot'>forgot password</p>
      <Button variant="success">Submit </Button>{' '}
      <Button variant="primary" style={{padding:'6px 20px'}}> Clear </Button>{' '}
    </Form>
         </Container>
        </>
    )
}
export default Contact;