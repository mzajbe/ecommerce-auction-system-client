import { useEffect, useState } from "react";
import axios from "axios";

const DemoProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching products.");
        console.log(error);

        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(products);
  

  return (
    <div className="py-4 px-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4">
            <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover mb-2"/>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-green-600">{product.description}</p>
            <p className="text-xl font-bold">${product.price}</p>
            <p className="text-red-600">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoProduct;
