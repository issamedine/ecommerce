
import React from 'react'

const getProduct = async(idProduct) => {
    const res = await fetch(`https://fakestoreapi.com/products/${idProduct}`)
    return res.json()
}

const product = async({ params }) => {

    const data = await getProduct(params.idProduct)

    return (
        <div>
            <img src={data.image} width={200} height={200} />
            <div>title: {data.title}</div>
            <div>category: {data.category}</div>
            <div>price: {data.price}</div>
        </div>
    )
}

export default product
