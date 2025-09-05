import { useAppDispatch } from "../../hooks/hooks";
import { addToCart } from "../../redux/features/cart/cartSlice";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type Props = {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
};

// Modern, accessible ProductCard using Tailwind. Default export so it can be imported easily.
export default function ProductCard({
  product,
  onAddToCart,
  className = "",
}: Props) {
  const { title, price, description, category, image, rating } = product;
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    onAddToCart?.(product);
    dispatch(addToCart(product));
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  // simple star renderer (0..5)
  const stars = Array.from({ length: 5 }).map((_, i) => {
    const filled = i < Math.round(rating.rate);
    return (
      <svg
        key={i}
        className={`w-4 h-4 inline-block ${
          filled ? "text-yellow-400" : "text-gray-300"
        }`}
        viewBox="0 0 20 20"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        aria-hidden
      >
        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.8L10 15.9 4.8 18.7l1-5.8L1.5 8.6l5.9-.9L10 1.5z" />
      </svg>
    );
  });

  return (
    <article
      className={`max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200 ${className}`}
      aria-labelledby={`product-${product.id}-title`}
      role="group"
    >
      <div className="relative w-full h-56 bg-gray-50 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="object-contain max-h-full p-4 w-full"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded-full text-gray-700 shadow">
          {category}
        </span>
      </div>

      <div className="p-4">
        <h3
          id={`product-${product.id}-title`}
          className="text-sm font-semibold text-gray-900 leading-tight truncate"
        >
          {title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">{formattedPrice}</p>
          <div
            className="text-sm text-gray-500 flex items-center gap-2"
            title={`${rating.rate} out of 5 (${rating.count} reviews)`}
          >
            <span className="inline-flex items-center">{stars}</span>
            <span className="ml-1">{rating.rate.toFixed(1)}</span>
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-600 line-clamp-3">{description}</p>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label={`Add ${title} to cart`}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            Add
          </button>

          <button
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            className="ml-auto text-xs text-gray-500 hover:text-gray-700"
            aria-label="Copy product link"
            title="Copy current page link"
          >
            Share
          </button>
        </div>
      </div>
    </article>
  );
}
