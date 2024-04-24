'use client';
import React from 'react'
import { useRouter } from 'next/router'

function category({ data }) {
  const router = useRouter()

  return (
    <div>
      <div>{data.map(el => <div onClick={() => router.push(`/products/${el.id}`)}>
        <img src={el.image} width={200} height={200} />
        <div>title: {el.title}</div>
        <div>title: {el.price}</div>
        <div>title: {el.price}</div>
      </div>)}</div>
    </div>
  )
}

export default category;

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { category } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  const data = await res.json()

  console.log('data', data)
  // Pass data to the page via props
  return { props: { data } }
}