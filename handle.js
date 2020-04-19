let cache;
const getResolveDivs = () => {
  if (cache) {
    return cache;
  }
  const divs = document.querySelectorAll('[data-resolved="false"]');
  cache = map(divs, (elem) => ({ count: 0, elem }));
  return cache;
};

const getDistTop = (el) => window.pageYOffset + el.getBoundingClientRect().top;

const getCommentBoxDistTop = (el) => {
  const commentBoxHeight = el.querySelector(".review-comment").clientHeight;
  const a = getDistTop(el);
  const b = a - commentBoxHeight;
  return b;
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

const createBtn = () => {
  const btn = document.createElement("button");
  btn.textContent = "Next open conversation";
  btn.classList.add("nod-next-open-conversation");
  btn.addEventListener("click", () => {
    const resolveDivs = getResolveDivs();
    const goToDiv = getNextOpenConversation(resolveDivs);

    window.scrollTo({
      top: getCommentBoxDistTop(goToDiv.elem),
      behavior: "smooth",
    });
  });

  return btn;
};

const btn = createBtn();
const btnContainer = document.querySelector(".pr-review-tools");
btnContainer.appendChild(btn);
