import { useCart } from "../hooks/useCart";
import { AddToCartIcon } from "./Icons";
import "./Products.css";
export function ListOfProducts({ items }) {
  const { cart, addToCart } = useCart();

  const checkProductInCart = (items) => {
    return cart.some((item) => item.id === items.id);
  };
  const findInCart = (itemID) => {
    const elementIndex = cart.findIndex((element) => element.id === itemID);
    return cart[elementIndex].quantity;
  };
  return (
    <main className="products">
      <ul>
        {items.map((item) => {
          const isProductInCart = checkProductInCart(item);
          return (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <div>
                <button onClick={() => addToCart(item)}>
                  <AddToCartIcon />
                </button>
                <div className="productInCart">
                  {isProductInCart ? "Qty: " + findInCart(item.id) : ""}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export function NoProducts() {
  <p>{"No se encontraron productos"}</p>;
}

export function Products({ items }) {
  const hasProducts = items?.length > 0;
  return hasProducts ? <ListOfProducts items={items} /> : <NoProducts />;
}
