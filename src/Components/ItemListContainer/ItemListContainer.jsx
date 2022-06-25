import { useState, useEffect } from 'react'
import { getFetch } from '../../helpers/mock.js'
import ItemList from '../ItemList/ItemList'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({titulo}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {plataformasId} = useParams()
   
    
    useEffect(() => {
        if(plataformasId) {
            getFetch.then(prods => {
                setData(prods.filter(productos => productos.plataforma === plataformasId))
                setLoading(false)
            })
                .catch(err => console.log(`No se han cargado los productos: ${err}`))
        } else {
            getFetch.then(prods => {
                setData(prods)
                setLoading(false)
            })
                .catch(err => console.log(`No se han cargado los productos: ${err}`))
        }

    }, [plataformasId])

    return (

        <div>
            {
                loading ?
                    <div className="d-flex justify-content-center align-items-center mt-5">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Cargando...</span></Spinner>
                    </div>
                    :
                    <ItemList products={data} titulo={titulo} />

            }

        </div>
    )
}

export default ItemListContainer