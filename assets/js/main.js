import { initLanguage, toggleLanguage } from "./modules/language.js";
import { initTheme, toggleTheme } from "./modules/theme.js";
import { initReveal } from "./modules/reveal.js";
import { initCounters } from "./modules/counter.js";
import { initMenu } from "./modules/menu.js";

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initTheme();
  initReveal();
  initCounters();
  initMenu();

  document.getElementById("langBtn").onclick  = toggleLanguage;
  document.getElementById("darkToggle").onclick = toggleTheme;
});
