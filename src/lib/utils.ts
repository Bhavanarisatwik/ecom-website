import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  // Convert USD to INR (approximate rate: 1 USD = 83 INR)
  const inrPrice = price * 83;
  
  // Format the price in Indian format with ₹ symbol
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0, // Remove decimal places
  }).format(inrPrice);
} 