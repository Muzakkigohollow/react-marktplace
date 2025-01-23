import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"
import { addToCartProduct } from "../redux/productSlice"
import { rupiahFormat } from "../utils"

const CardProducts = ({ product }) => {
    const dispacth = useDispatch()
    return (
        <div className="col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={product?.product_image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product?.products_name}</h5>
                    <h6 className="card-title">Price: {rupiahFormat(product?.price)}</h6>
                    <p className="card-text">{product?.description}</p>
                    <p className="card-text">Stock: {product?.stock}</p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            dispacth(addToCart(product));
                            dispacth(addToCartProduct(product));
                        }}


                    >
                        Add To Chart</button>
                </div>
            </div>
        </div>
    )
}

export default CardProducts