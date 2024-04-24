import { useRouter } from 'next/router'
import React from 'react'

const products = ({ data }) => {
    const router = useRouter()

    return (
        <>
            {data?.map(el => (
                <div onClick={() => router.push(`/products/${el.id}`)}>
                    <div>
                        products:
                    </div>
                    <img src={el.image} width={200} height={200} />
                    <div>title: {el.title}</div>
                    <div>price: {el.price}</div>
                    <div>category: {el.category}</div>
                    <div>description: {el.description}</div>
                </div>
            ))}
        </>
    )
}

export default products

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()

    console.log('data', data)
    // Pass data to the page via props
    return { props: { data } }
}