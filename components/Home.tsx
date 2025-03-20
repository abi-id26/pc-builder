'use client';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

export default function Home({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.fields.Category === selectedCategory) 
    : products;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">PC Parts</h1>
      <select 
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="">All Categories</option>
        <option value="CPU">CPU</option>
        <option value="GPU">GPU</option>
        <option value="Motherboard">Motherboard</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}