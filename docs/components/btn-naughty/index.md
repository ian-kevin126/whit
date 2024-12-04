---
description: 一个悬停时会越跑越远的按钮，像极了你家那只欠揍的猫！(._.`)
---

<script setup>
import BasicUsage from '../../../src/components/btn-naughty/examples/basic-usage.vue'
import MovingDistance from '../../../src/components/btn-naughty/examples/moving-distance.vue'
import CustomButton from '../../../src/components/btn-naughty/examples/custom-button.vue'
import CustomRubbing from '../../../src/components/btn-naughty/examples/custom-rubbing.vue'
</script>

# 调皮的按钮 <Badge type="info" text="button" />

悬停时会越跑越远的按钮。

越想撸他，就跑得越远，和你家的猫一樣。(._.`)

## 使用范例

### 基本用法

当按钮状态为 disabled 并触发 hover、click、key enter 事件时，按钮会开始乱跑

<basic-usage title="basic-usage"/>

::: details 查看代码
<<< ../../../src/components/btn-naughty/examples/basic-usage.vue
:::

### 移动距离

指定 maxDistanceMultiple 可以设定最大移动距离倍数（自身宽高倍数），若按钮跑出指定范围或超出画面，都会自动回归原点。

<moving-distance title="moving-distance"/>

::: details 查看代码
<<< ../../../src/components/btn-naughty/examples/moving-distance.vue
:::

### 自定义按钮

可以使用 default slot 自定义按钮样式

<custom-button title="custom-button"/>

::: details 查看代码
<<< ../../../src/components/btn-naughty/examples/custom-button.vue
:::

### 自定义拓印

你说拓印能不能自定义？可以啦，哪次不可以了。

使用 rubbing slot，自定义按钮拓印內容

<custom-rubbing title="custom-rubbing"/>

::: details 查看代码
<<< ../../../src/components/btn-naughty/examples/custom-rubbing.vue
:::

## 原理

原理xxx

## API

### Props

<<< ../../../src/components/btn-naughty/btn-naughty.vue/#Props

### Emits

<<< ../../../src/components/btn-naughty/btn-naughty.vue/#Emits

### Methods

<<< ../../../src/components/btn-naughty/btn-naughty.vue/#Methods

### Slots

<<< ../../../src/components/btn-naughty/btn-naughty.vue/#Slots