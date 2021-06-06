import React from "react";
import Item from "./Item";

const ItemList = ({ products, setproducts }) => {
  return (
    <>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-baseline flex-wrap pt-4 pb-12">
          {products.map((product) => {
            return (
              <Item key={product.id} item={product} setitem={setproducts} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ItemList;
