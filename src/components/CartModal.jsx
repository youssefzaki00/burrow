import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
function CartModal({ isCartOpen, toggleCart }) {
  const { cart, removeFromCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let temp = 0;
    if (cart.length > 0) {
      cart?.map((product) => {
        temp += product.price;
      });
      setTotal(temp);
    }
  }, [cart]);

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleCart}
          ></div>
          <div className="ml-auto bg-white w-full lg:w-1/3 h-full shadow-lg z-50 overflow-y-scroll">
            <div className="p-4 text-[#383633]">
              <h2 className="text-2xl font-semibold flex items-end gap-6">
                Cart
                <p className="text-base font-normal">{cart?.length} items</p>
              </h2>

              <button
                className="absolute top-4 right-8 text-2xl"
                onClick={toggleCart}
              >
                X
              </button>
              <div className="mt-6 flex flex-col gap-4">
                {cart?.map((product) => (
                  <div key={product.id} className="flex items-center gap-6">
                    <div className="group bg-gray-100 rounded p-4 flex  items-center shadow-sm cursor-pointer relative">
                      <img
                        src={product?.image}
                        alt={product?.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="text-left mt-2 text-sm w-full">
                      <h3>{product?.title}</h3>
                      <div className="flex justify-between ">
                        <h4 className=" text-gray-700">${product?.price}</h4>
                        <button
                          onClick={() => removeFromCart(product)}
                          className="text-gray-500 text-xs underline "
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <p>Subtotal:</p>
                <p>${total}</p>
              </div>
              <div className="flex justify-between mt-2 ">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between mt-2 ">
                <p>Total:</p>
                <p className="font-bold">${total}</p>
              </div>
              <button className="bg-yellow-400 w-3/4 rounded mt-4 text-2xl hover:shadow active:shadow-inner p-4 text-white text-center uppercase">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartModal;
