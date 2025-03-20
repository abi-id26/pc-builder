import Home from '@/components/Home';

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products');
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <Home products={products} />;
}
export const dynamic = 'force-dynamic';