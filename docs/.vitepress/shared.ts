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

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    themeConfig: {
        logo: {src: "/favicon.svg", width: 24, height: 24},
        socialLinks: [
            {icon: 'github', link: 'https://github.com/xialugui'},
            {icon: 'gitee', link: 'https://gitee.com/xialugui'},
            // { icon: 'wechat', link: 'https://gitee.com/xialugui' },
            {icon: 'x', link: 'https://x.com/xialugui'},
            {icon: 'zhihu', link: 'https://zhihu.com/xialugui'},
            // { icon: 'weibo', link: 'https://weibo.com/xialugui' }
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    ...zhSearch,
                }
            }
        },

        // carbonAds: {code: 'CEBDT27Y', placement: 'vuejsorg'}
    },
})