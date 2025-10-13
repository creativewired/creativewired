import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic';

export async function GET() {
  const supabase = createClient();
  
  const { data: posts, error } = await supabase
    .from('posts')
    .select('slug')
    .eq('status', 'published')
    .order('published_at', { ascending: false });
    
  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  
  const domain = 'https://creativewired.com';
  const urls = posts?.map(post => `
    <url>
      <loc>${domain}/blog/${post.slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('') || '';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${domain}</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
