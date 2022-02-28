import { useState, useEffect } from 'react';

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(product);
  });

  return <div>Product</div>;
}

export default Product;
