<script setup lang="ts">
import axios from "axios";
import { reactive, onMounted, watch, ref } from 'vue';
import { $typst } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs';
import { createTypstCompiler } from '@myriaddreamin/typst.ts/dist/esm/compiler.mjs';
import VuePdfApp from "vue3-pdf-app";
// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";

const typst = reactive({
  compiled: null,
});
const props = defineProps({
  path: String,
});

onMounted(async () => {
  axios.get(props.path).then(async (res) => {
    const mainContent = res.data;
    await init(mainContent, 1)
  })
});
async function init(mainContent: string, i: number) {
  if (i > 5) {
    return
  }
  try {
    const t = await $typst.pdf({ mainContent });
    typst.compiled = t?.buffer
  }
  catch (e) {
    setInterval(async () => await init(mainContent, i + 1), 500)
  }
}
</script>
<template>
  <!-- <div v-html="typst.compiled" /> -->
  <VuePdfApp style="height: 100vh;" :pdf="typst.compiled" />

</template>
<style lang="css"></style>