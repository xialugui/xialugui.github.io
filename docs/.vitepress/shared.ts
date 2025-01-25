import {defineConfig} from 'vitepress'
import {search as zhSearch} from './zh'

export const shared = defineConfig({
    title: 'Xia Lugui',
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}],
/*        ['script', {},
            `
            window._hmt = window._hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?3bea84a559cbf129e08dddc668cd2db1";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            `
        ],*/
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