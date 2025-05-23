import { defineConfig, type DefaultTheme } from 'vitepress'
import { generateSidebar } from "vitepress-sidebar";

export const zh = defineConfig({
    lang: 'zh-Hans',
    description: '陆龟的博客',
    themeConfig: {
        nav: nav(),

        editLink: {
            pattern: 'https://github.com/xialugui/xialugui.github.io/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2017-${new Date().getFullYear()} 夏露桂`
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        // skipToContentLabel: '跳转到内容'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Python',
            link: '/python/preface',
            activeMatch: '/python/',
        },
        {
            text: '脑机接口',
            link: '/brain-computer-interface/preface',
            activeMatch: '/brain-computer-interface/',
        },
        {
            text: '深度学习',
            link: '/deep-learning/preface',
            activeMatch: '/deep-learning/',
        },
        {
            text: '数据结构与算法',
            link: '/data-structures-and-algorithms/preface',
            activeMatch: '/data-structures-and-algorithms/',
        },
        //{
        //     text: '机器学习',
        //     link: '/machine-learning/preface',
        //     activeMatch: '/machine-learning/',
        // },
        {
            text: '关于我',
            link: '/about-me',
        },
        {
            items: [
                {
                    text: 'Linux',
                    link: '/linux/preface',
                    activeMatch: '/linux/'
                },
                {
                    text: '参与贡献',
                    link: 'https://github.com/xialugui/xialugui.github.io/blob/main/.github/contributing.md'
                }
            ]
        }
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '前言',
            link: "preface",
        },
        {
            text: '预备知识',
            collapsed: false,
            items: [
                { text: '数据操作', link: 'data-operation' },
                { text: '数据预处理', link: 'data-preprocess' },
            ]
        }
    ]
}


export const search: DefaultTheme.LocalSearchOptions['locales'] = {
    root: {
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                noResultsText: '无法找到相关结果',
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                },
                resetButtonTitle: '清除查询条件',
            }
        }
    }
}