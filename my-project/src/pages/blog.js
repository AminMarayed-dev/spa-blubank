import { El } from "../shared/El";

export function Blog() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className: "bg-blue-200",
        children: [
          El({
            element: "img",
            src: "./src/assets/image/blog-cart-1.webp",
            className: "w-64 h-64",
          }),
          El({
            element: "div",
            children: [
              El({
                element: "h3",
                innerHTML: "از بلو به جونیور",
              }),
              El({
                element: "p",
                innerHTML: `وقتی بحث از مسائل مالی کودکان می‌شود اغلب والدین با چالش‌هایی در مورد آموزش به فرزند خود روبه‌رو می‌شوند. چالش‌هایی که ناشی از کمبود اطلاعات و امکانات مناسب برای کسب تجربه توسط کودکان است. سیستم مالی که در عصر حاضر با حساب‌های بانکی، کارت‌های بانکی و اپلیکی...`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
