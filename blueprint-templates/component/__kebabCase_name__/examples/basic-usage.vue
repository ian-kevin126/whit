<template>
  <div class="flex flex-col gap-4 w-full border border-gray-300 p-6">
    <div class="flex flex-col gap-4 border p-4 rounded">
      <!-- <base-checkbox
        v-model="disable"
        label="停用按钮"
      />

      <base-input
        v-model="text"
        placeholder="點擊這裡並使用 tab 將焦點轉移至按钮後，再按下 Enter 看看"
        class=" w-full "
      /> -->
    </div>

    <div class="flex"><{{kebabCase name}} /></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import BaseCheckbox from '../../base-checkbox.vue';
import BaseInput from '../../base-input.vue';
import {{pascalCase name}} from '../{{kebabCase name}}.vue';

const text = ref('');
const disable = ref(true);
</script>
