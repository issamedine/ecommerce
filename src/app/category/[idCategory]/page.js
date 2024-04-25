import Link from 'next/link'
import React from 'react';
import '../../products/products.scss'

const getCategory = async (idCategory) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${idCategory}`)
    return res.json()
}

const Category = async ({ params }) => {
    const data = await getCategory(params.idCategory);


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

export default Category
