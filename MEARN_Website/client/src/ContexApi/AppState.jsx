import React, { useEffect, useState } from 'react'
import AppContext from './AppContex'
import axios from 'axios'
import { url } from '../Components/ConstantUrl/ContantUrl'


const AppState = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProduct();
    }, [])

    const fetchProduct = () => {
        axios.get(`${url}/api/product/allProducts`)
            .then((res) => {
                setProducts(res.data.products)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <AppContext.Provider value={{ products }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState
