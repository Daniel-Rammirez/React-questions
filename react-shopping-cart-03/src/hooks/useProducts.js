import products from "../mocks/products.json";

export function useProducts() {
  const items = products.products;

  return { items };
}
