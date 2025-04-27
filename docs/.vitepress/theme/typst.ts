import { $typst } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs';
import { FetchAccessModel, preloadRemoteFonts } from "@myriaddreamin/typst.ts";
import { preloadFontAssets, preloadSystemFonts, withAccessModel } from '@myriaddreamin/typst.ts/dist/esm/options.init.mjs';
import { MemoryAccessModel } from '@myriaddreamin/typst.ts/dist/cjs/index.cjs';
import { createGlobalCompiler, getGlobalCompiler, withGlobalCompiler } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-compiler.mjs';
import axios from 'axios';
import { init, loadEnv, withBase } from 'vitepress';
// const env = loadEnv('development', process.cwd())

export class TypstHelper {
    init() {
        this.initCompiler()
        this.initLibs()
    }
    async initLibs() {
        const compiler = await $typst.getCompiler()
        const libs = await axios.get("/libs.typ")
        compiler.addSource("/docs/public/libs.typ", libs.data)
        const utils = await axios.get("/utils.typ")
        compiler.addSource("/docs/public/utils.typ", utils.data)
        const fonts = await axios.get("/fonts.typ")
        compiler.addSource("/docs/public/fonts.typ", fonts.data)
        const book = await axios.get("/book.typ")
        compiler.addSource("/docs/public/book.typ", book.data)
        const chapter = await axios.get("/chapter.typ")
        compiler.addSource("/docs/public/chapter.typ", book.data)
    }

    initCompiler() {
        $typst.setCompilerInitOptions({
            beforeBuild: [
                preloadFontAssets({
                    assets: false
                }),
                preloadRemoteFonts([
                    'https://public.xlg.icu/fonts/JetBrainsMono-Regular.ttf',
                    'https://public.xlg.icu/fonts/JetBrainsMono-Bold.ttf',
                    'https://public.xlg.icu/fonts/LXGWWenKaiMonoGBScreen.ttf',
                ]),

            ],
            getModule: () =>
                'https://fastly.jsdelivr.net/npm/@myriaddreamin/typst-ts-web-compiler/pkg/typst_ts_web_compiler_bg.wasm',
        });

        $typst.setRendererInitOptions({
            beforeBuild: [],
            getModule: () =>
                'https://fastly.jsdelivr.net/npm/@myriaddreamin/typst-ts-renderer/pkg/typst_ts_renderer_bg.wasm',
        });

    }
}

export const typstHelper = new TypstHelper()