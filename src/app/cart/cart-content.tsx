"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartContent() {
  const { items, removeItem, updateQuantity, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 4150 ? 0 : 500; // Converted from $50 to ₹4150 and $5.99 to ₹500
  const tax = subtotal * 0.18; // Updated to standard Indian GST rate of 18%
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-gray-50 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild className="bg-black hover:bg-gray-800 text-white transition-all duration-200 transform hover:scale-105">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-20 w-20 relative flex-shrink-0 rounded-lg overflow-hidden group">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg transition-transform duration-200 group-hover:scale-110"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 hover:text-black transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500">{item.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{formatPrice(item.price)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button 
                        className="w-8 h-8 flex items-center justify-center rounded-l-md border border-r-0 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <div className="w-12 h-8 flex items-center justify-center border-t border-b text-gray-900">
                        {item.quantity}
                      </div>
                      <button 
                        className="w-8 h-8 flex items-center justify-center rounded-r-md border border-l-0 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-black/10 flex-1 sm:flex-none"
            />
            <Button variant="outline" className="rounded-l-none hover:bg-gray-100 transition-colors">
              Apply
            </Button>
          </div>
          <Button variant="outline" asChild className="w-full sm:w-auto hover:bg-gray-100 transition-colors">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-800">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span className="font-medium">Shipping</span>
              <div className="text-right">
                <span className="font-medium">{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                {shipping === 0 && (
                  <div className="text-sm text-green-600">Free shipping applied!</div>
                )}
              </div>
            </div>
            <div className="flex justify-between text-gray-800">
              <span className="font-medium">GST (18%)</span>
              <span className="font-medium">{formatPrice(tax)}</span>
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
          <Button 
            className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-200 transform hover:scale-105" 
            size="lg"
          >
            Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
} 