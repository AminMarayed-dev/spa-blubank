import { El } from "./shared/El.js";
import { showModal, closeModal } from "./js/modal.js";

export function App() {
  return El({
    element: "section",
    children: [
      El({
        element: "nav",
        className:
          "flex flex-row-reverse  items-center justify-between px-4 py-6 shadow-lg sticky top-0 md:px-0 md:justify-around",
        children: [
          El({
            element: "img",
            className: "w-16 h-16",
            src: "./src/assets/image/blu-logo.png",
          }),
          El({
            element: "i",
            className: "fa-solid fa-bars text-2xl cursor-pointer md:hidden",
            eventListener: [
              {
                event: "click",
                callback: showModal,
              },
            ],
          }),
          El({
            element: "ul",
            className: "hidden  md:flex md:gap-10 md:ml-16",
            children: [
              El({
                element: "li",
                className: "text-gray-500 hover:text-blue-400 cursor-pointer",
                children: [
                  El({
                    element: "a",
                    innerHTML: "خانه",
                    href: "/",
                    id: "link",
                  }),
                ],
              }),
              El({
                element: "li",
                className: "text-gray-500 hover:text-blue-400 cursor-pointer",
                children: [
                  El({
                    element: "a",
                    innerHTML: "درباره ما",
                    href: "/about",
                    id: "link",
                  }),
                ],
              }),
              El({
                element: "li",
                className: "text-gray-500 hover:text-blue-400 cursor-pointer",
                children: [
                  El({
                    element: "a",
                    innerHTML: "بلاگ",
                    href: "/blog",
                    id: "link",
                  }),
                ],
              }),
              El({
                element: "li",
                className: "text-gray-500 hover:text-blue-400 cursor-pointer",
                children: [
                  El({
                    element: "a",
                    innerHTML: "سوالات متداول",
                    href: "/question",
                    id: "link",
                  }),
                ],
              }),
              El({
                element: "li",
                className: "text-gray-500 hover:text-blue-400 cursor-pointer",
                children: [
                  El({
                    element: "a",
                    innerHTML: "موقعیت شغلی",
                    href: "/job",
                    id: "link",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "a",
            className:
              "hidden md:block bg-blue-500 text-white p-3 rounded-2xl cursor-pointer",
            innerHTML: "باز کردن حساب بلو",
          }),
        ],
      }),
      El({
        element: "div",
        className:
          "z-10 absolute top-0 bg-slate-200 py-4 px-16 h-screen w-screen hidden",
        id: "modal",
        children: [
          El({
            element: "div",
            className: "text-left text-3xl",
            children: [
              El({
                element: "i",
                className: "fa-solid fa-xmark cursor-pointer",
                eventListener: [
                  {
                    event: "click",
                    callback: closeModal,
                  },
                ],
              }),
            ],
          }),
          El({
            element: "ul",
            className: "flex flex-col gap-y-3",
            children: [
              El({
                element: "li",
                className: "hover:text-blue-400 cursor-pointer",
                children: [
                  El({
                    element: "li",
                    className: "hover:text-blue-400 cursor-pointer",
                    children: [
                      El({
                        element: "a",
                        innerHTML: "خانه",
                        href: "/",
                        id: "link",
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: "li",
                className: "hover:text-blue-400 cursor-pointer",
                children: [
                  El({
                    element: "li",
                    className: "hover:text-blue-400 cursor-pointer",
                    children: [
                      El({
                        element: "a",
                        innerHTML: "درباره ما",
                        href: "/about",
                        id: "link",
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: "li",
                className: "hover:text-blue-400 cursor-pointer",
                children: [
                  El({
                    element: "a",
                    innerHTML: "بلاگ",
                    href: "/blog",
                    id: "link",
                  }),
                ],
              }),
              El({
                element: "li",
                className: "hover:text-blue-400 cursor-pointer",
                children: [
                  El({
                    element: "a",
                    innerHTML: "سوالات متداول",
                    href: "/question",
                    id: "link",
                  }),
                ],
              }),
              El({
                element: "li",
                className: "hover:text-blue-400 cursor-pointer",
                children: [
                  El({
                    element: "a",
                    innerHTML: "موقعیت شغلی",
                    href: "/job",
                    id: "link",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex justify-center items-center gap-3 mt-20",
            children: [
              El({
                element: "span",
                className:
                  "text-lg bg-slate-500 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-blue-500",
                children: [
                  El({
                    element: "i",
                    className: "fa-brands fa-twitter",
                  }),
                ],
              }),
              El({
                element: "span",
                className:
                  "text-lg bg-slate-500 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-blue-500",
                children: [
                  El({
                    element: "i",
                    className: "fa-brands fa-instagram",
                  }),
                ],
              }),
              El({
                element: "span",
                className:
                  "text-lg bg-slate-500 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-blue-500",
                children: [
                  El({
                    element: "i",
                    className: "fa-brands fa-linkedin",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
