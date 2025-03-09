export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ultra HD 4K Smart TV",
    price: 79999,
    image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=1000",
    category: "TVs",
    description: "55-inch 4K Ultra HD Smart LED TV with HDR and built-in streaming apps.",
    features: ["4K Resolution", "Smart TV Features", "HDR Support", "Voice Control"],
  },
  {
    id: "2",
    name: "Wireless Noise-Canceling Headphones",
    price: 24999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    category: "Audio",
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    features: ["Active Noise Cancellation", "30-Hour Battery", "Bluetooth 5.0", "Touch Controls"],
  },
  {
    id: "3",
    name: "Smart Home Hub",
    price: 14999,
    image: "https://images.unsplash.com/photo-1558002038-1055e2e89a5c?q=80&w=1000",
    category: "Smart Home",
    description: "Central smart home controller with voice assistant and home automation features.",
    features: ["Voice Control", "Home Automation", "Multi-Device Support", "Energy Monitoring"],
  },
  {
    id: "4",
    name: "Ultra-Slim Laptop Pro",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80",
    category: "Computers",
    description: "Powerful and portable laptop with a stunning display, fast processor, and all-day battery life.",
    features: [
      "Intel Core i7 processor",
      "16GB RAM and 512GB SSD",
      "14-inch Retina display",
      "Backlit keyboard",
      "Thunderbolt ports"
    ]
  },
  {
    id: "5",
    name: "Smart Watch Series 5",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80",
    category: "Wearables",
    description: "Advanced smartwatch with health monitoring, fitness tracking, and seamless smartphone integration.",
    features: [
      "Heart rate and ECG monitoring",
      "GPS tracking",
      "Water-resistant design",
      "Always-on Retina display",
      "5-day battery life"
    ]
  },
  {
    id: "6",
    name: "Professional DSLR Camera",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&q=80",
    category: "Cameras",
    description: "High-performance DSLR camera for professional photography with advanced features and exceptional image quality.",
    features: [
      "24.2 megapixel full-frame sensor",
      "4K video recording",
      "Advanced autofocus system",
      "Weather-sealed body",
      "Dual memory card slots"
    ]
  },
  {
    id: "7",
    name: "Wireless Gaming Mouse",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80",
    category: "Gaming",
    description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
    features: [
      "16,000 DPI optical sensor",
      "Programmable buttons",
      "RGB lighting effects",
      "70-hour battery life",
      "Lightweight ergonomic design"
    ]
  },
  {
    id: "8",
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80",
    category: "Audio",
    description: "Waterproof portable Bluetooth speaker with powerful sound and long battery life for outdoor adventures.",
    features: [
      "360° immersive sound",
      "IPX7 waterproof rating",
      "20-hour battery life",
      "Built-in microphone",
      "Durable drop-resistant design"
    ]
  }
]; 