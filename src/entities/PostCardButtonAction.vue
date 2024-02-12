<script setup lang="ts">
import ButtonPrimary from "@/shared/ui/ButtonPrimary.vue";
import {usePostStore} from "@/plugins/stores/modules/postStore.ts";
import ButtonSecondary from "@/shared/ui/ButtonSecondary.vue";
import {computed} from "vue";
interface Props {
  id: number,
  isRead: boolean
}
const props = defineProps<Props>()

const storePost = usePostStore()
function toggleReadPost(){
  storePost.setPostRead(props.id)
}

const buttonComponent = computed(() => props.isRead ? ButtonSecondary : ButtonPrimary)

</script>

<template>
  <component
      :is="buttonComponent"
      @click="toggleReadPost"
  >{{ props.isRead ? 'Mark us don`t read' : 'Mark us read' }}</component>
</template>

<style scoped lang="scss">

</style>