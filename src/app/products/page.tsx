import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export const metadata = {
  title: "Products - TechStore",
  description: "Browse our collection of tech products",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-lg text-gray-600">
          Discover our curated collection of premium tech products
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowUpDown className="h-4 w-4" /> Sort by
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl border bg-white hover:shadow-lg transition-all duration-200">
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  {formatPrice(product.price)}
                </div>
                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/80 backdrop-blur-sm text-black px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                {/* Title and Rating */}
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 group-hover:text-black transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">4.5</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-4 min-h-[2.5rem]">
                  {product.description}
                </p>

                {/* Features Preview */}
                <div className="space-y-1">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-500">
                      <span className="h-1 w-1 rounded-full bg-gray-300 mr-2" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-black">View Details</span>
                    <span className="text-gray-500 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            No products found
          </h2>
          <p className="text-gray-600 mb-8">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
} 