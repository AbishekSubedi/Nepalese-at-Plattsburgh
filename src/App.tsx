import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "./images/logo.png";

// import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Your Logo"
            />
            Nepalese At Plattsburgh
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#content">Content</Nav.Link>
              <Nav.Link href="#photos">Photos</Nav.Link>
              <NavDropdown title="Events" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="upcomingevents">
                  Upcoming Events
                </NavDropdown.Item>
                <NavDropdown.Item href="pastevents">
                  Past Events
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
