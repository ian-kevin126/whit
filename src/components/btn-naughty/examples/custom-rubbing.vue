<template>
  <div class="flex justify-center border border-gray-300 p-6">
    <btn-naughty disabled z-index="30">
      <template #rubbing>
        <div class="rubbing">啪！跑了</div>
      </template>

      <template #default>
        <div class="btn">自定义按钮</div>
      </template>
    </btn-naughty>
  </div>
</template>

<script setup lang="ts">
import BtnNaughty from "../btn-naughty.vue";
</script>

<style scoped lang="sass">
.btn
  padding: 0.5rem 1.5rem
  background: #26A69A
  border-radius: 999rem
  font-weight: bold
  color: white
  cursor: pointer

.rubbing
  padding: 0.5rem 1.5rem
  background: #FEFEFE
  border-radius: 999rem
  border: 1px dashed #777
  text-align: center
</style>
