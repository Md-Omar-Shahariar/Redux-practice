import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

// enable CORS for frontend requests
app.use(cors());

// sample product array (your q0 = 20 products)
const products = [
  {
    id: 1,
    title: "Fjallraven Backpack",
    price: 109.95,
    description: "Durable everyday backpack.",
    category: "Accessories",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 4.3, count: 120 },
  },
  {
    id: 2,
    title: "Elegant Wristwatch",
    price: 199.99,
    description: "Luxury men's wristwatch.",
    category: "Jewelry",
    image:
      "https://images.unsplash.com/photo-1581091215368-8c8929b3e0d2?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.7, count: 42 },
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: 89.99,
    description: "Noise-cancelling wireless headphones.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518449077480-79a9a23d99a7?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.5, count: 88 },
  },
  {
    id: 4,
    title: "Stylish Sneakers",
    price: 59.99,
    description: "Comfortable and trendy sneakers.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1600185368665-d32fc1a3f88f?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.1, count: 50 },
  },
  {
    id: 5,
    title: "Leather Wallet",
    price: 49.99,
    description: "Premium leather wallet.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1593032465170-4c42789e3ecb?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.6, count: 33 },
  },
  {
    id: 6,
    title: "Smartphone Stand",
    price: 15.99,
    description: "Adjustable desk smartphone stand.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1581091012184-92b182d24682?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.2, count: 70 },
  },
  {
    id: 7,
    title: "Fashionable Sunglasses",
    price: 75.0,
    description: "UV-protection stylish sunglasses.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1558980664-10b2e56c29b8?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.4, count: 21 },
  },
  {
    id: 8,
    title: "Coffee Mug",
    price: 12.99,
    description: "Ceramic coffee mug.",
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1565958011702-44b2f4b26b5d?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.0, count: 40 },
  },
  {
    id: 9,
    title: "Notebook",
    price: 9.99,
    description: "Spiral notebook for writing.",
    category: "Stationery",
    image:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.1, count: 60 },
  },
  {
    id: 10,
    title: "Desk Lamp",
    price: 29.99,
    description: "LED desk lamp with adjustable brightness.",
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1505691723518-41cb9b33c5f0?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.3, count: 25 },
  },
  {
    id: 11,
    title: "Wireless Mouse",
    price: 25.99,
    description: "Ergonomic wireless mouse.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b82b7a5?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.5, count: 45 },
  },
  {
    id: 12,
    title: "Stylish Backpack",
    price: 79.99,
    description: "Fashionable backpack for everyday use.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1593032473069-68d28fc6076d?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.6, count: 34 },
  },
  {
    id: 13,
    title: "Wireless Earbuds",
    price: 99.99,
    description: "Compact earbuds with excellent sound.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1580894894513-9ee1e5e3fa35?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.4, count: 52 },
  },
  {
    id: 14,
    title: "Men's Jacket",
    price: 120.0,
    description: "Warm and stylish jacket.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1602810319585-34b2f86a5f04?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.7, count: 19 },
  },
  {
    id: 15,
    title: "Travel Backpack",
    price: 89.0,
    description: "Lightweight backpack for travel.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1593032489903-76b1c4f6cf06?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.5, count: 22 },
  },
  {
    id: 16,
    title: "Desk Organizer",
    price: 39.99,
    description: "Keep your workspace organized.",
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1587829741301-1b7b3dca3d3f?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.2, count: 28 },
  },
  {
    id: 17,
    title: "Gold Necklace",
    price: 199.99,
    description: "Elegant jewelry for special occasions.",
    category: "Jewelry",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.8, count: 11 },
  },
  {
    id: 18,
    title: "Sports Shoes",
    price: 75.0,
    description: "Comfortable shoes for running and sports.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1600185368665-d32fc1a3f88f?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.3, count: 37 },
  },
  {
    id: 19,
    title: "Ballpoint Pen Set",
    price: 15.99,
    description: "Set of 10 smooth-writing pens.",
    category: "Stationery",
    image:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.1, count: 50 },
  },
  {
    id: 20,
    title: "Luxury Headphones",
    price: 250.0,
    description: "High-end headphones with immersive sound.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518449077480-79a9a23d99a7?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.9, count: 15 },
  },
];

// root route
app.get("/", (req, res) => {
  res.send("Product API is running 🚀");
});

// get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// get a single product by id
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
