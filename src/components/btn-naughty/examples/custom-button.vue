<template>
  <div class="flex justify-center border border-gray-300 p-6">
    <btn-naughty disabled z-index="30">
      <div class="custom-button">自定义按钮</div>
    </btn-naughty>
  </div>
</template>

<script setup lang="ts">
import BtnNaughty from "../btn-naughty.vue";
</script>

<style scoped lang="sass">
.custom-button
  background: #ff8345
  color: white
  padding: 0.5rem 1.5rem
  border-radius: 999rem
</style>
