import { AppState } from "../core/state.js";
import { Storage } from "../core/storage.js";

export function initTheme() {
  if (AppState.theme === "dark") {
    document.body.classList.add("dark");
  }
}

export function toggleTheme() {
  document.body.classList.toggle("dark");
  AppState.theme = document.body.classList.contains("dark") ? "dark" : "light";
  Storage.set("theme", AppState.theme);
}

/* Header Scroll */
const header=document.querySelector(".header");
window.addEventListener("scroll",()=>{
 header.classList.toggle("scrolled",window.scrollY>50);
});
/* End Header Scroll */