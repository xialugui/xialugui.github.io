import { $typst } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs';
import { FetchAccessModel, preloadRemoteFonts } from "@myriaddreamin/typst.ts";
import { withAccessModel } from '@myriaddreamin/typst.ts/dist/esm/options.init.mjs';
import { MemoryAccessModel } from '@myriaddreamin/typst.ts/dist/cjs/index.cjs';
import { createGlobalCompiler, getGlobalCompiler, withGlobalCompiler } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-compiler.mjs';
import axios from 'axios';


export class TypstHelper {

    init() {
        this.initCompiler()
        this.initLibs()
    }
    async initLibs() {
        const compiler = await $typst.getCompiler()
        await axios.get("/libs.typ").then((response) => {
            compiler.addSource("/docs/public/libs.typ", response.data)
        })
        await axios.get("/utils.typ").then((response) => {
            compiler.addSource("/docs/public/utils.typ", response.data)
        })
        await axios.get("/fonts.typ").then((response) => {
            compiler.addSource("/docs/public/fonts.typ", response.data)
        })
        await axios.get("/book.typ").then((response) => {
            compiler.addSource("/docs/public/book.typ", response.data)
        })
    }

    initCompiler() {
        $typst.setCompilerInitOptions({
            beforeBuild: [
                preloadRemoteFonts([
                    '/JetBrainsMono-Regular.ttf',
                    '/JetBrainsMono-Bold.ttf',
                    '/LXGWWenKaiMonoGBScreen.ttf',
                ]),
            ],
            getModule: () =>
                'https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-web-compiler/pkg/typst_ts_web_compiler_bg.wasm',
        });

        $typst.setRendererInitOptions({
            beforeBuild: [],
            getModule: () =>
                'https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-renderer/pkg/typst_ts_renderer_bg.wasm',
        });

    }
}

export const typstHelper = new TypstHelper()