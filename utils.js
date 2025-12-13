// Simple route helper used by Base44 exports.
export function createPageUrl(pageName) {
  if (!pageName) return "/";
  if (pageName.startsWith("/")) return pageName;
  // Common Base44 pattern: pageName matches a file in /pages
  const clean = String(pageName).trim();
  if (clean.toLowerCase() === "home") return "/";
  return "/" + clean.replace(/\s+/g, "").replace(/[^a-zA-Z0-9_-]/g, "");
}
