import { createContext, useState } from "react";

// 1 crear el contexto
export const CartContext = createContext();
// 2 crear el provider
export function CartProvider({ children }) {
  // agregamos un estado para manejar los productos
  const [cart, setCart] = useState([]);

  // ahora agregamos las funcinonalidades que queremos
  const addToCart = (product) => {
    // veamos si el producto esta en el carro
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // producto no esta en el carro
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
