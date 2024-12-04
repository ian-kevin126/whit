import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";

import BtnNaughty from "./btn-naughty.vue";

test("第一个测试", () => {
  const wrapper = mount(BtnNaughty);
  expect(wrapper).toBeDefined();
});

test("设定 label", async () => {
  const wrapper = mount(BtnNaughty);

  const label = "很长很长的 label";

  expect(wrapper.text()).not.toBe(label);

  await wrapper.setProps({ label });
  expect(wrapper.text()).toBe(label);
});

test("设定 zIndex", async () => {
  const zIndex = 9999;
  const wrapper = mount(BtnNaughty, {
    props: { zIndex },
  });

  const carrierEl = wrapper.find(".carrier").element;

  if (!(carrierEl instanceof HTMLElement)) {
    throw new Error("carrierEl 不是 HTMLElement");
  }

  expect(carrierEl.style.zIndex).toBe(zIndex.toString());
});

test("设定 maxDistanceMultiple", async () => {
  const wrapper = mount(BtnNaughty, {
    props: { maxDistanceMultiple: 1 },
  });

  // 由於最大距離是 1，所以觸發兩次後一定會超出範圍，導致返回原點
  await wrapper.find("button").trigger("click");
  await wrapper.find("button").trigger("click");

  expect(wrapper.vm.offset.x).toBe(0);
  expect(wrapper.vm.offset.y).toBe(0);
});

test("disabled 后，触发 click 会移动", async () => {
  const wrapper = mount(BtnNaughty);

  await wrapper.find("button").trigger("click");

  // 未 disabled 时，应该有 click 事件
  expect(wrapper.emitted()).toHaveProperty("click");

  expect(wrapper.vm.offset.x).toBe(0);
  expect(wrapper.vm.offset.y).toBe(0);

  await wrapper.setProps({ disabled: true });
  await wrapper.find("button").trigger("click");

  // disabled 时，应该有 run 事件
  expect(wrapper.emitted()).toHaveProperty("run");

  // 而且会产生偏移
  expect(wrapper.vm.offset.x).not.toBe(0);
  expect(wrapper.vm.offset.y).not.toBe(0);
});

test("default slot 可修改按钮 HTML 內容", async () => {
  const wrapper = mount(BtnNaughty, {
    slots: {
      default: '<span class="btn">按我</span>',
    },
  });

  // 预设的 button 不应该存在
  expect(wrapper.find("button").exists()).toBe(false);

  const target = wrapper.find("span");
  expect(target.exists()).toBe(true);
  expect(target.classes()).includes("btn");
});

test("rubbing slot 可修改拓印 HTML 內容", async () => {
  const wrapper = mount(BtnNaughty, {
    slots: {
      rubbing: '<span class="rubbing">拓印</span>',
    },
  });

  // 预设的 button 应该存在
  expect(wrapper.find("button").exists()).toBe(true);

  const target = wrapper.find("span");
  expect(target.exists()).toBe(true);
  expect(target.classes()).includes("rubbing");
});
