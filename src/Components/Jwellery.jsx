"use client";
import React, { useEffect, useState } from "react";

import Card from "./Card";
import { getProductCategory } from "@/api";
const Jwellery = () => {
  const [jwelery, setJwelery] = useState(null);
  const [lowToHigh, setlowToHigh] = useState(null);

  function handleSort(e) {
    let sortBy = e.target.value;

    if (sortBy === "low_high") {
      let sorted = [...jwelery].sort((a, b) => a.price - b.price);
      setJwelery(sorted);
    } else if (sortBy === "high_low") {
      let sorted = [...jwelery].sort((a, b) => b.price - a.price);
      setJwelery(sorted);
    }
  }

  useEffect(() => {
    async function fetchData() {
      let getJwellery = await getProductCategory(`products/category/jewelery`);
      setJwelery(getJwellery);
      setlowToHigh(getJwellery);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold my-5 block">Jwellery</h2>
        <div className="pb-5">
          <div className="flex items-center justify-between">
            <select
              onChange={handleSort}
              className="bg-zinc-900 text-white py-2 px-4 rounded border-0 text-sm"
            >
              <option value="">Sort by Price</option>
              <option value="low_high">Price: Low to High</option>
              <option value="high_low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      {jwelery ? (
        <ul className="grid grid-cols-3 gap-5">
          {jwelery.map((item) => (
            <li key={item.id}>
              <Card
                className="p-4 bg-zinc-900 block"
                href={`products/${item.id}`}
                title={item.title}
                price={item.price}
                category={item.category}
                rate={item.rating.rate}
                count={item.rating.count}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Jwellery;
