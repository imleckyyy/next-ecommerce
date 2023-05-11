import Link from "next/link";
import { useCartState } from "./CartContext";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export const CartBar = () => {
  const cartState = useCartState();

  return (
    <div className="flex items-center order-4 md:order-5">
      <Link href="/cart" className="p-2 group flex items-center">
        <span className="text-xs mr-1 font-bold">{cartState.items.length}</span>
        <ShoppingBagIcon className="w-6 h-6 md:mr-2 group-hover:stroke-gray-700" />
        <span className="hidden md:inline text-xs font-bold">12.54 PLN</span>
      </Link>
    </div>
  );
};
