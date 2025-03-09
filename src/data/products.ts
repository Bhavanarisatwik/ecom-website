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
    price: 799.99,
    image: "https://images.unsplash.com/photo-1593784991095-a205069533cd?auto=format&fit=crop&q=80",
    category: "TVs & Displays",
    description: "Experience stunning visuals with this 55-inch 4K Ultra HD Smart TV. Features HDR technology for vibrant colors and deep blacks.",
    features: [
      "55-inch 4K Ultra HD display",
      "Smart TV functionality with built-in streaming apps",
      "HDR technology for enhanced color and contrast",
      "Multiple HDMI and USB ports",
      "Voice control compatibility"
    ]
  },
  {
    id: "2",
    name: "Pro Wireless Headphones",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80",
    category: "Audio",
    description: "Premium wireless headphones with active noise cancellation, delivering immersive sound quality and all-day comfort.",
    features: [
      "Active noise cancellation",
      "40-hour battery life",
      "Premium audio drivers",
      "Comfortable over-ear design",
      "Built-in microphone for calls"
    ]
  },
  {
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
    name: "Smart Home Hub",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1558389186-438424b00a6b?auto=format&fit=crop&q=80",
    category: "Smart Home",
    description: "Central hub for controlling all your smart home devices with voice commands and automation features.",
    features: [
      "Compatible with major smart home ecosystems",
      "Voice control capability",
      "Automation scheduling",
      "Energy monitoring",
      "Intuitive smartphone app"
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