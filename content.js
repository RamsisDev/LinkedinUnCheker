const CHECKBOX_ID = "follow-company-checkbox";

let isEnabled = true;

chrome.storage.sync.get({ enabled: true }, (data) => {
  isEnabled = data.enabled;
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled !== undefined) {
    isEnabled = changes.enabled.newValue;
  }
});

const uncheckFollowCheckbox = () => {
  if (!isEnabled) return;
  const checkbox = document.getElementById(CHECKBOX_ID);
  if (checkbox instanceof HTMLInputElement && checkbox.checked) {
    checkbox.click();
  }
};

const startObserver = () => {
  if (!document.body) {
    return;
  }

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
