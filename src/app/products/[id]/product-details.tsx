"use client";

import Image from "next/image";
import { Heart, Share2, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/product/add-to-cart-button";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {product.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">128 reviews</span>
          </div>
          
          <div className="text-3xl font-bold text-gray-900 mb-6">{formatPrice(product.price)}</div>
          
          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>
          
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-gray-800" />
                  <span className="ml-4 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-4 mb-8">
            <AddToCartButton product={product} />
            <Button variant="outline" size="lg" className="hover:bg-gray-100 transition-colors">
              <Heart className="mr-2 h-5 w-5" />
              Save
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-gray-100 transition-colors">
              <Share2 className="mr-2 h-5 w-5" />
              Share
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-4">
              <Truck className="h-6 w-6 text-gray-700" />
              <div>
                <h4 className="font-medium text-gray-900">Free Shipping</h4>
                <p className="text-sm text-gray-600">Free shipping on orders over {formatPrice(50)}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Shield className="h-6 w-6 text-gray-700" />
              <div>
                <h4 className="font-medium text-gray-900">2 Year Warranty</h4>
                <p className="text-sm text-gray-600">Full coverage for peace of mind</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <RotateCcw className="h-6 w-6 text-gray-700" />
              <div>
                <h4 className="font-medium text-gray-900">30-Day Returns</h4>
                <p className="text-sm text-gray-600">Easy returns if you change your mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products
            .filter((p) => p.id !== product.id && p.category === product.category)
            .slice(0, 4)
            .map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative overflow-hidden rounded-lg border bg-white hover:shadow-lg transition-all duration-200">
                <div className="aspect-h-1 aspect-w-1 h-60 overflow-hidden">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="mt-2 font-medium text-gray-900">{formatPrice(relatedProduct.price)}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 