import type { Product } from "../../types/globaltype";

export default function CartCard({
  quantity,
  product,
}: {
  quantity: number;
  product: Product;
}) {
  return (
    <div className="mt-2 text-sm font-medium text-gray-700">
      {product.title}
      Quantity in cart: {quantity}
    </div>
  );
}
