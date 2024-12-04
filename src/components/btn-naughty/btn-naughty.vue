<template>
  <!-- 容器 -->
  <div class="relative">
    <!-- 拓印容器 -->
    <div class="absolute inset-0 pointer-events-none">
      <slot name="rubbing">
        <!-- 拓印 -->
        <div class="btn-rubbing" />
      </slot>
    </div>

    <!-- 按钮容器 -->
    <div
      ref="carrierRef"
      :style="carrierStyle"
      class="carrier"
      tabindex="0"
      @click="handleTrigger"
      @keydown.enter="handleTrigger"
      @mouseenter="handleTrigger"
    >
      <slot v-bind="attrs">
        <button class="btn">
          {{ props.label }}
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties, reactive, ref, useAttrs, watch } from "vue";
import {
  throttleFilter,
  useIntersectionObserver,
  useMouseInElement,
} from "@vueuse/core";

// #region Props
interface Props {
  /** 按钮內文字 */
  label?: string;
  /** 是否停用 */
  disabled?: boolean;
  /** 同 CSS z-index */
  zIndex?: number | string;
  /** 最大移動距離，為按钮尺寸倍數 */
  maxDistanceMultiple?: number;
  /** 同 html tabindex */
  tabindex?: number | string;
}
// #endregion Props
const props = withDefaults(defineProps<Props>(), {
  label: "我是按钮",
  disabled: false,
  zIndex: undefined,
  maxDistanceMultiple: 5,
  tabindex: undefined,
});

// #region Emits
const emit = defineEmits<{
  (e: "click"): void;
  /** 開始移動時 */
  (e: "run"): void;
  /** 開始返回時 */
  (e: "back"): void;
}>();
// #endregion Emits

// #region Slots
defineSlots<{
  /** 按钮 */
  default?: () => unknown;
  /** 拓印 */
  rubbing?: () => unknown;
}>();
// #endregion Slots

const attrs = useAttrs();

const carrierRef = ref<HTMLDivElement>();

/** throttleFilter 用來降低偵測滑鼠變化的更新速度，可以節省效能
 *
 * 設為 35（單位是 ms）是大概取個 30fps 左右的整數，也就是 1000ms / 30 = 33，這裡取 35。
 */
const mouseInElement = reactive(
  useMouseInElement(carrierRef, {
    eventFilter: throttleFilter(35),
  })
);

/** 以按钮中心為 0 點的滑鼠位置 */
const mousePosition = computed(() => ({
  x: mouseInElement.elementX - mouseInElement.elementWidth / 2,
  y: mouseInElement.elementY - mouseInElement.elementHeight / 2,
}));

/** 按钮容器偏移量 */
const carrierOffset = ref({ x: 0, y: 0 });
/** 利用 style 產生偏移效果 */
const carrierStyle = computed<CSSProperties>(() => {
  const { x, y } = carrierOffset.value;

  const cursor = props.disabled ? "not-allowed" : "pointer";

  return {
    zIndex: props.zIndex,
    transform: `translate(${x}px, ${y}px)`,
    cursor,
  };
});

/** 計算向量長度 */
function getVectorLength({
  x,
  y,
  z = 0,
}: {
  x: number;
  y: number;
  z?: number;
}) {
  return Math.sqrt(x * x + y * y + z * z);
}

/** 計算單位向量 */
function getUnitVector({ x, y, z = 0 }: { x: number; y: number; z?: number }) {
  const magnitude = getVectorLength({ x, y, z });

  return {
    x: x / magnitude,
    y: y / magnitude,
    z: z / magnitude,
  };
}

function back() {
  carrierOffset.value.x = 0;
  carrierOffset.value.y = 0;

  emit("back");
}

function run() {
  /** 取得按钮中心到滑鼠的單位方向 */
  const direction = getUnitVector(mousePosition.value);

  /** 往遠離滑鼠的方向移動一個按钮的距離 */
  carrierOffset.value.x -= direction.x * mouseInElement.elementWidth;
  carrierOffset.value.y -= direction.y * mouseInElement.elementHeight;

  // 讓元素離開 focus 狀態
  carrierRef.value?.blur();

  /** 判斷是否超出限制距離 */
  const maxDistance = getVectorLength({
    x: mouseInElement.elementWidth * Number(props.maxDistanceMultiple),
    y: mouseInElement.elementHeight * Number(props.maxDistanceMultiple),
  });
  const distance = getVectorLength(carrierOffset.value);
  const outOfRange = distance > maxDistance;

  if (outOfRange) {
    back();
  } else {
    emit("run");
  }
}

function handleTrigger() {
  emit("click");

  if (!props.disabled) return;
  run();
}

/** disabled 解除時，回歸原位 */
watch(
  () => props.disabled,
  (value) => {
    if (props.disabled) return;
    back();
  }
);

/** 滑鼠移動到按钮上時 */
watch(
  () => mouseInElement.isOutside,
  (value) => {
    if (value || !props.disabled) return;
    run();
  }
);

/** 按钮被遮擋時回歸原位 */
useIntersectionObserver(carrierRef, (value) => {
  if (value[0]?.isIntersecting) return;
  back();
});

// #region Methods
defineExpose({
  /** 按钮目前偏移量 */
  offset: carrierOffset,
});
// #endregion Methods
</script>

<style scoped lang="sass">
.btn-rubbing
  margin-top: 10px
  border-radius: 0.25rem

.btn
  width: 100%
  height: 100%
  padding: 0.5rem 1rem
  border: 1px solid #444
  border-radius: 0.25rem
  background: #FEFEFE
  transition-duration: 0.2s
  &:active
    transition-duration: 0.1s
    transform: scale(0.98)

.carrier
  transition-duration: 0.3s
  transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1)
</style>
