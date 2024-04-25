import Link from 'next/link'
import React from 'react';
import './products.scss'

async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    return res.json();
}

const Products = async () => {

    const data = await getProducts();

    return (
        <div className="container-products">
            {data?.map(el => (
                <Link
                    href={`/products/${el.id}`}
                    className="item"
                >
                    <div
                        className="image"
                        style={{ backgroundImage: `url('${el.image}')` }}
                    ></div>
                    <div className="item-main">
                        <div className="title">{el.title}</div>
                        <div>rating</div>
                        <div>reviews</div>
                        <div>{el.price} $</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Products
