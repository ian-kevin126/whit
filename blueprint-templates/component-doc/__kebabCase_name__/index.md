---
description: 
---

<script setup>
import SourceLinkList from '../../../src/components/source-link-list.vue'

import BasicUsage from '../../../src/components/{{kebabCase name}}/examples/basic-usage.vue'
</script>

# 標題

說明說明

## 使用範例

### 基本用法

當按鈕狀態為 disabled 並觸發 hover、click、key enter 事件時，按鈕會開始亂跑

<basic-usage/>

::: details 查看範例原始碼
<<< ../../../src/components/{{kebabCase name}}/examples/basic-usage.vue
:::

## 原理

滑鼠碰觸按鈕時，計算滑鼠位置到按鈕中心的單位向量，並以此向量為基準，移動一個按鈕尺寸的距離。

如果按鈕移動到畫面外，則會自動返回原點，使用 IntersectionObserver 實作。

📚 [甚麼是 IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)

::: danger 注意！Σ(ˊДˋ;)
請不要將 overflow 設定為 hidden，否則按鈕會啪沒了，消失的無影無蹤。
:::

## 原始碼

<source-link-list name="{{kebabCase name}}"/>

## API

### Props

<<< ../../../src/components/{{kebabCase name}}/{{kebabCase name}}.vue/#Props

### Emits

<<< ../../../src/components/{{kebabCase name}}/{{kebabCase name}}.vue/#Emits

### Methods

<<< ../../../src/components/{{kebabCase name}}/{{kebabCase name}}.vue/#Methods

### Slots

<<< ../../../src/components/{{kebabCase name}}/{{kebabCase name}}.vue/#Slots
