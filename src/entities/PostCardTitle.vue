<script setup lang="ts">

import ButtonLink from "@/shared/ui/ButtonLink.vue";
import InputBase from "@/shared/ui/InputBase.vue";
import {reactive, ref} from "vue";
import {usePostStore} from "@/plugins/stores/modules/postStore.ts";


interface Props {
  id: number,
  isRead: boolean,
  title: string
}
const props = defineProps<Props>()
const state = reactive({
  value : props.title,
  isActiveEdit: false,
})

const storePost = usePostStore()
function onInput(value:string){
  state.value = value
}

function onSetValue(){
  storePost.setPostTitleById(props.id, props.isRead, state.value)
  onCancel()
}

function onCancel(){
  state.isActiveEdit = false
}

const inputBase = ref(null)
function onClickEdit(){
  state.isActiveEdit = true
  state.value = props.title
  setTimeout(()=>{
    inputBase.value.toFocus()
  }, 0)

}

function onClickOutside(){
  onSetValue()
}

</script>

<template>
<div>
  <InputBase
      v-if="state.isActiveEdit"
      ref="inputBase"
      :value="state.value"
      v-click-outside="onClickOutside"
      @keydown.enter="onSetValue"
      @keydown.esc="onCancel"
      @onInput="onInput"
  />
  <template v-else>{{ props.title }} <button-link @click="onClickEdit">Edit</button-link></template>
</div>
</template>

<style scoped lang="scss">

</style>