"use client"
import Link from 'next/link'
import React from 'react';
import './navbar.scss';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

function NavBar() {
  const basket = useSelector(state => state.counter.basket)
  const pathname = usePathname()

  return (
    <div className="container-navbar">
      <Link
        href="/products"
        className={`${pathname === '/products' ? 'active' : ''}`}
      >All products</Link>
      <Link
        href="/category/electronics"
        className={`${pathname === '/category/electronics' ? 'active' : ''}`}
      >electronics</Link>
      <Link
        href="/category/jewelery"
        className={`${pathname === '/category/jewelery' ? 'active' : ''}`}
      >jewelery</Link>
      <Link
        href="/category/men's clothing"
        className={`${pathname === "/category/men's clothing" ? 'active' : ''}`}
      >Men</Link>
      <Link
        href="/category/women's clothing"
        className={`${pathname === "/category/women's clothing" ? 'active' : ''}`}
      >Women</Link>

      <Link href="/cart">
        <div className="basket">cart {basket.length > 0 ? <div className="notification-count">{basket.length}</div> : null}</div>
      </Link>
    </div>
  )
}

export default NavBar
