import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { url } from '../ConstantUrl/ContantUrl';
import axios from 'axios';
import RelatedProduct from './RelatedProduct';

const ProductDetail = () => {
    const [productDetail, setProductDeatail] = useState();

    const { id } = useParams();

    useEffect(() => {
        fetchProductDetails();
    }, [id])

    const fetchProductDetails = async () => {
        const details = await axios.get(`${url}/api/product/${id}`)
        setProductDeatail(details?.data?.product)
    }

    return (
        <>
            <div className='container text-center d-flex align-items-center justify-content-around my-3'>
                <div className='left'>
                    <img
                        src={productDetail?.imgSrc}
                        alt="productDetails"
                        width={250}
                        height={250}
                        className='border border-3 border-warning rounded-5'
                    />
                </div>
                <div className='right'>
                    <h2>{productDetail?.title}</h2>
                    <p>{productDetail?.description}</p>
                    <p className='fw-bold'>{`₹ ${productDetail?.price}`}</p>
                    <div>
                        <button className='btn btn-warning mx-2 my-3 fw-bold'>Add to cart</button>
                        <button className='btn btn-danger fw-bold'>Buy Now</button>
                    </div>
                </div>
            </div>

            <RelatedProduct category={productDetail?.category} />
        </>

    )
}

export default ProductDetail
