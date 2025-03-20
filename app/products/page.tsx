import Home from '@/components/Home';

export const dynamic = 'force-dynamic';
async function getProducts() {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Products`;
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`,
    },
  });

  if (!response.ok) {
    console.error('Failed to fetch products:', response.status, response.statusText);
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return data.records;
}

export default async function ProductsPage() {
  let products = [];
  try {
    products = await getProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
    return <div>Failed to load products. Please try again later.</div>;
  }

  return <Home products={products} />;
}

