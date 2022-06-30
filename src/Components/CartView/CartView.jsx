import {Container, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useCartContext } from '../../context/CartContext'
import CartTableContainer from '../CartTableContainer/CartTableContainer'

const CartView = () => {
  const {cartList} = useCartContext()
  
  
  return (
    <Container>
      {
        cartList.length === 0 ? 
        <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
          <h1 className='text-center'>Mi carrito</h1>
          <p className="text-center">Tu carrito está vacío...</p>
          <LinkContainer to="/">
            <Button className="btn btn-color">Volver al Inicio</Button>
          </LinkContainer>
        </div> :
           <div className="mt-5">
           <h1 className='text-center'>Mi carrito</h1>
           <CartTableContainer/>
          </div>
      }


      </Container>


  )
}

export default CartView