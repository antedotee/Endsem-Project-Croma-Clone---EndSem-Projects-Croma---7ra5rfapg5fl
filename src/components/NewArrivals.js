import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../utils/api.js";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      const fetchedProducts = await fetchProductsByCategory("new arrival");
      setProducts(fetchedProducts);
    };

    fetchNewArrivals();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  return (
    <div className="my-8 text-center">
      <h2 className="text-2xl font-bold mb-4">New Arrival</h2>
      <div className="relative inline-block">
        <div className="flex overflow-x-auto space-x-4 justify-center">
          {products
            .slice(currentSlide * 5, (currentSlide + 1) * 5)
            .map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="flex-shrink-0 w-60 bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={product.displayImage}
                  alt={product.name}
                  className="w-full h-32 object-cover mb-2 rounded"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </Link>
            ))}
        </div>
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={{ marginLeft: "10px" }}
        >
          &lt;
        </button>
        <button
          onClick={handleNextSlide}
          disabled={(currentSlide + 1) * 5 >= products.length}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${
            (currentSlide + 1) * 5 >= products.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          style={{ marginRight: "10px" }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
