import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <nav className="navbar py-2 flex items-center space-x-12">
        <div className="pr-4 flex-none">
          <Link
            href="/"
            className="logo bg-zinc-700 py-2.5 inline-block text-zinc-400 "
          >
            NA
          </Link>
        </div>
        <ul>
          <li>
            <Link className="text-white hover:text-orange-600" href="/todo">
              List
            </Link>
            <Link className="text-white hover:text-orange-600" href="/products">
              Products
            </Link>
            <Link className="text-white hover:text-orange-600" href="/user">
              user
            </Link>
            <Link className="text-white hover:text-orange-600" href="/calc">
              Calc
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default page;
