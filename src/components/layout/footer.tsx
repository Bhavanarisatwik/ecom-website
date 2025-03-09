"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-black">TechStore</h3>
            <p className="mt-2 text-sm text-gray-700">
              Your one-stop shop for all tech gadgets and accessories.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase text-black">Shop</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/products" className="text-sm text-gray-700 hover:text-black transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Deals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase text-black">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-700 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase text-black">Support</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-gray-700 hover:text-black transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-700">
            &copy; {new Date().getFullYear()} TechStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 