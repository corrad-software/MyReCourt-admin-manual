import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MyReCourt",
  description: "Manual Admin MyReCourt",
  lang: "ms-MY",
  lastUpdated: true,

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://myrecourt.kedah.gov.my/images/myrecourt.png",
      },
    ],
    ["meta", { name: "theme-color", content: "#FDDA0D" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "https://myrecourt.kedah.gov.my/images/myrecourt.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "https://myrecourt.kedah.gov.my/images/myrecourt.png",
        color: "#FDDA0D",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "https://myrecourt.kedah.gov.my/images/myrecourt.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#FDDA0D" }],
  ],

  themeConfig: {
    siteTitle: "MyReCourt",
    logo: "https://myrecourt.kedah.gov.my/images/myrecourt.png",

    nav: [
      { text: "Utama", link: "/" },
      {
        text: "Pengurusan Admin",
        items: [
          { text: "Log Masuk", link: "/log-masuk" },
          { text: "Pendaftaran Pengguna", link: "/pendaftaran-pengguna-admin" },
          { text: "Reset Kata Laluan", link: "/reset-kata-laluan-admin" },
          { text: "Senarai Permohonan", link: "/senarai-permohonan-admin" },
          { text: "Tugasan Admin", link: "/tugasan-admin" },
          { text: "Pengurusan Rujukan", link: "/pengurusan-rujukan" },
          { text: "Cetak Borang", link: "/cetak-borang" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Manual Admin",
        items: [
          { text: "Utama", link: "/" },
          {
            text: "Pengurusan Akaun",
            collapsed: false,
            items: [
              { text: "Log Masuk", link: "/log-masuk" },
              { text: "Pendaftaran Pengguna", link: "/pendaftaran-pengguna-admin" },
              { text: "Reset Kata Laluan", link: "/reset-kata-laluan-admin" },
            ],
          },
          {
            text: "Pengurusan Permohonan",
            collapsed: false,
            items: [
              { text: "Senarai Permohonan", link: "/senarai-permohonan-admin" },
              { text: "Tugasan Admin", link: "/tugasan-admin" },
              { text: "Pengurusan Rujukan", link: "/pengurusan-rujukan" },
              { text: "Cetak Borang", link: "/cetak-borang" },
            ],
          },
        ],
      },
    ],

    socialLinks: [],

    footer: {
      message: "Sistem MyReCourt",
      copyright: `© ${new Date().getFullYear()} MyReCourt. Hak Cipta Terpelihara.`,
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Cari",
            buttonAriaLabel: "Cari",
          },
          modal: {
            noResultsText: "Tiada hasil carian untuk",
            resetButtonTitle: "Reset carian",
            footer: {
              selectText: "untuk pilih",
              navigateText: "untuk navigasi",
              closeText: "untuk tutup",
            },
          },
        },
      },
    },
  },
});
