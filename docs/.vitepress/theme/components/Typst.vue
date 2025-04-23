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
    typst.compiled = await $typst.svg({ mainContent });
  })
});
</script>
<template>
  <div v-html="typst.compiled" />
</template>
<style lang="css"></style>