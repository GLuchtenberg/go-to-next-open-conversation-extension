const map = (items, fn) => {
  const newItems = [];
  for (let i = 0; i < items.length; i++) {
    newItems.push(fn(items[i]));
  }
  return newItems;
};

const filter = (items, fn) => {
  const newItems = [];
  for (let i = 0; i < items.length; i++) {
    if (fn(items[i]) === true) {
      newItems.push(items[i]);
    }
  }
  return newItems;
};
