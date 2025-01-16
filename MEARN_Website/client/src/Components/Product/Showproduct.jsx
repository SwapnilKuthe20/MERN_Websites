import { useContext } from "react";
import AppContext from "../../ContexApi/AppContex";
import { Link } from "react-router-dom";

const Showproduct = () => {
    const { products, filterData } = useContext(AppContext);

    return (
        <div className=" d-flex justify-content-center align-items-center ">
            <div className="row container">

                {filterData && filterData?.length > 0 ? (
                    filterData?.map((product) => {
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
                    <p>No products available</p>
                )}
            </div>

        </div>
    );
};

export default Showproduct;
