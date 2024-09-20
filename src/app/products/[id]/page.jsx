"use client";
import React, { useEffect, useState } from "react";

const productDetail = ({ params }) => {
  const [productData, setProductData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id} `
    );
    const productDatas = await response.json();
    setProductData(productDatas);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Hello</h3>

      <div className="aspect-squre">
        <img src={productData.image} className="h-40 w-40" />
      </div>
      <p className="text-white">{productData.id}</p>
      <p className="text-white">{productData.title}</p>

      <div className="flex items-center justify-between">
        <span>{productData.rating?.rate}</span>
        <span>{productData.rating?.count}</span>
      </div>
    </div>
  );
};

export default productDetail;
