import React from 'react'
import { useRouter } from 'next/router'

function Home({ data }) {
    const router = useRouter()

    return (
        <div>
            categories: {data.map(el => <span onClick={() => router.push(`/products/category/${el}`)}>{el}, </span>)}
        </div>

    )
}

export default Home

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/products/categories`)
    const data = await res.json()

    console.log('data', data)
    // Pass data to the page via props
    return { props: { data } }
}