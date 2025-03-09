import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Truck, Shield, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function Home() {
  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8);

  // Get unique categories
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
            alt="Hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up">
              The Latest Tech Gadgets at Your Fingertips
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-up animation-delay-100">
              Discover cutting-edge technology and innovative solutions for your digital lifestyle.
            </p>
            <div className="space-x-4 animate-fade-up animation-delay-200">
              <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100">
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white/10">
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Truck className="h-10 w-10 text-gray-700" />
              <div>
                <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                <p className="text-gray-600">On orders over {formatPrice(50)}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-gray-700" />
              <div>
                <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                <p className="text-gray-600">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Gift className="h-10 w-10 text-gray-700" />
              <div>
                <h3 className="font-semibold text-gray-900">Special Offers</h3>
                <p className="text-gray-600">Save up to 25% off</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link 
              href="/products" 
              className="text-gray-600 hover:text-black flex items-center gap-2 transition-colors"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl border bg-white hover:shadow-lg transition-all duration-200">
                  <div className="aspect-square relative overflow-hidden">
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
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-600">{product.category}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">4.5</span>
                      </div>
                    </div>
                    <h3 className="font-medium text-gray-900 group-hover:text-black transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase()}`}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <Image
                  src={products.find(p => p.category === category)?.image || ''}
                  alt={category}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter and get exclusive deals, new product announcements, and tech tips.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black/10"
              />
              <Button className="bg-black hover:bg-gray-800 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
