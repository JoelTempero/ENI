/**
 * ENI Image Source Fixes
 * Redirects broken local image paths to the original ENI site
 */

(function() {
  'use strict';

  const ENI_BASE = 'https://www.enieng.co.nz';

  // Map of local paths to ENI site paths
  const imageMap = {
    // Insights images
    '/assets/insights/contract-manufacturing.jpg': '/img/containers/assets/home/_y2a6873-2_rt.jpg/8aaadf2d2e073323b7d22f275f712ef9.jpg',
    '/assets/insights/energy-sector.jpg': '/img/containers/assets/vector-%282%29.png/3ddb3eec983fae60afdcb4c16c9eda45.png',
    '/assets/insights/bus-shelters.jpg': '/img/containers/assets/images/eni-engineering-christchurch.png/52f0ea74a3eb6e5f22082b5d8b91a8cd.png',
    '/assets/insights/outsourcing.jpg': '/img/containers/assets/cnc/okuma-lb3000-cnc-lathe.jpg/9ae8e1bf1f1b51bb6b9ffd900a05a47d.jpg',
    '/assets/insights/local-manufacturing.jpg': '/img/containers/assets/home/_y2a6873-2_rt.jpg/8aaadf2d2e073323b7d22f275f712ef9.jpg',
    '/assets/insights/prototyping.jpg': '/img/containers/assets/cnc/okuma-lb3000-cnc-lathe.jpg/9ae8e1bf1f1b51bb6b9ffd900a05a47d.jpg',

    // Brand assets
    '/assets/brand-assets/eni-engineering-logo-dark.svg': '/assets/brand-assets/eni-engineering-logo-dark.svg',

    // Hero/general images
    '/assets/hero.jpg': '/img/containers/assets/home/_y2a6873-2_rt.jpg/8aaadf2d2e073323b7d22f275f712ef9.jpg',
    '/assets/team.jpg': '/assets/158a15c6730e82d094efb7e228c795a7d595a9ad-(2).jpg',
  };

  // Fix image sources
  function fixImages() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
      const src = img.getAttribute('src');
      if (!src) return;

      // Check if it's a local path that needs fixing
      if (src.startsWith('/assets/') || src.startsWith('/ENI/assets/')) {
        // Remove /ENI prefix if present
        const cleanPath = src.replace('/ENI', '');

        // Check our map first
        if (imageMap[cleanPath]) {
          img.src = ENI_BASE + imageMap[cleanPath];
          return;
        }

        // For any other /assets/ path, try to load from ENI site
        if (cleanPath.includes('/insights/') || cleanPath.includes('/projects/')) {
          // Use a fallback image from ENI
          img.src = ENI_BASE + '/img/containers/assets/home/_y2a6873-2_rt.jpg/8aaadf2d2e073323b7d22f275f712ef9.jpg';
        }
      }

      // Handle broken images
      img.onerror = function() {
        if (!this.dataset.retried) {
          this.dataset.retried = 'true';
          // Try ENI site as fallback
          this.src = ENI_BASE + '/img/containers/assets/home/_y2a6873-2_rt.jpg/8aaadf2d2e073323b7d22f275f712ef9.jpg';
        } else {
          // Final fallback - hide or show placeholder
          this.style.display = 'none';
        }
      };
    });
  }

  // Fix background images in style attributes
  function fixBackgroundImages() {
    const elements = document.querySelectorAll('[style*="background"]');

    elements.forEach(el => {
      const style = el.getAttribute('style');
      if (style && style.includes('/assets/')) {
        const newStyle = style.replace(
          /url\(['"]?\/(?:ENI\/)?assets\/[^'")\s]+['"]?\)/g,
          `url('${ENI_BASE}/img/containers/assets/home/_y2a6873-2_rt.jpg/8aaadf2d2e073323b7d22f275f712ef9.jpg')`
        );
        el.setAttribute('style', newStyle);
      }
    });
  }

  // Run fixes when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      fixImages();
      fixBackgroundImages();
    });
  } else {
    fixImages();
    fixBackgroundImages();
  }

  // Also run after a short delay to catch React-rendered content
  setTimeout(() => {
    fixImages();
    fixBackgroundImages();
  }, 1000);

  // Observe for dynamically added images
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (node.tagName === 'IMG') {
            fixImages();
          } else if (node.querySelectorAll) {
            const imgs = node.querySelectorAll('img');
            if (imgs.length > 0) {
              fixImages();
            }
          }
        }
      });
    });
  });

  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });
})();
