import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us - TechStore",
  description: "Learn more about TechStore, our mission, and our team",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About TechStore</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We're passionate about bringing you the latest and most innovative tech products.
          Our mission is to make premium technology accessible to everyone while providing
          exceptional customer service and expert guidance.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl border text-center">
          <div className="text-4xl font-bold text-black mb-2">5000+</div>
          <div className="text-gray-600">Happy Customers</div>
        </div>
        <div className="bg-white p-8 rounded-xl border text-center">
          <div className="text-4xl font-bold text-black mb-2">500+</div>
          <div className="text-gray-600">Products Available</div>
        </div>
        <div className="bg-white p-8 rounded-xl border text-center">
          <div className="text-4xl font-bold text-black mb-2">24/7</div>
          <div className="text-gray-600">Customer Support</div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174"
            alt="Our office"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2024, TechStore began with a simple mission: to provide tech
              enthusiasts with high-quality products and exceptional service. What started
              as a small online store has grown into a trusted destination for technology
              products.
            </p>
            <p>
              We carefully curate our product selection, partnering with leading brands
              and emerging innovators to bring you the best in tech. Our team of experts
              tests and reviews each product to ensure it meets our high standards.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
            <p className="text-gray-600">
              We never compromise on quality. Every product in our store is carefully
              selected and tested to ensure it meets our high standards.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Focus</h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We're committed to
              providing the best shopping experience and support.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We stay ahead of the curve, constantly updating our product range with the
              latest technological innovations.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <MapPin className="h-6 w-6 text-gray-600 mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
            <p className="text-gray-600 text-sm">123 Tech Street, Digital City, 12345</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="h-6 w-6 text-gray-600 mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="h-6 w-6 text-gray-600 mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
            <p className="text-gray-600 text-sm">support@techstore.com</p>
          </div>
        </div>
        <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
          Contact Support
        </Button>
      </div>
    </div>
  );
} 