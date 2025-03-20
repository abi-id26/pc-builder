import { NextResponse } from 'next/server';

export async function GET() {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Products`;
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`,
    },
  });

  const data = await response.json();
  return NextResponse.json(data.records);
}