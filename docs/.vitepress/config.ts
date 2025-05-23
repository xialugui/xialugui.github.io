import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh } from './zh'
import { withSidebar } from "vitepress-sidebar";


const vitePressConfig = {
    ...shared,
    locales: {
        root: { label: '简体中文', ...zh },
    }
}
const rootLocale = 'zh'
const supportedLocales = [rootLocale];
const directories = ["deep-learning", "data-structures-and-algorithms", "linux", "python","brain-computer-interface"];
const commonSidebarConfig = {
    collapsed: false,
    capitalizeFirst: true,
    useTitleFromFileHeading: true,
    // useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
}

const vitePressSidebarConfigs = () => {
    let r = []
    supportedLocales.forEach(locale => {
        directories.forEach(directory => {
            r.push({
                ...commonSidebarConfig,
                ...(rootLocale === locale ? {} : { basePath: `/${locale}/` }), // If using `rewrites` option
                documentRootPath: `/docs/${locale}`,
                resolvePath: rootLocale === locale ? `/${directory}/` : `/${locale}/${directory}/`,
                scanStartPath: directory,
            })
        })
    })
    return r
}
export default defineConfig(withSidebar(vitePressConfig, vitePressSidebarConfigs()));

