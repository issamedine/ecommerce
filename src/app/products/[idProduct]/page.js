
import React from 'react';
import "./product.scss";

const getProduct = async (idProduct) => {
    const res = await fetch(`https://fakestoreapi.com/products/${idProduct}`)
    return res.json()
}

const product = async ({ params }) => {

    const data = await getProduct(params.idProduct)

    return (
        <div className="container-product">
            <div
                className="image"
                style={{ backgroundImage: `url('${data.image}')` }}
            ></div>
            <div className="right-side">
                <div className="header">
                    <div><span className="title">{data.title}</span> <span>{data.price}</span></div>
                    <div>rating</div>
                </div>
                <div className="main">
                    <div className="title">Description:</div>
                    <div className="description">{data.description}</div>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default product
