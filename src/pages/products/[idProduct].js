import React from 'react'
import { useRouter } from 'next/router'

function product({data}) {
    const router = useRouter()
    return (
        <div>
            {router.query.idProduct}
            <img src={data.image} width={200} height={200} />
            <div>title: {data.title}</div>
            <div>category: {data.category}</div>
            <div>price: {data.price}</div>
        </div>
    )
}

export default product

export async function getServerSideProps(context) {
    // Fetch data from external API
    const { idProduct } = context.params;
    const res = await fetch(`https://fakestoreapi.com/products/${idProduct}`)
    const data = await res.json()

    console.log('data', data)
    // Pass data to the page via props
    return { props: { data } }
}