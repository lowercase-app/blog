const currentDateUTC = new Date().toUTCString();

module.exports = {
  title: "lowercase blog",
  dest: "./public",
  themeConfig: {
    repo: "https://blog.lowercase.app",
    repoLabel: "Repo",
    editLinks: true,
    editLinkText: "Found a bug? Help me improve this page!",
    nav: [
      { text: "Blog", link: "/" },
      { text: "Archive", link: "/archive/" },
      { text: "RSS Feed", link: "/rss.xml" },
    ],
    header: "/lowercase.png",
    docsDir: "src",
    pageSize: 5,
    startPage: 0,
  },
  plugins: [
    [
      "vuepress-plugin-rss",
      {
        base_url: "/",
        site_url: "https://blog.lowercase.app",
        filter: (frontmatter) => frontmatter.date <= new Date(currentDateUTC),
        count: 20,
      },
    ],
    "vuepress-plugin-reading-time",
    "vuepress-plugin-janitor",
  ],
  head: [
    [
      "link",
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon.png" },
    ],
    ["link", { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
};
