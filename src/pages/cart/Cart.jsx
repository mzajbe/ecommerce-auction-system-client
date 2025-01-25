// src/components/Cart.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cart items
  const fetchCartItems = () => {
    const token = Cookies.get("auth_token");
    axios
      .get("http://localhost:8000/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCartItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load cart items");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Handle payment
  const handlePayment = (cartId) => {
    const token = Cookies.get("auth_token");
    axios
      .post(
        `http://localhost:8000/api/cart/pay/${cartId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        alert("Payment successful!");
        fetchCartItems(); // Refresh cart items after payment
      })
      .catch((err) => {
        alert("Payment failed. Please try again.");
        console.error(err);
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-center mt-4">{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-bold text-lg">{item.auction.car_name}</h2>
                <p className="text-gray-500">Winning Price: ${item.price}</p>
                <p className="text-gray-500">
                  Status:{" "}
                  {item.paid ? (
                    <span className="text-green-500 font-bold">Paid</span>
                  ) : (
                    <span className="text-red-500 font-bold">Unpaid</span>
                  )}
                </p>
              </div>
              {!item.paid && (
                <button
                  onClick={() => handlePayment(item.id)}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Pay Now
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
