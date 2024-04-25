import Link from 'next/link'
import React from 'react'

function NavBar() {
  
  return (
    <div>
      <Link href="/products">All products</Link>
      <Link href="/category/electronics">electronics</Link>
      <Link href="/category/jewelery">jewelery</Link>
      <Link href="/category/men's clothing">men's clothing</Link>
      <Link href="/category/women's clothing">women's clothing</Link>
    </div>
  )
}

export default NavBar
