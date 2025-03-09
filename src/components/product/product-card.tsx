"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps extends Product {}

export function ProductCard({ id, name, price, image, category, description, features }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ id, name, price, image, category, description, features });
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <Link href={`/products/${id}`} className="block h-60 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-gray-500">{category}</span>
          <span className="font-medium">{formatPrice(price)}</span>
        </div>
        <Link href={`/products/${id}`} className="block">
          <h3 className="mb-2 text-lg font-medium">{name}</h3>
        </Link>
        <Button
          className="w-full"
          size="sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
} 