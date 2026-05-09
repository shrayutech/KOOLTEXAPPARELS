export default function sitemap() {
  const baseUrl = 'https://kooltexapparels.com';

  const routes = [
    '',
    '/explore',
    '/about',
    '/services',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  const products = [
    'T-Shirts',
    'Track Suits',
    'School Uniforms',
    'Corporate Uniforms',
    'Safety Jackets',
    'Aprons',
  ].map((category) => ({
    url: `${baseUrl}/explore/${category.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...products];
}
