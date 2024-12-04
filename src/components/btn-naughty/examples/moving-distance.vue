<template>
  <div class="flex flex-col gap-4 w-full border border-gray-300 p-6">
    <div>
      <label class="text-sm font-bold"> 最大移动距离（為按钮尺寸倍数） </label>

      <div class="mt-1 border rounded">
        <input v-model="maxMultiple" class="w-full p-2" />
      </div>
    </div>

    <div class="flex justify-center">
      <btn-naughty disabled :max-distance-multiple="maxMultiple" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import BtnNaughty from "../btn-naughty.vue";

const maxMultiple = ref(5);
</script>
