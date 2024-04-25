import Link from 'next/link'
import React from 'react';

async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    return res.json();
}

const Products = async() => {

    const data = await getProducts();

    return (
        <>
            {data?.map(el => (
                <Link href={`/products/${el.id}`}>
                    <div>
                        products:
                    </div>
                    <img src={el.image} width={200} height={200} />
                    <div>title: {el.title}</div>
                    <div>price: {el.price}</div>
                    <div>category: {el.category}</div>
                    <div>description: {el.description}</div>
                </Link>
            ))}
        </>
    )
}

export default Products
