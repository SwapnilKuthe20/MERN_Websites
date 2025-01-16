import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../ContexApi/AppContex';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ category }) => {

    const [relatedCategory, setRelatedCategory] = useState([]);

    const { products } = useContext(AppContext);

    useEffect(() => {
        setRelatedCategory(products?.filter((data) => data?.category.toLowerCase() === category?.toLowerCase()))
    }, [category, products])

    return (
        <div className='container text-center'>
            <h1 >Related Product</h1>

            <div className=" d-flex justify-content-center align-items-center ">
                <div className="row container">

                    {relatedCategory && relatedCategory?.length > 0 ? (
                        relatedCategory?.map((product) => {
                            const { category, title, price, imgSrc, _id, qty, description } = product;

                            return (
                                <div className="card bg-dark text-light text-center m-2 col-md-4 d-flex justify-content-center align-items-center " key={_id} style={{ width: "16rem" }}>
                                    <Link to={`/product/${product._id}`} className="d-flex justify-content-center align-items-center p-2">
                                        <img
                                            src={imgSrc}
                                            style={{ width: "200px", height: "200px", borderRadius: "10px", border: '2px solid yellow' }}
                                            className="card-img-top" alt={title || "Product"}
                                        />
                                    </Link >
                                    <div className="card-body p-1">
                                        <h5 className="card-title">{title}</h5>
                                        <div className="my-3">
                                            <button className="btn btn-primary mx-1">{`₹ ${price}`}</button>
                                            <button className="btn btn-warning">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No relatedCategory available</p>
                    )}
                </div>

            </div>
        </div>
    )
}

export default RelatedProduct
