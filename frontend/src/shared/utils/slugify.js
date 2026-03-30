/**
 * Converts a string into a clean, URL-friendly slug.
 * Example: "Nike Global Price & Monitoring" -> "nike-global-price-monitoring"
 */
export const slugify = (text) => {
  if (!text) return "";
  
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')                     // Normalize special characters (accents)
    .replace(/[\u0300-\u036f]/g, '')     // Remove those normalized character markers
    .replace(/&/g, '-and-')               // Replace & with -and-
    .replace(/[\s\W-]+/g, '-')           // Replace spaces, special chars, and double hyphens with a single hyphen
    .replace(/^-+|-+$/g, '');            // Remove leading and trailing hyphens
};
