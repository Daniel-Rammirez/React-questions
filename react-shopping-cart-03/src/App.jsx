import { Products } from "./components/Products";
import { useProducts } from "./hooks/useProducts";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const { items } = useProducts();

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(items);
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products items={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
