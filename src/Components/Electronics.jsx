import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getProductCategory } from "@/api";

const Electronics = () => {
  const [electronics, setElectronics] = useState(null);

  useEffect(() => {
    async function getElectricProduts() {
      let response = getProductCategory(`products/category/electronics`);
      setElectronics(response);
    }
    getElectricProduts();
  }, []);

  return (
    <div>
      <div>
        {electronics?.length > 0 ? (
          <ul className="grid grid-cols-3 gap-5">
            {electronics.map((item) => (
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
    </div>
  );
};

export default Electronics;
