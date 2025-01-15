import React, { useContext } from 'react'
import AppContext from '../../ContexApi/AppContex'

const Showproduct = () => {
    const { products } = useContext(AppContext);

    console.log(products._id, "prod");


    return (
        <>
            {products?.map((product, index) => {
                const { category, title, price, imgSrc, _id, qty, description } = product

                return (
                    <div key={index}>
                        <h3>{title}</h3>
                        <p>{category}</p>
                        <p>{price}</p>
                        <p>{description}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Showproduct
