import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import imgLogo from "../../img/pngLogo.png";
import { LinkContainer } from "react-router-bootstrap";
import { useCartContext } from "../../context/CartContext";
import "./NavBar.css";

const NavBar = () => {
  const { iconCart, cartList } = useCartContext();

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="todoLogo">
              <img className="logo" src={imgLogo} /> <span className="logoName">NOT A SIMPLE GAMER</span> 
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to={`plataforma/playstation`}>
                <Nav.Link className="nombre-plataforma">
                    <img className="img-plataforma" alt="ps" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTSAxMS4xODE2NDEgMy43NDIxODc1IEwgMTEuMTgxNjQxIDI0Ljg1NzQyMiBMIDE1Ljc2MTcxOSAyNi4yNTc4MTIgTCAxNS43NjE3MTkgOC41NzYxNzE5IEMgMTUuNzYxNzE5IDguMDY3MTcxOSAxNS43NjE2MjUgNy44MTM1OTM3IDE2LjAxNTYyNSA3LjU1ODU5MzggQyAxNi4xNDI2MjUgNy4zMDQ1OTM3IDE2LjM5NjM5MSA3LjMwNDY0MDYgMTYuNjUwMzkxIDcuNDMxNjQwNiBDIDE3LjI4NjM5MSA3LjY4NTY0MDYgMTcuNjY5OTIyIDguMTk0ODkwNiAxNy42Njk5MjIgOS4yMTI4OTA2IEwgMTcuNjY5OTIyIDE2LjIwNzAzMSBDIDE5LjE5NTkyMiAxNi45NzAwMzEgMjAuNDY2Mzc1IDE2Ljk3MDAzMSAyMS40ODQzNzUgMTYuMjA3MDMxIEMgMjIuNTAyMzc1IDE1LjQ0NDAzMSAyMy4wMTE3MTkgMTQuMzAwNTc4IDIzLjAxMTcxOSAxMi4zOTI1NzggQyAyMy4wMTI3MTkgMTAuMzU3NTc4IDIyLjYzMDIzNCA5LjA4NTM1OTQgMjEuNzQwMjM0IDguMDY4MzU5NCBDIDIwLjk3NzIzNCA3LjA1MDM1OTQgMTkuNTc4OTY5IDYuMTU5NDM3NSAxNy41NDI5NjkgNS41MjM0Mzc1IEMgMTQuOTk4OTY5IDQuNzYwNDM3NSAxMi44MzU2NDEgNC4xMjQxODc1IDExLjE4MTY0MSAzLjc0MjE4NzUgeiBNIDkuOTEwMTU2MiAxNi45NzI2NTYgTCA0LjA1ODU5MzggMTkuMDA3ODEyIEwgMy4xNjk5MjE5IDE5LjM4ODY3MiBDIDEuNzcwOTIxOSAyMC4wMjQ2NzIgMS4wMDc4MTI1IDIwLjY2MDg3NSAxLjAwNzgxMjUgMjEuMjk2ODc1IEMgMS4xMzQ4MTI1IDIyLjA1OTg3NSAxLjM4ODg3NSAyMy4wNzg4NDQgMy4yOTY4NzUgMjMuNzE0ODQ0IEMgNS4wNzc4NzUgMjQuMzUwODQ0IDYuNDc3MDYyNSAyNC42MDQ4OTEgMTAuMDM5MDYyIDIzLjU4Nzg5MSBMIDEwLjAzOTA2MiAyMS4yOTY4NzUgQyA2LjYwMzA2MjUgMjIuNDQwODc1IDYuMDk0OTM3NSAyMi4zMTQ1NDcgNS41ODU5Mzc1IDIyLjA2MDU0NyBDIDUuMDc2OTM3NSAyMS44MDY1NDcgNS4wNzYxMjUgMjEuNTUwODI4IDUuMjAzMTI1IDIxLjQyMzgyOCBDIDUuNTg1MTI1IDIxLjE2OTgyOCA2Ljk4NDM3NSAyMC42NjAxNTYgNi45ODQzNzUgMjAuNjYwMTU2IEwgOS45MTAxNTYyIDE5LjY0MjU3OCBMIDkuOTEwMTU2MiAxNi45NzI2NTYgeiBNIDIyLjg1MzUxNiAxNy45NjI4OTEgQyAyMi40NDAxMDkgMTcuOTQ4OTg0IDIyLjAyNjc4MSAxNy45NTY1MzEgMjEuNjEzMjgxIDE3Ljk4ODI4MSBDIDIwLjIxNDI4MSAxNy45ODgyODEgMTguOTQxMDYzIDE4LjI0MyAxNy40MTQwNjIgMTguNjI1IEwgMTcuNDE0MDYyIDIxLjI5Njg3NSBMIDIwLjIxMjg5MSAyMC4yNzczNDQgTCAyMS43MzgyODEgMTkuNzY5NTMxIEMgMjEuNzM4MjgxIDE5Ljc2OTUzMSAyMi4zNzU4MTIgMTkuNjQyNjI1IDIyLjc1NzgxMiAxOS41MTU2MjUgQyAyMy4zOTM4MTIgMTkuMzg4NjI1IDI0LjE1NjI1IDE5LjY0MjU3OCAyNC4xNTYyNSAxOS42NDI1NzggQyAyNC41MzgyNSAxOS42NDI1NzggMjQuNzkyOTY5IDE5Ljc2ODQzOCAyNC43OTI5NjkgMjAuMDIzNDM4IEMgMjQuOTE5OTY5IDIwLjI3NzQzOCAyNC42NjUyOTcgMjAuNDA2MTU2IDI0LjAyOTI5NyAyMC42NjAxNTYgTCAyMi42MzA4NTkgMjEuMTY5OTIyIEwgMTcuNTQyOTY5IDIzLjA3NjE3MiBMIDE3LjU0Mjk2OSAyNS43NDgwNDcgTCAxOS44MzIwMzEgMjQuOTg0Mzc1IEwgMjYuMTkxNDA2IDIyLjY5NTMxMiBMIDI2Ljk1NTA3OCAyMi4zMTI1IEMgMjguNDgxMDc4IDIxLjgwMzUgMjkuMTE3MjM0IDIxLjE2NzI5NyAyOC45OTAyMzQgMjAuNDA0Mjk3IEMgMjguOTkwMjM0IDE5LjY0MjI5NyAyOC4xMDAyMTkgMTkuMTM0IDI2LjU3NDIxOSAxOC42MjUgQyAyNS4zMzM3MTkgMTguMjQzMjUgMjQuMDkzNzM0IDE4LjAwNDYwOSAyMi44NTM1MTYgMTcuOTYyODkxIHoiPjwvcGF0aD48L3N2Zz4="/>
                   <span> | PlayStation</span>
                    </Nav.Link>
              </LinkContainer>
              <LinkContainer to={`plataforma/pc`}>
                <Nav.Link className="nombre-plataforma">
                    <img className="img-plataforma" src="https://img.icons8.com/material/96/000000/windows-client--v1.png" alt="" width='20px' height='20px' />
                    
                    <span> | PC</span>
                    
                    </Nav.Link>
              </LinkContainer>
              <LinkContainer to={`plataforma/xbox`}>
                <Nav.Link className="nombre-plataforma">
                <img className="img-plataforma" alt="xbox" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTSAxNSAzIEMgMTMuMDUxIDMgMTAuNjM1OTg0IDMuNjE4MTcxOSA4LjgzMzk4NDQgNC43MDExNzE5IEMgOC43MDM5ODQ0IDQuNzc3MTcxOSA4LjM0NzA2MjUgNS4wMjIxNDA2IDguMTY0MDYyNSA1LjI0NDE0MDYgTCA4LjE2NDA2MjUgNS4yNDYwOTM4IEMgOS44ODMwNjI1IDMuMzUwMDkzOCAxNC44OTMgNy4zNDg1OTM3IDE1IDcuNDMzNTkzOCBMIDE1IDcuNDM1NTQ2OSBDIDE1LjEwNyA3LjM1MDU0NjkgMjAuMTE2OTM4IDMuMzUyMDkzNyAyMS44MzU5MzggNS4yNDYwOTM4IEMgMjEuNjUxOTM3IDUuMDI0MDkzNyAyMS4yOTUwNjMgNC43ODAxMjUgMjEuMTY0MDYyIDQuNzAzMTI1IEMgMTkuMzYzMDYzIDMuNjIyMTI1IDE3LjI1NDk1MyAzIDE1LjAwMTk1MyAzIEwgMTUgMyB6IE0gNy40NDE0MDYyIDYuMTAzNTE1NiBDIDcuMDM2MzU5NCA2LjE2ODc2NTYgNi41ODMwNjI1IDYuNDI3MjAzMSA2LjE5NTMxMjUgNi44NDU3MDMxIEMgNC4yMTIzMTI1IDguOTg2NzAzMSAzIDExLjg1MDA0NyAzIDE0Ljk5ODA0NyBDIDMgMTguMTA2NTA3IDQuMTgyNjkzMyAyMC45MzU1MzMgNi4xMjEwOTM4IDIzLjA2NjQwNiBDIDUuNDg1MDkzNyAxOS45ODg0MDYgNi4wNjM3ODEyIDE3LjgxOTA0NyA3LjgwMDc4MTIgMTQuOTk4MDQ3IEMgOS41NDA3ODEzIDEyLjE3NDA0NyAxMi41OTk2MDkgOC45OTgwNDY5IDEyLjU5OTYwOSA4Ljk5ODA0NjkgQyAxMC4wNzU2MDkgNi42MTUwNDY5IDguMjgyMTcxOSA2LjE4ODUxNTYgNy44MjYxNzE5IDYuMTAzNTE1NiBDIDcuNzA2MTcxOSA2LjA4MTAxNTYgNy41NzY0MjE5IDYuMDgxNzY1NiA3LjQ0MTQwNjIgNi4xMDM1MTU2IHogTSA2LjEyMTA5MzggMjMuMDY2NDA2IEMgNi4xMjEwOTM4IDIzLjA2NjQwNiA2LjEyMTA5MzggMjMuMDY4MzU5IDYuMTIxMDkzOCAyMy4wNjgzNTkgTCA2LjEyMTA5MzggMjMuMDcwMzEyIEMgOC4zMTYwOTM4IDI1LjQ4MjMxMyAxMS40OTQ5NTMgMjcgMTUuMDAxOTUzIDI3IEMgMTguNTE4OTUzIDI3IDIxLjY4NDg1OSAyNS40ODUyMTkgMjMuODgwODU5IDIzLjA3NDIxOSBMIDIzLjg4MDg1OSAyMy4wNzIyNjYgQyAyNS44MTg4NTkgMjAuOTQwMjY2IDI3IDE4LjEwOSAyNyAxNSBDIDI3IDExLjg1MiAyNS43ODg2ODcgOC45ODk2NTYzIDIzLjgwNDY4OCA2Ljg0NzY1NjIgQyAyMy4yODc2ODggNi4yODk2NTYzIDIyLjY1MzgyOCA2LjAxNTQ2ODcgMjIuMTczODI4IDYuMTA1NDY4OCBDIDIxLjcxODgyOCA2LjE5MTQ2ODggMTkuOTI0MzkxIDYuNjE4IDE3LjQwMDM5MSA5IEMgMTcuNDAwMzkxIDkgMjAuNDU5MjE5IDEyLjE3NiAyMi4xOTkyMTkgMTUgQyAyMy45MzUyMTkgMTcuODIyIDI0LjUxNDkwNiAxOS45OTAzNTkgMjMuODc4OTA2IDIzLjA2ODM1OSBDIDIzLjg3MjkwNiAyMy4wMzMzNTkgMjMuNjI5NjcyIDIxLjQ1Mzc1IDIyLjAxMzY3MiAxOS4yMTg3NSBDIDIwLjc1MDY3MiAxNy40NzU3NSAxNyAxMy4zMDAzOTEgMTUgMTEuNDAwMzkxIEMgMTMgMTMuMzAwMzkxIDkuMjQ5MzI4MSAxNy40NzE3OTcgNy45ODYzMjgxIDE5LjIxNjc5NyBDIDYuMzcwMzI4MSAyMS40NDk3OTcgNi4xMjcwOTM3IDIzLjAzMDQwNiA2LjEyMTA5MzggMjMuMDY2NDA2IHoiPjwvcGF0aD48L3N2Zz4="/>
                    <span> | XBOX</span>
                    
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/carrito">
                <Button className="carrito-btn" variant="dark">
                  Tu carrito{" "}
                  <Badge bg="primary">
                    {cartList.length === 0 ? 0 : iconCart()}
                  </Badge>
                </Button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
