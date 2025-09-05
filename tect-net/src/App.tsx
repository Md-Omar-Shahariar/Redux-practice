import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import ProductCard from "./components/card/ProductCard";
import CartCard from "./components/card/CartCard";

import { type Product } from "./types/globaltype";
import { useGetProductsQuery } from "./api/apiSlice";

function App() {
  const cartCount = useAppSelector((state) => state.cart.items);

  // const [products, setProducts] = useState<Product[] | []>([]);
  // useEffect(() => {
  //   fetch("http://localhost:5001/api/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const { data: products, error, isLoading } = useGetProductsQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center w-full gap-6">
        {/* <button
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
        </button> */}

        <div className="flex flex-wrap justify-center gap-4">
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {cartCount.length > 0 && (
            <div className="mt-2 text-sm font-medium text-gray-700 bg-amber-50 p-2 rounded-lg fixed top-4 right-4 w-80 max-h-[500px] overflow-y-auto shadow-lg">
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
