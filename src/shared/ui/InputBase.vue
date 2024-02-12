<script setup lang="ts">
import {reactive, ref, watch} from "vue";

interface Props {
  value: string,
}
const props = withDefaults(defineProps<Props>(), {
  value:''
})

const state = reactive({
  value: props.value
})

const input = ref(null)

function toFocus () {
  setTimeout(() => {
    input.value.focus()
  }, 10);
}

const emit = defineEmits(['onInput'])

watch(() => props.value, () =>{
  state.value = props.value
})

watch(() => state.value, () =>{
  emit('onInput', state.value)
})

defineExpose({
  toFocus
})




</script>

<template>
  <input
      ref="input"
      class="input"
      v-model="state.value"
  />
</template>

<style lang="scss">
.input{
  padding: 12px 16px;
  background-color: $neutral-100;
  box-shadow: 0 1px 2px rgba(0,0,0, .25);
  border: 1px solid transparent;
  border-radius: 10px;
  &:focus{
    border-color: $accent-100;
  }
}
</style>