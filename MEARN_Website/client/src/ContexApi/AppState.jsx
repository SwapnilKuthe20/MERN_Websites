import React, { useEffect, useState } from 'react'
import AppContext from './AppContex'
import axios from 'axios'

const AppState = (props) => {
    const url = "http://localhost:1000";

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetchProduct();
    }, [])
    
    const fetchProduct = () => {
        axios.get(`${url}/api/product/allProducts`)
            .then((res) => {
                // console.log(res.data.products, "res");
                setProducts(res.data.products)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    console.log(products, "set");
    return (
        <AppContext.Provider value={{ products }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState
