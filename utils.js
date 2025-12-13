// Small helper mirroring the Base44 createPageUrl utility.
export function createPageUrl(name) {
  if (!name) return "/";
  if (name === "Home") return "/";
  return `/${name}`;
}
