import {defineConfig} from 'vitepress'
import {search as zhSearch} from './zh'

export const shared = defineConfig({
    title: 'Xia Lugui',
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}],
    ],
    rewrites: {
        'zh/:rest*': ':rest*'
    },
    markdown: {
        image: {
            lazyLoading: true
        }
    },
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    themeConfig: {
        logo: {src: "/favicon.svg", width: 24, height: 24},
        socialLinks: [
            {icon: 'github', link: 'https://github.com/xialugui'},
            {icon: 'gitee', link: 'https://gitee.com/xialugui'},
            {icon: 'x', link: 'https://x.com/xialugui'},
            {icon: 'zhihu', link: 'https://zhihu.com/xialugui'},
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    ...zhSearch,
                }
            }
        },
    },
})