import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "xialugui",
    description: "陆龟的博客",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "🐢",
        // siteTitle: false,
        nav: [
            {text: '主页', link: '/'},
            {text: 'Examples', link: '/markdown-examples'},
            {text: '关于我', link: '/about-me'}
        ],

        // sidebar: [
        //     {
        //         text: 'Examples',
        //         items: [
        //             {text: 'Markdown Examples', link: '/markdown-examples'},
        //             {text: 'Runtime API Examples', link: '/api-examples'}
        //         ]
        //     }, {
        //         text: 'Examples1',
        //         items: [
        //             {text: 'Markdown Examples', link: '/markdown-examples'},
        //         ]
        //     },
        // ],
        sidebar: {
            "/about-me": {
                base: "", items: [
                    {text: "ss", link: "sss"}
                ]
            }
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/xialugui'},
            {icon: 'gitee', link: 'https://gitee.com/xialugui'},
            // { icon: 'wechat', link: 'https://gitee.com/xialugui' },
            {icon: 'x', link: 'https://x.com/xialugui'},
            {icon: 'zhihu', link: 'https://zhihu.com/xialugui'},
            // { icon: 'weibo', link: 'https://weibo.com/xialugui' }
        ],
        footer: {
            copyright: 'Copyright © 2025-present Xia Lugui'
        },
        editLink: {
            pattern: 'https://github.com/xialugui/xialugui.github.io/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        search: {
            provider: "local",
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
        docFooter: {
            next: "下一页",
            prev: "上一页",
        }
    },
    lastUpdated: true,
    lang: "zh",
    locales: {
        root: {
            label: "简体中文",
            lang: "zh"
        },
        en: {
            label: "English",
            lang: "en"
        }
    }
})
