import { El } from "../shared/El";

export function notFound() {
  return El({
    element: "div",
    children: [
      El({
        element: "h1",
        innerHTML: "404",
      }),
      El({
        element: "p",
        innerHTML: "صفحه مورد نظر پیدا نشد",
      }),
      El({
        element: "a",
        href: "/",
        innerHTML: "برگشت به صفحه اصلی",
        className: "text-blue-500",
      }),
    ],
  });
}
