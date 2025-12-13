export function createPageUrl(pageName) {
  if (!pageName) return "/";
  if (pageName === "Home") return "/";
  return "/" + pageName;
}
