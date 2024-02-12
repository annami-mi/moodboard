<script setup lang="ts">

import ButtonBase from "@/shared/ui/ButtonBase.vue";
import IconHeart from "@/shared/ui/IconHeart.vue";
import {usePostStore} from "@/plugins/stores/modules/postStore.ts";

interface Props {
  id: number,
  isFavorite: boolean
}
const props = defineProps<Props>()

const storePost = usePostStore()
function toggleFavoritePost(){
  storePost.setPostFavorite(props.id)
}


</script>

<template>
<button-base
    @click="toggleFavoritePost"
    :class="['post__card__button-favorite', {'post__card__button-favorite--active': isFavorite}]"
>
  <IconHeart/>
</button-base>
</template>

<style scoped lang="scss">
.post__card__button-favorite{
  color: $neutral-300;
  &:hover,
  &--active{
    color: $accent-300;
  }
}
</style>