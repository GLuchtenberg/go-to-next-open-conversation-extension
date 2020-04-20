const getButtonByContent = (content, el = document) => {
  const allBtns = el.getElementsByTagName("button");
  const btn = filter(
    allBtns,
    (resolveBtn) => resolveBtn.textContent.trim().toLowerCase() === content
  )[0];

  return btn;
};

const disableBtn = (btn) => btn.setAttribute("disable", true);
