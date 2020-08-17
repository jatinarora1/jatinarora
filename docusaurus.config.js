module.exports = {
  title: "Jatin Arora",
  tagline: "Open source contributor, Writer, Machine Learning Developer, Guitarist",
  url: process.env.URL || "http://localhost:3000",
  baseUrl: process.env.BASE_URL || "/",
  favicon: "/img/jatin.jpg",
  organizationName: "jatinarora1", // Usually your GitHub org/user name.
  projectName: "jatinarora", // Usually your repo name.
  themeConfig: {
    image: "/img/jatin.jpg",
    announcementBar: {
      id: "supportus",
      content: "I am looking for a JOB.",
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "Jatin Arora",
      items: [
        {
          to: "resume",
          activeBasePath: "resume",
          label: "Resume",
          position: "left",
        },
        {
          to: "projects",
          activeBasePath: "projects",
          label: "Conributions",
          position: "right",
        },
        {
          href: "https://github.com/jatinarora1",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Resume",
              to: "resume",
            },
            {
              label: "Contributions",
              to: "projects",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Dev.to",
              href: "https://dev.to/jatinarora1",
            },
            {
              label: "Medium",
              href: "https://medium.com/@arora8331",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/jatin-a-5a3286137/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/JATINAR27664823",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/anshulrgoyal",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jatin Arora.`,
    },
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
