import { useCartState } from "@/components/Cart/CartContext";
import { TrashIcon } from "@heroicons/react/24/outline";

const CartContent = () => {
  const cartState = useCartState();
  return (
    <div className="col-span-2">
      <ul className="divide-y">
        {cartState.items.map((item, index) => (
          <li
            key={`${item.title}_${index}`}
            className="flex justify-between items-center py-4"
          >
            <span>{item.title}</span>
            <span>
              {item.count}
              {" x "}
              {item.price}
              {" PLN "}
              <button
                className="ml-4 text-red-500 text-sm"
                onClick={() => cartState.removeItemFromCart(item.id)}
              >
                <TrashIcon className="w-6 h-6" />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CartSummary = () => {
  const cartState = useCartState();
  return (
    <div>
      <div>Podsumowanie</div>
      <div>Produktów w koszyku: {cartState.items.length}</div>
    </div>
  );
};

const CartPage = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <CartContent />
      <CartSummary />
    </div>
  );
};

export default CartPage;
