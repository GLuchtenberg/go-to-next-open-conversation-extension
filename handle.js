const getDistTop = (el) => window.pageYOffset + el.getBoundingClientRect().top;

const getCommentBoxDistTop = (el) => {
  const commentBoxHeight = el.querySelector(".review-comment").clientHeight;
  const elDistTop = getDistTop(el);
  const scrollDist = elDistTop - commentBoxHeight;

  return scrollDist;
};

let lastIdx = 0;
const getNextOpenConversation = (divs) => {
  const itemToReturn = divs[lastIdx];
  if (lastIdx < divs.length - 1) {
    lastIdx++;
  } else {
    lastIdx = 0;
  }

  return itemToReturn;
};

const createNextConversationBtn = () => {
  const btnContainer = document.querySelector(".pr-review-tools");
  if (!btnContainer) {
    return;
  }

  const btn = document.createElement("button");
  btn.textContent = "Next open conversation";
  btn.classList.add("nod-next-open-conversation");
  btn.addEventListener("click", () => {
    const resolveDivs = getResolveDivs();
    if (!resolveDivs) {
      return disableBtn(btn);
    }

    const divToGo = getNextOpenConversation(resolveDivs);
    window.scrollTo({
      top: getCommentBoxDistTop(divToGo),
      behavior: "smooth",
    });
  });
  btnContainer.appendChild(btn);

  return btn;
};

const addCloseConversationEvents = () => {
  const elems = getResolveDivs();
  if (!elems) return;
  map(elems, (item) => {
    const resolveBtn = getButtonByContent("resolve conversation", item);

    resolveBtn.addEventListener("click", (e) => {
      clearCache();
    });
  });
};

const exec = (() => {
  createNextConversationBtn();
  addCloseConversationEvents();
})();
