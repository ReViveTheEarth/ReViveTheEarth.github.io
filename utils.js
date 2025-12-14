// Utility functions used across the application.

/**
 * Creates a URL path for a given page name. In the base project these pages
 * were server-side routes. In this Next.js version we map page names to
 * lowercase route names that match the file names in the `pages` directory.
 *
 * Examples:
 *   createPageUrl('About') => '/about'
 *   createPageUrl('MyImpact') => '/myimpact'
 *
 * @param {string} page - The page name (e.g. "About", "Impact", "MyImpact").
 * @returns {string} The corresponding route path.
 */
export function createPageUrl(page) {
  if (!page) return "/";
  // If the string already starts with a slash assume it's a path and return as-is
  if (page.startsWith("/")) return page;

  // Next.js (pages router) builds routes from file names. In this project the
  // route files are PascalCase (e.g., pages/About.js), so the URL path must
  // preserve that casing (e.g., /About). Base44 also used these exact paths.
  //
  // Special-case the landing page so “Home” links to “/”.
  if (page === "Home") return "/";
  return `/${page}`;
}