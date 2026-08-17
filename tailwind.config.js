/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./data.js"],
  // 动态拼接的颜色类（如 script.js 中 bg-${accent}-100）无法被静态扫描到，
  // 这里用 safelist 覆盖所有 Tailwind 默认色系的常用色阶，保证在 data.js 里
  // 给合作分组/成员改任意颜色时样式都不会丢失。
  safelist: [
    // script.js 里合作分组/成员用到的动态色阶：bg-{c}-100 / text-{c}-600 / text-{c}-800（含 hover）
    {
      pattern: /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-100/,
    },
    {
      pattern: /text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(600|800)/,
      variants: ["hover"],
    },
  ],
  theme: { extend: {} },
  plugins: [],
};
