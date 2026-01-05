import { AppState } from "../core/state.js";
import { Storage } from "../core/storage.js";
import { $$ } from "../core/dom.js";

let translations = {};

export async function initLanguage() {
  await loadLanguage(AppState.lang);
  applyLanguage();
}

async function loadLanguage(lang) {
  const res = await fetch(`assets/i18n/${lang}.json`);
  translations = await res.json();
}

export async function toggleLanguage() {
  AppState.lang = AppState.lang === "ar" ? "en" : "ar";
  Storage.set("lang", AppState.lang);

  await loadLanguage(AppState.lang);
  applyLanguage();
  updateLogo(AppState.lang);
}

function applyLanguage() {
  document.documentElement.lang = AppState.lang;
  document.documentElement.dir  = AppState.lang === "ar" ? "rtl" : "ltr";

  $$(".lang-toggle .toggle-text")[0].textContent =
    AppState.lang === "ar" ? "AR" : "EN";

  $$("[data-key]").forEach(el => {
    el.textContent = translations[el.dataset.key] || "";
  });
}

const logoImg = document.querySelector('.logo img');

export function updateLogo(lang = AppState.lang) {
  if (!logoImg) return;

  const isDark = document.body.classList.contains('dark');

  const key =
    lang === 'en'
      ? isDark ? 'logoEnDark' : 'logoEn'
      : isDark ? 'logoArDark' : 'logoAr';

  logoImg.src = logoImg.dataset[key];
  logoImg.alt =
    lang === 'en'
      ? 'Al Zajel Financial Transfers'
      : 'شركة الزاجل للحوالات المالية';
      
logoImg.style.opacity = 0;
setTimeout(() => {
  logoImg.src = logoImg.dataset[key];
  logoImg.style.opacity = 1;
}, 150);
}
