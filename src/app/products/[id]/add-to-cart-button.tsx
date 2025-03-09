"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Button size="lg" className="flex-1" onClick={handleAddToCart}>
      <ShoppingCart className="mr-2 h-5 w-5" />
      Add to Cart
    </Button>
  );
} 