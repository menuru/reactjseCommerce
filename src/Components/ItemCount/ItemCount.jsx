import {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import './ItemCount.css'

const ItemCount = ({min, max,  data , onAdd}) => {
    const [count, setCount] = useState(min)
    const {addToCart} = useCartContext()
    
    function addCount(){
        if(count < max) {
                setCount(count + 1)
        }
    }

    function removeCount(){
        if(count > min){
                setCount(count - 1)
        }
    }

    function reset(){
        setCount(min)
    }

    function handleSubmit(){
        addToCart({
            quantity: count,
            product: data
        })
        onAdd(true)
        
    }


    return (
        <div className="d-flex justify-content-center">
            <Card bg="dark" text="light" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">Cantidad : {count}</Card.Title>
                    <div className="d-flex justify-content-center botones-contador">
                    <Button onClick={removeCount}>-</Button>
                    <Button onClick={reset}>Reset</Button>
                    <Button onClick={addCount}>+</Button>
                    </div> 
                    <div className="d-flex justify-content-center mt-3">
                    <Button onClick={handleSubmit} >Comprar</Button>
                    
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCount