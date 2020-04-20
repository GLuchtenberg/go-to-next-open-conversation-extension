let cache;

const getResolveDivs = () => {
  if (cache) {
    return cache;
  }
  const elems = document.querySelectorAll('[data-resolved="false"]');
  if (elems.length === 0) return;

  cache = elems;

  return cache;
};

const clearCache = () => {
  if (cache) cache = null;
};
