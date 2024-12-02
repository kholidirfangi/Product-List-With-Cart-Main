import CartList from './CartList';

/* eslint-disable react/prop-types */
const Cart = ({ cartItems, setQuantity, setCartItems, setIsConfirmOrder }) => {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    setIsConfirmOrder(true);
  };

  return (
    <div className="cart-container mt-5 md:mt-0 bg-white p-6 md:w-1/4 rounded-lg">
      <h2 className="text-red red-hat-text-extrabold text-2xl mb-6">
        Your Cart ({totalQuantity})
      </h2>

      {cartItems <= 0 ? (
        <div>
          <img
            src="./assets/images/illustration-empty-cart.svg"
            alt=""
            className="mx-auto"
          />
          <p className="text-center mt-3">Your added items will appear here</p>
        </div>
      ) : (
        <div>
          <CartList
            cartItems={cartItems}
            setQuantity={setQuantity}
            setCartItems={setCartItems}
          />
          <div className="flex justify-between bg-rose-100 rounded-md p-5 mt-8">
            <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
            <div>
              This is{' '}
              <span className="text-rose-900 red-hat-text-bold">
                a carbon-neutral
              </span>{' '}
              delivery
            </div>
          </div>
          <button
            onClick={handleConfirmOrder}
            className="bg-red text-rose-100 rounded-full p-3 w-full text-center mt-5 hover:bg-rose-900 transition-colors duration-300"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
