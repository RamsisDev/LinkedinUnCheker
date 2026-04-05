const CHECKBOX_ID = "follow-company-checkbox";

const uncheckFollowCheckbox = () => {
  const checkbox = document.getElementById(CHECKBOX_ID);
  if (checkbox instanceof HTMLInputElement && checkbox.checked) {
    checkbox.click();
  }
};

const startObserver = () => {
  if (!document.body) {
    return;
  }

  // Reintenta cada vez que el DOM cambia.
  const observer = new MutationObserver(() => {
    uncheckFollowCheckbox();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

const init = () => {
  uncheckFollowCheckbox();
  startObserver();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
