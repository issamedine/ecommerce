"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import './cart.scss'

const Cart = async () => {
    const basket = useSelector(state => state.counter.basket)

    console.log("cart", basket)
    return (
        <div className="container-cart">
            {basket?.map(el => (
                <div className="item-wrapper">
                    <img src={el.image} width={50} height={50} />
                    <div className="content">
                        <div>{el.title}</div>
                        <div>{el.price} $</div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Cart
