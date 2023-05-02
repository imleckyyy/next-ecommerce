export const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem("CC_SHOPPING_CART");
  if (!itemsFromLocalStorage) {
    return [];
  }

  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

interface CartItem {
  readonly id: string;
  readonly price: number;
  readonly title: string;
  readonly count: number;
}

export const setCartItemsInStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("CC_SHOPPING_CART", JSON.stringify(cartItems));
};
