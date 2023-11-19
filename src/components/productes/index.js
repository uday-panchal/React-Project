import React from "react";
import "./styles.css"
const Product = (props) => {
    return (
        <div className="product">
            <h2>{props.title}</h2>
            <p className="Price">${props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}
export default Product