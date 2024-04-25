"use client";
import React from 'react';
import "./product.scss";
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '@/store/slice';

const getProduct = async (idProduct) => {
    const res = await fetch(`https://fakestoreapi.com/products/${idProduct}`)
    return res.json()
}

const product = async ({ params }) => {
    const dispatch = useDispatch();
    const data = await getProduct(params.idProduct);

    const handleAddToBasket = () => {
        dispatch(increment(data))
    }

    return (
        <div className="container-product">
            <div
                className="image"
                style={{ backgroundImage: `url('${data.image}')` }}
            ></div>
            <div className="right-side">
                <div className="header">
                    <div><span className="title">{data.title}</span> <span>{data.price} $</span></div>
                    <div>rating</div>
                </div>
                <div className="main">
                    <div className="title">Description:</div>
                    <div className="description">{data.description}</div>
                </div>
                <button onClick={() => handleAddToBasket()}>Add to cart</button>
            </div>
        </div>
    )
}

export default product
