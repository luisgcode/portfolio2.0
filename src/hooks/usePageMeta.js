import { useEffect } from "react";

/**
 * Sets the page title and meta description dynamically.
 * Lighter alternative to react-helmet for our simple needs.
 *
 * @param {string} title - Full page title (will appear in browser tab)
 * @param {string} description - Meta description for SEO
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);

      // Also update OG description so social shares reflect the active page
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", description);
      }
    }
  }, [title, description]);
}
