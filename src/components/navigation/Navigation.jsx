import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">GOTY2023</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/nominees">Nominees</Nav.Link>
          <Nav.Link href="#features">My Prediction</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  )
}


