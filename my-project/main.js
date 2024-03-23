import "./src/styles/index.css";
import { App } from "./src/app.js";
import { router, navigateTo } from "./src/js/router.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = App();
    app.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.id === "link") {
        navigateTo(e.target.href);
      }
    });
    router();
  });
  window.addEventListener("popstate", router);
