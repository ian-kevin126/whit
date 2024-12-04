import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Whit",
  description: "我的第一个Vue3组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '缘起', link: '/origin' },
      { text: '组件清单', link: '/components/' }
    ],

    sidebar: [
      {
        text: '前言',
        items: [
          { text: '缘起', link: '/origin' },
        ]
      },
      {
        text: '组件',
        link: '/components/',
        items: [
          {
            text: '按钮',
            items: [
              { text: '调皮的按钮', link: '/components/btn-naughty/' },
            ]
          },
        ]
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg height="2404" viewBox="-.1 .5 960.2 923.9" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m958.9 442.4c1.1 26.1-2 52.1-9.2 77.2-7.1 25.1-18.3 48.8-33.1 70.3a240.43 240.43 0 0 1 -53.6 56.2l-.5.4-199.9 149.8-98.3 74.5-59.9 45.2c-3.5 2.7-7.4 4.7-11.5 6.1s-8.5 2.1-12.9 2.1c-4.3 0-8.7-.7-12.8-2.1s-8-3.4-11.5-6.1l-59.9-45.2-98.3-74.5-198.7-148.9-1.2-.8-.4-.4c-20.9-15.7-39-34.7-53.8-56.2s-26-45.3-33.2-70.4c-7.2-25.1-10.3-51.2-9.2-77.3 1.2-26.1 6.5-51.8 15.8-76.2l1.3-3.5 130.7-340.5q1-2.5 2.4-4.8 1.3-2.3 3.1-4.3 1.7-2.1 3.7-3.9 2-1.7 4.2-3.2c3.1-1.9 6.3-3.3 9.8-4.1 3.4-.9 7-1.3 10.5-1.1 3.6.2 7.1.9 10.4 2.2 3.3 1.2 6.5 3 9.3 5.2q2 1.7 3.9 3.6 1.8 2 3.2 4.3 1.5 2.2 2.6 4.7 1.1 2.4 1.8 5l88.1 269.7h356.6l88.1-269.7q.7-2.6 1.9-5 1.1-2.4 2.6-4.7 1.4-2.2 3.2-4.2 1.8-2 3.9-3.7c2.8-2.2 5.9-3.9 9.2-5.2 3.4-1.2 6.9-1.9 10.4-2.1 3.6-.2 7.1.1 10.6 1 3.4.9 6.7 2.3 9.7 4.2q2.3 1.4 4.3 3.2 2 1.7 3.7 3.8 1.7 2.1 3.1 4.4 1.3 2.3 2.3 4.8l130.5 340.6 1.3 3.5c9.3 24.3 14.6 50 15.7 76.1z" fill="#e24329"/><path d="m959 442.5c1.1 26-2 52.1-9.2 77.2s-18.4 48.9-33.2 70.4-32.9 40.5-53.7 56.2l-.5.4-199.9 149.8s-84.9-64.1-182.5-138l286.5-216.8c12.9-9.7 26.4-18.6 40.3-26.8 13.9-8.3 28.3-15.7 43-22.3 14.8-6.6 29.9-12.5 45.2-17.4 15.4-5 31-9.1 46.9-12.4l1.3 3.5c9.3 24.4 14.6 50.1 15.8 76.2z" fill="#fc6d26"/><path d="m480 658.5c97.6 73.7 182.6 138 182.6 138l-98.3 74.5-59.9 45.2c-3.5 2.7-7.4 4.7-11.5 6.1s-8.5 2.1-12.9 2.1c-4.3 0-8.7-.7-12.8-2.1s-8-3.4-11.5-6.1l-59.9-45.2-98.3-74.5s84.9-64.3 182.5-138z" fill="#fca326"/><path d="m480 658.3c-97.7 73.9-182.5 138-182.5 138l-198.7-148.9-1.2-.8-.4-.4c-20.9-15.7-39-34.7-53.8-56.2s-26-45.3-33.2-70.4c-7.2-25.1-10.3-51.2-9.2-77.3 1.2-26.1 6.5-51.8 15.8-76.2l1.3-3.5c15.9 3.3 31.5 7.4 46.9 12.4 15.3 5 30.4 10.8 45.2 17.5 14.7 6.6 29.1 14.1 43 22.3s27.3 17.2 40.3 26.9z" fill="#fc6d26"/></svg>',
        },
        link: 'https://gitlab.com/cod-public-projects/chill-component',
      },
    ],
  }
})
