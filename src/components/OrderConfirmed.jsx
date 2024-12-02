/* eslint-disable react/prop-types */
import CartList from './CartList';

const OrderConfirmed = ({
  cartItems,
  setQuantity,
  setCartItems,
  setIsConfirmOrder,
}) => {
  const handleStartNewOrder = () => {
    setIsConfirmOrder(false);
    setCartItems([]);
    setQuantity({});
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-5 w-96 max-w-screen-sm">
        <img src="./assets/images/icon-order-confirmed.svg" alt="" />
        <h1 className="text-4xl red-hat-text-extrabold text-rose-900 w-1/2 mt-5 mb-3">
          Order Confirmed
        </h1>
        <p className="text-rose-500 red-hat-text-bold">
          We hope you enjoy your food!
        </p>
        <div>
          <CartList
            cartItems={cartItems}
            setQuantity={setQuantity}
            setCartItems={setCartItems}
          />
        </div>
        <button
          onClick={handleStartNewOrder}
          className="bg-red w-full p-3 rounded-full text-rose-100 red-hat-text-red-hat-text-red-hat-text-bold mt-10 hover:bg-rose-900 transition-colors duration-300"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
