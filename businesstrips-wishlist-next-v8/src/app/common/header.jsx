import React from "react";
import  Link from "next/link";
import Image from "next/image";
import "server-only";
const activeStyle = {
  color: "purple",
};

export default function Header() {
  return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image height={78} width={78} src="/images/logo.png" alt="Site Logo"/>
          </Link>

        <div className="navbar-nav">

            <Link href={"/trips"}>
               <div className="nav-link">Trips</div>
            </Link>



            <Link href={"/wishlist"}>
              <div className="nav-link">Wishes</div>
            </Link>
        </div>
        </div>
      </nav>

)
  ;
}
