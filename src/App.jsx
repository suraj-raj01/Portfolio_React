import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';
import Pagination from 'react-bootstrap/Pagination';

const now = 60
const react = 50
const java = 70
const App = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" style={{ marginLeft: "100px", fontWeight: 'bold', color: 'skyblue' }}>Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '300px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ fontWeight: 'bold' }}>Home</Nav.Link>
              <Nav.Link href="#action2" style={{ fontWeight: 'bold' }}>About</Nav.Link>
              <Nav.Link href="#" style={{ fontWeight: 'bold' }}>Contact</Nav.Link>
              <Nav.Link href="#" style={{ fontWeight: 'bold' }}>Services</Nav.Link>
            </Nav>
            
            <Form className="d-flex" style={{ fontWeight: 'bold' }}>
              <Form.Control
                type="search"
                style={{ border: '1px solid aqua' }}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img src='https://th.bing.com/th/id/R.bcb5033df81b89dc8b1d4faa6a3d9d70?rik=QTozvQl9BcNfjw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f3%2f9%2fe%2f490037.jpg&ehk=mMmpYEBZr40cUNUWhwIBZiSMhaYiQFEGe156rOdLlOA%3d&risl=&pid=ImgRaw&r=0' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption >
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://thumbs.dreamstime.com/b/open-notebook-textural-brown-desk-modern-office-next-to-cup-black-coffee-freelancer-needs-workstation-accessories-56150522.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://coolwallpapers.me/picsup/5525222-table-wallpapers.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption style={{color:'black'}}>
            <h4>Third slide label</h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <center><h1>About My Projects</h1></center>
      <br />
      <Container>
        <Row md={4}>
          <Col><Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
            <img src='https://thumbs.dreamstime.com/b/development-poster-icons-set-outline-web-pattern-seo-website-banners-apps-simple-background-flat-style-vector-113776857.jpg' />
            <Card.Body>
              <Card.Title>C++ Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
            <img src='https://st.depositphotos.com/1745098/4654/i/450/depositphotos_46543239-stock-photo-business-development-word-cloud.jpg' />
            <Card.Body>
              <Card.Title>React Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
            <img src='https://st.depositphotos.com/1745098/4654/i/450/depositphotos_46543239-stock-photo-business-development-word-cloud.jpg' />
            <Card.Body>
              <Card.Title>Java Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
            <img src='https://thumbs.dreamstime.com/b/development-poster-icons-set-outline-web-pattern-seo-website-banners-apps-simple-background-flat-style-vector-113776857.jpg' />
            <Card.Body>
              <Card.Title>Frontend Developer</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>
        </Row>
      </Container>
      <br />
      <hr />
      <Container>
        <h1>ABOUT MY SKILLS</h1>
        <br />
        <h4>CPP PROGRAMMING</h4>
        <ProgressBar style={{ width: "50%", height: "15px", backgroundColor: "lightblue" }} now={now} label={`${now}%`} />
        <br />
        <h4>JAVA PROGRAMMING</h4>
        <ProgressBar style={{ width: "50%", height: "15px", backgroundColor: "lightblue" }} now={java} label={`${java}%`} />
        <br />
        <h4>REACT DEVELOPMENT</h4>
        <ProgressBar style={{ width: "50%", height: "15px", backgroundColor: "lightblue" }} now={react} label={`${react}%`} />
        <br />
        <h4>JS DEVELOPMENT</h4>
        <ProgressBar style={{ width: "50%", height: "15px", backgroundColor: "lightblue" }} now={now} label={`${now}%`} />
        <br />
      </Container>
      <br />
      <hr />
      <br />
      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About Me</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>About My Skills</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <br />
      <center><h2>Comment Here</h2>
      </center>
      <Container style={{ width: '90%' ,padding:'10px', borderRadius:'10px'}}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="abcd@123" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write Comment</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="comment?" />
          </Form.Group>
        </Form>
        <Button variant="info">Submit</Button>{' '}
        <Button variant="danger">clear</Button>{' '}
      </Container>
      <br />
      <Container>
        <Row md={4}>
          <Col><Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
            <img src='https://thumbs.dreamstime.com/b/development-poster-icons-set-outline-web-pattern-seo-website-banners-apps-simple-background-flat-style-vector-113776857.jpg' />
            <Card.Body>
              <Card.Title>C++ Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
            <img src='https://st.depositphotos.com/1745098/4654/i/450/depositphotos_46543239-stock-photo-business-development-word-cloud.jpg' />
            <Card.Body>
              <Card.Title>React Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
            <img src='https://st.depositphotos.com/1745098/4654/i/450/depositphotos_46543239-stock-photo-business-development-word-cloud.jpg' />
            <Card.Body>
              <Card.Title>Java Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
            <img src='https://thumbs.dreamstime.com/b/development-poster-icons-set-outline-web-pattern-seo-website-banners-apps-simple-background-flat-style-vector-113776857.jpg' />
            <Card.Body>
              <Card.Title>Frontend Developer</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>
        </Row>
      </Container>
      <br/>
      <hr/>
      <br/>
      <center><h1>Here Are My Achievement Cirtificates</h1></center>
      <br/>
      <Container style={{objectFit:'cover',width:'80%'}}>
      <Carousel>
        <Carousel.Item>
          <img src='public/Images/a.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption >
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/b.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/c.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/d.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/e.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/f.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/g.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/h.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/i.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/j.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/k.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/l.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/m.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/n.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/o.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/p.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/q.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='public/Images/r.jpg' style={{ height: '650px', width: '100%' }} />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
      <br/>
      <hr/>
      <br/>
      <Container style={{display:'flex', alignItems:'center',justifyContent:'space-evenly'}}>
      <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
      </Container>
      <br/>
    </>
  )
}
export default App;