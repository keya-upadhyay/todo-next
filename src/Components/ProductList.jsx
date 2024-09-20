import React, { useEffect, useState } from "react";

import Card from "./Card";
import { getProductCategory } from "@/api";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [filterProducts, setFilterdProducts] = useState([]);

  function SearchData(data) {
    let datas = products.filter((item) => item.title === data);
    setFilterdProducts(datas);
    console.log(datas);
  }

  useEffect(() => {
    async function getProduct() {
      let response = await getProductCategory(`products?limit=6`);
      setProducts(response);
    }
    getProduct();
  }, []);

  const numbers = [1, 2, 3, 4, 5, 6];
  const doubledNumbers = numbers.filter((number) => number * 2 === 0);
  console.log(doubledNumbers);

  const doubledNum = numbers.map((number) => number * 2);
  console.log(doubledNum);

  return (
    <div>
      <div>
        <input onChange={(e) => SearchData(e.target.value)} />
      </div>
      {products?.length > 0 ? (
        <ul className="grid grid-cols-3 gap-5">
          {products.map((item) => (
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
      {filterProducts?.length > 0 ? (
        <ul className="grid grid-cols-3 gap-5 bg-zinc-400 py-5">
          {filterProducts.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <div>No any match found</div>
      )}
    </div>
  );
};

export default ProductList;
