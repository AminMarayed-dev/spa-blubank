import { About } from "../pages/about.js";
import { App } from "../app.js";
import { Blog } from "../pages/blog.js";
import { Question } from "../pages/question.js";
import { Job } from "../pages/job.js";

export let result = App();
export function router() {
  const routes = [
    {
      path: "/",
      view: App,
    },
    {
      path: "/about",
      view: About,
    },
    {
      path: "/blog",
      view: Blog,
    },
    {
      path: "/question",
      view: Question,
    },
    {
      path: "/job",
      view: Job,
    },
  ];

  let matches = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = matches.find((match) => match.isMatch);
  console.log(match);

  // 404
  if (!match) {
    match = {
      route: {
        path: "/not-found",
        view: () => console.log("not found page"),
      },
      isMatch: true,
    };
  }
  document.querySelector("#app").innerHTML = "";
  document.querySelector("#app").append(match.route.view());
}

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}
