import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/api";
import Navbar from "./Navbar";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      const productDetails = await fetchProductById(productId);
      setProduct(productDetails);
    };

    getProductDetails();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={product.displayImage}
              alt={product.name}
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-semibold mb-4">${product.price}</p>
            {/* Features */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-xl font-bold mb-2">Features</h3>
              <ul className="list-disc list-inside">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
