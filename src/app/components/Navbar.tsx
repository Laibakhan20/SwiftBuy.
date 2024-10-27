"use client";

import { MenuIcon, ShoppingBagIcon } from 'lucide-react'
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart';



function Navbar() {  
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <div ><div className="navbar bg-mywhite shadow-md " >
    <div className="navbar-start mx-auto lg:px-5 lg:py-3 lg:max-w-7xl lg:ml-5">
      <div className="dropdown relative">
        <div tabIndex={0} role="button" className="text-2xl btn btn-ghost lg:hidden">
          <MenuIcon/>
        </div>
        <ul
          tabIndex={0}
          className=" menu menu-sm dropdown-content bg-mywhite rounded-box font-semibold z-50 mt-3 w-52 p-2 shadow ">
          <li><Link href={"/"} >Home</Link></li>
          <li>
            <Link href={"/Category"}>Categories</Link>
            <ul className="p-2">
              <li><Link href={"/Category/Men"}>Men</Link></li>
              <li><Link href={"/Category/Women"}>Women</Link></li>
              <li><Link href={"/Category/Teens"}>Teens</Link></li>

            </ul>
          </li>
  
          <li><Link href={"/About"}>About</Link></li>
          <li><Link href={"/Contact"} >Contact</Link></li>
        </ul>
      </div>
      <Link href={"#"} className=" text-3xl font-bold lg:block hidden">SwiftBuy.</Link>
    </div>
    <div className="navbar-center ">
    <Link href={"#"} className=" text-xl font-bold lg:hidden block">SwiftBuy.</Link>

        <div className="hidden lg:flex">

        
      <ul className="menu menu-horizontal px-1 font-semibold">
        <li><Link href={"/"}>Home</Link></li>
        <li>
          <details>
            <summary>Categories</summary>
            <ul className="p-2 dropdown-content z-50">
              <li><Link href={"/Category/Men"}>Men</Link></li>
              <li><Link href={"/Category/Women"}>Women</Link></li>
              <li><Link href={"/Category/Teens"}>Teens</Link></li>

            </ul>
          </details>
        </li>
 
        <li><Link href={"/About"}>About</Link></li>
        <li><Link href={"/Contact"} >Contact</Link></li>

      </ul>
      </div>
    </div>
    {/* Cart Icon */}
    <div className="navbar-end mx-auto lg:px-7 lg:py-3 lg:max-w-7xl">
          <div
            tabIndex={0}
            role="button"
            className="pr-4 cursor-pointer group relative"
            onClick={() => {
              console.log("Cart icon clicked");
              handleCartClick();
          }}

          >
            <div className="indicator">
              <ShoppingBagIcon className="h-7 w-7 group-hover:text-gray-400 duration-300" />
              {(cartCount ?? 0) > 0 && ( // Use `cartCount ?? 0` to default to 0 if undefined
            <span className="badge badge-sm font-semibold indicator-item text-myBlack group-hover:text-mywhite group-hover:bg-myBlack">
              {cartCount ?? 0} {/* Display cart count with fallback */}
            </span>
             )}
            </div>
          </div>

         
        </div>
      </div>
    </div>
  )
}


export default Navbar;











 


{/* <div className="indicator">
              <ShoppingBagIcon className="h-7 w-7 group-hover:text-gray-400 duration-300" />
              <span className="badge badge-sm font-semibold indicator-item text-myBlack group-hover:text-mywhite group-hover:bg-myBlack">8</span>
            </div> */}