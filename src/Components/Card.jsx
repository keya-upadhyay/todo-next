import React from "react";
import Link from "next/link";
const Card = ({ href, rate, count, category, price, title }) => {
  return (
    <div>
      <Link className="p-4 bg-zinc-900 block" href={href}>
        <h3 className="text-lg font-bold mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-1">Price: ${price}</p>
        <p className="text-sm text-gray-400 mb-1">Category: {category}</p>
        <p className="text-sm text-gray-400 mb-1">
          Rating: {rate} ({count} reviews)
        </p>
      </Link>
    </div>
  );
};

export default Card;
