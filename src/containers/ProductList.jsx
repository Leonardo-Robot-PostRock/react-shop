import React from "react";
import ProductItem from "@component/ProductItem";
import useGetProducts from "@hook/useGetProducts";
import "@styles/ProductList.scss";

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <div className="ProductList">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
