export function createPageUrl(pageName) {
  // Base44 uses page names; in Next.js we map them to routes like /MyImpact
  if (!pageName) return "/";
  return "/" + String(pageName).replace(/^\/+/, "");
}
