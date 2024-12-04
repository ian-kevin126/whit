<!-- <template></template> -->

<script setup lang="ts">
import { ref } from "vue";

// #region Props
interface Props {
  modelValue?: string;
}
// #endregion Props
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
});

// #region Emits
const emit = defineEmits<{
  "update:modelValue": [value: Props["modelValue"]];
}>();
// #endregion Emits

// #region Slots
defineSlots<{
  default?: () => unknown;
}>();
// #endregion Slots

// #region Methods
defineExpose({});
// #endregion Methods
</script>

<style scoped lang="sass"></style>
