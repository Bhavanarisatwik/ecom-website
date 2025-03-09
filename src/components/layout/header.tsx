"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-black">TechStore</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Products
          </Link>
          <Link href="/categories" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Categories
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative text-gray-700 hover:text-black transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-white border-t">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Products
            </Link>
            <Link href="/categories" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 