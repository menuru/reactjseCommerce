import {useState} from 'react'
import { Table, Container, Alert, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
const ItemDetail = ({ data }) => {
  
  const [addedToCart, setAddedToCart] = useState(false)
  
  return (
    <div>
      <Container >

        <h1 className="text-center mb-5 mt-5">{data.name}</h1>


        <div className="detail-content d-flex flex-column align-items-center m-3">
          <div className="d-flex flex-column justify-content-center align-items-center mb-5 imagen">
            <img src={data.img} alt={data.name} />
          </div>

          <p className="informacion">U$S {data.price}
          <br></br>
          {data.genre}
          </p>
          <div className="d-flex flex-column">
            <Table className='mt-1' striped bordered hover variant="dark">
              <thead>
                <tr>
                  {/* <th>Juego: </th> */}
                  <th>Precio:</th>
                  <th>Genero:</th>
                  <th>Plataforma:</th>
                  <th>Estreno: </th>

                  

                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td>{data.name}</td> */}
                  <td>{data.price}</td>
                  <td>{data.genre}</td>
                  <td>{data.plataforma}</td>
                  <td>{data.estrenoinicial}</td>
                </tr>
              </tbody>
            </Table>
            <Alert className='page-color'>
              <p>{data.description}</p>
            </Alert>
            { addedToCart ? <>
              <Link className="btn btn-color" to="/carrito"><i class="fi fi-rr-shopping-cart"></i> Ir al Carrito </Link> 
            </>
              : 
                          
              <ItemCount data={data} onAdd={setAddedToCart}  max={9} min={1} />
            

            }
            
            <div className="d-flex justify-content-center mt-3">
              <LinkContainer to="/">
                              <Button className="m-2 boton-comprando">
                                  Continuar comprando
                              </Button>
              </LinkContainer>
            </div> 

          </div>

        </div>
        <div className="mb-5 mt-5 d-flex justify-content-center  align-items-center botones">
        </div>
      </Container>
    </div>
  )
}

export default ItemDetail