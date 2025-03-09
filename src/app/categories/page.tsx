import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata = {
  title: "Categories - TechStore",
  description: "Browse our wide range of tech categories",
};

export default function CategoriesPage() {
  // Get unique categories and count products in each
  const categories = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = {
        name: category,
        count: 1,
        image: product.image, // Use first product's image as category image
      };
    } else {
      acc[category].count += 1;
    }
    return acc;
  }, {} as Record<string, { name: string; count: number; image: string }>);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Categories</h1>
        <p className="text-lg text-gray-600">
          Explore our wide range of tech categories and find exactly what you're looking for
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(categories).map((category) => (
          <Link
            key={category.name}
            href={`/categories/${category.name.toLowerCase()}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 hover:shadow-lg">
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {category.name}
                  </h2>
                  <p className="text-white/90 text-sm drop-shadow">
                    {category.count} {category.count === 1 ? 'Product' : 'Products'}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-600 mb-6">
            Our product range is constantly growing. Check back regularly for new categories and products.
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
} 