const STRINGS = {
  es: {
    label: "Desmarcado automático",
    on:  "Activo",
    off: "Desactivado",
  },
  en: {
    label: "Auto-uncheck follow",
    on:  "Active",
    off: "Disabled",
  },
};

const toggle   = document.getElementById("toggle");
const txtLabel  = document.getElementById("txt-label");
const txtStatus = document.getElementById("txt-status");
const btnEs    = document.getElementById("btn-es");
const btnEn    = document.getElementById("btn-en");

let currentLang = "es";

function applyLang(lang) {
  currentLang = lang;
  const s = STRINGS[lang];

  txtLabel.textContent = s.label;
  updateStatus(toggle.checked);

  btnEs.classList.toggle("active", lang === "es");
  btnEn.classList.toggle("active", lang === "en");

  chrome.storage.sync.set({ lang });
}

function updateStatus(enabled) {
  const s = STRINGS[currentLang];
  txtStatus.textContent  = enabled ? s.on : s.off;
  txtStatus.className    = "toggle-status " + (enabled ? "on" : "off");
}

// Load saved state
chrome.storage.sync.get({ enabled: true, lang: "es" }, (data) => {
  toggle.checked = data.enabled;
  applyLang(data.lang);
});

// Toggle change
toggle.addEventListener("change", () => {
  const enabled = toggle.checked;
  updateStatus(enabled);
  chrome.storage.sync.set({ enabled });
});

// Language buttons
btnEs.addEventListener("click", () => applyLang("es"));
btnEn.addEventListener("click", () => applyLang("en"));
