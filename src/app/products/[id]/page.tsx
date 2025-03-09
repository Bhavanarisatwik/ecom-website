import Image from "next/image";
import { notFound } from "next/navigation";
import { Heart, Share2, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/product/add-to-cart-button";
import type { Product } from "@/types/product";
import { ProductDetails } from "./product-details";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);
  
  if (!product) {
    return {
      title: "Product Not Found - TechStore",
      description: "The requested product could not be found",
    };
  }
  
  return {
    title: `${product.name} - TechStore`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
} 