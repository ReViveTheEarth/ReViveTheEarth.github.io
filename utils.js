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
  // Convert CamelCase page names to lowercase route names
  const lower = page
    // Insert a dash between lowercase to uppercase transitions (not used here)
    // .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])/g, (match, letter, index) => {
      return letter.toLowerCase();
    });
  return `/${lower}`;
}