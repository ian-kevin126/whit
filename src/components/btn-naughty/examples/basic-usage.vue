<template>
  <div class="wrapper">
    <label class="flex items-center border p-4 rounded">
      <input v-model="disabled" type="checkbox" />
      <span class="ml-2"> 停用按钮 </span>
    </label>

    <div class="flex justify-center">
      <btn-naughty :disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import BtnNaughty from "../btn-naughty.vue";

const disabled = ref(true);
</script>

<style scoped lang="sass">
.wrapper
  border: 1px solid #ddd
  padding: 16px
  border-radius: 4px
</style>
