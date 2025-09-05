import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import ProductCard from "./components/card/ProductCard";
import CartCard from "./components/card/CartCard";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const cartCount = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const products = [
    {
      id: 1,
      title: "Sample Product 1",
      price: 99.99,
      description: "This is a sample product.",
      category: "Sample Category",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.5, count: 10 },
    },
    {
      id: 2,
      title: "Sample Product 2",
      price: 89.99,
      description: "Another example product.",
      category: "Sample Category",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.2, count: 15 },
    },
    {
      id: 3,
      title: "Sample Product 3",
      price: 120.0,
      description: "High-quality sample product.",
      category: "Electronics",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.7, count: 8 },
    },
    {
      id: 4,
      title: "Sample Product 4",
      price: 59.99,
      description: "Budget-friendly product.",
      category: "Home",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.0, count: 25 },
    },
    {
      id: 5,
      title: "Sample Product 5",
      price: 149.99,
      description: "Premium quality sample.",
      category: "Fashion",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.9, count: 5 },
    },
    {
      id: 6,
      title: "Sample Product 6",
      price: 75.5,
      description: "Stylish and modern design.",
      category: "Accessories",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.1, count: 12 },
    },
    {
      id: 7,
      title: "Sample Product 7",
      price: 199.0,
      description: "Luxury example product.",
      category: "Jewelry",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.8, count: 7 },
    },
    {
      id: 8,
      title: "Sample Product 8",
      price: 45.0,
      description: "Affordable and reliable.",
      category: "Stationery",
      image: "https://via.placeholder.com/150",
      rating: { rate: 3.9, count: 30 },
    },
    {
      id: 9,
      title: "Sample Product 9",
      price: 250.0,
      description: "Best-selling premium product.",
      category: "Electronics",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.6, count: 18 },
    },
    {
      id: 10,
      title: "Sample Product 10",
      price: 33.99,
      description: "Compact and useful.",
      category: "Home",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.2, count: 22 },
    },
    {
      id: 11,
      title: "Sample Product 11",
      price: 80.0,
      description: "Stylish wearable product.",
      category: "Fashion",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.3, count: 16 },
    },
    {
      id: 12,
      title: "Sample Product 12",
      price: 55.5,
      description: "Durable and long-lasting.",
      category: "Home",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.1, count: 14 },
    },
    {
      id: 13,
      title: "Sample Product 13",
      price: 140.0,
      description: "Perfect for everyday use.",
      category: "Accessories",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.7, count: 11 },
    },
    {
      id: 14,
      title: "Sample Product 14",
      price: 210.0,
      description: "Top-tier quality.",
      category: "Electronics",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.8, count: 9 },
    },
    {
      id: 15,
      title: "Sample Product 15",
      price: 60.0,
      description: "Affordable fashion product.",
      category: "Fashion",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.0, count: 20 },
    },
    {
      id: 16,
      title: "Sample Product 16",
      price: 35.99,
      description: "Daily-use reliable product.",
      category: "Stationery",
      image: "https://via.placeholder.com/150",
      rating: { rate: 3.8, count: 33 },
    },
    {
      id: 17,
      title: "Sample Product 17",
      price: 99.0,
      description: "Stylish and lightweight.",
      category: "Accessories",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.5, count: 13 },
    },
    {
      id: 18,
      title: "Sample Product 18",
      price: 185.0,
      description: "Best choice for gifting.",
      category: "Jewelry",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.6, count: 6 },
    },
    {
      id: 19,
      title: "Sample Product 19",
      price: 42.5,
      description: "Compact, small, and useful.",
      category: "Stationery",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.0, count: 28 },
    },
    {
      id: 20,
      title: "Sample Product 20",
      price: 300.0,
      description: "Flagship premium product.",
      category: "Electronics",
      image: "https://via.placeholder.com/150",
      rating: { rate: 4.9, count: 12 },
    },
  ];

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center w-full gap-6">
        <button
          onClick={() => dispatch(increment())}
          className="btn  border-2 border-amber-200 p-2 rounded-2xl"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="btn  border-2 border-amber-200 p-2 rounded-2xl"
        >
          Increment by Amount
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
          className="btn border-2 border-amber-200 p-2 rounded-2xl"
        >
          Decrement
        </button>

        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {cartCount.length > 0 && (
            <div className="mt-2 text-sm font-medium text-gray-700 bg-amber-50 p-2 rounded-lg inline-block">
              {cartCount.map((item, index) => (
                <CartCard
                  key={index}
                  quantity={item.quantity}
                  product={item.product}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
