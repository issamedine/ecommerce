"use client"
import Link from 'next/link'
import React from 'react';
import navbar from './navbar.module.scss';
import { usePathname } from 'next/navigation';

function NavBar() {
  const pathname = usePathname()
  console.log("pathname", pathname)
  return (
    <div className={navbar.container}>
      <Link
        href="/products"
        className={`${pathname === '/products' ? navbar.active : ''}`}
      >All products</Link>
      <Link
        href="/category/electronics"
        className={`${pathname === '/category/electronics' ? navbar.active : ''}`}
      >electronics</Link>
      <Link
        href="/category/jewelery"
        className={`${pathname === '/category/jewelery' ? navbar.active : ''}`}
      >jewelery</Link>
      <Link
        href="/category/men's clothing"
        className={`${pathname === "/category/men's clothing" ? navbar.active : ''}`}
        >Men</Link>
      <Link 
        href="/category/women's clothing"
        className={`${pathname === "/category/women's clothing" ? navbar.active : ''}`}
      >Women</Link>
    </div>
  )
}

export default NavBar
