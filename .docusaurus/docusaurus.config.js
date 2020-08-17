export default {
  "title": "Jatin Arora",
  "tagline": "Open source contributor, Writer, Machine Learning Developer, Guitarist",
  "url": "http://localhost:3000",
  "baseUrl": "/",
  "favicon": "/img/jatin.jpg",
  "organizationName": "jatinarora1",
  "projectName": "jatinarora",
  "themeConfig": {
    "image": "/img/jatin.jpg",
    "announcementBar": {
      "id": "supportus",
      "content": "I am looking for a JOB.",
      "backgroundColor": "#fff",
      "textColor": "#000"
    },
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      }
    },
    "navbar": {
      "title": "Jatin Arora",
      "items": [
        {
          "to": "resume",
          "activeBasePath": "resume",
          "label": "Resume",
          "position": "left"
        },
        {
          "to": "projects",
          "activeBasePath": "projects",
          "label": "Conributions",
          "position": "right"
        },
        {
          "href": "https://github.com/jatinarora1",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "About",
          "items": [
            {
              "label": "Resume",
              "to": "resume"
            },
            {
              "label": "Contributions",
              "to": "projects"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Dev.to",
              "href": "https://dev.to/jatinarora1"
            },
            {
              "label": "Medium",
              "href": "https://medium.com/@arora8331"
            },
            {
              "label": "Linkedin",
              "href": "https://www.linkedin.com/in/jatin-a-5a3286137/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/JATINAR27664823"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/anshulrgoyal"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Jatin Arora."
    }
  },
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/Users/inmatin/Desktop/jatinarora/src/css/custom.css"
        }
      }
    ]
  ],
  "onBrokenLinks": "throw",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": []
};