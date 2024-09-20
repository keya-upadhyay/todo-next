"use client";
import ProductList from "@/Components/ProductList";
import Jwellery from "@/Components/Jwellery";
import React, { useEffect, useState } from "react";
import Electronics from "@/Components/Electronics";

const page = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-5">Listing</h2>
      <ProductList />
      <Jwellery />
      <h2 className="text-2xl font-bold my-5 block">Electronics</h2>
      <Electronics />
    </div>
  );
};

export default page;
