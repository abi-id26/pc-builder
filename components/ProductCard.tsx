import Image from 'next/image';
import { Product } from '@/types/product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      {product.fields.ImageURL?.[0]?.url && (
        <Image 
          src={product.fields.ImageURL[0].url} 
          alt={product.fields.Name}
          width={200}
          height={200}
          className="h-32 w-full object-contain mb-4"
        />
      )}
      <h3 className="font-bold">{product.fields.Name}</h3>
      <p>${product.fields.Price}</p>
      <p className="text-sm text-gray-500">{product.fields.Category}</p>
    </div>
  );
}