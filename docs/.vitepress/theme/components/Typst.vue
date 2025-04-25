<script setup lang="ts">
import axios from "axios";
import { reactive, onMounted, watch, ref } from 'vue';
import { $typst } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs';
import { createTypstCompiler } from '@myriaddreamin/typst.ts/dist/esm/compiler.mjs';


const typst = reactive({
  compiled: '',
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
    typst.compiled = await $typst.svg({ mainContent });
  }
  catch (e) {
    setInterval(async () => await init(mainContent, i + 1), 500)
  }
}
</script>
<template>
  <div v-html="typst.compiled" />
</template>
<style lang="css"></style>