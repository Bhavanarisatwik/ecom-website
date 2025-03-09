import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category);
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (categoryProducts.length === 0) {
    return {
      title: "Category Not Found - TechStore",
      description: "The requested category could not be found",
    };
  }

  return {
    title: `${categoryProducts[0].category} - TechStore`,
    description: `Browse our collection of ${categoryProducts[0].category} products`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category);
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <div className="mb-4">
          <Link 
            href="/categories"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Categories
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryProducts[0].category}</h1>
        <p className="text-lg text-gray-600">
          Discover our selection of {categoryProducts[0].category.toLowerCase()} products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categoryProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-200 hover:shadow-lg">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors line-clamp-2">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-600">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {categoryProducts.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            No products found in this category
          </h2>
          <p className="text-gray-600 mb-8">
            Try checking out our other categories or viewing all products.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>
      )}
    </div>
  );
} 