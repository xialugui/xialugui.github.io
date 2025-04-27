import DefaultTheme from 'vitepress/theme-without-fonts'
import './my-fonts.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
// @ts-ignore
import { toRefs } from "vue";

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        router.onBeforeRouteChange = async (to) => {
            console.log('路由将改变为: ', to);
            // @ts-ignore
            if (typeof _hmt !== 'undefined') {
                // @ts-ignore
                _hmt.push(['_trackPageview', to]);
            }
        }
        // DefaultTheme.enhanceApp(ctx);
    },
    setup() {
        // 获取前言和路由
        const { frontmatter } = toRefs(useData());
        const route = useRoute();

        // 评论组件 - https://giscus.app/
        giscusTalk({
            repo: 'xialugui/xialugui.github.io',
            repoId: 'MDEwOlJlcG9zaXRvcnkzODE5MzgyOTM',
            category: 'General', // 默认: `General`
            categoryId: 'DIC_kwDOFsPqdc4CmBei',
            mapping: 'pathname', // 默认: `pathname`
            inputPosition: 'top', // 默认: `top`
            lang: 'root', // 默认: `zh-CN`
            // i18n 国际化设置（注意：该配置会覆盖 lang 设置的默认语言）
            // 配置为一个对象，里面为键值对组：
            // [你的 i18n 配置名称]: [对应 Giscus 中的语言包名称]
            locales: {
                'zh-Hans': 'zh-CN',
                'en-US': 'en'
            },
            homePageShowComment: false, // 首页是否显示评论区，默认为否
            lightTheme: 'light', // 默认: `light`
            darkTheme: 'transparent_dark', // 默认: `transparent_dark`
            // ...
            loading: "lazy"
        }, {
            frontmatter, route
        },
            // 是否全部页面启动评论区。
            // 默认为 true，表示启用，此参数可忽略；
            // 如果为 false，表示不启用。
            // 可以在页面使用 `comment: true` 前言单独启用
            true
        );


    }
}