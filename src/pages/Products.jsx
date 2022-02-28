import { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(products);
  });

  return <div>Products</div>;
}

export default Products;
Products;
