import Link from 'next/link'
import React from 'react'

const getCategory = async (idCategory) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${idCategory}`)
    return res.json()
}

const Category = async ({ params }) => {
    const data = await getCategory(params.idCategory);


    return (
        <div>
            {data?.map(el => <Link href={`/products/${el.id}`}>
                <img src={el.image} width={200} height={200} />
                <div>title: {el.title}</div>
                <div>title: {el.price}</div>
                <div>title: {el.price}</div>
            </Link>)}
        </div>
    )
}

export default Category
