const map = (items, fn) => {
  const newItems = [];
  for (let i = 0; i < items.length; i++) {
    newItems.push(fn(items[i]));
  }
  return newItems;
};
