<script setup lang="ts">
import PostCard from "@/entities/PostCard.vue";
import {IPost} from "@/shared/interfaces/post.ts";
import SkeletonBase from "@/shared/ui/SkeletonBase.vue";
interface Props {
  posts: IPost[],
  isLoading?: boolean,
}
const props = defineProps<Props>()
</script>

<template>

  <div class="list">
    <SkeletonBase v-if="props.isLoading" class="list--skeleton"/>
    <template v-else-if="props.posts.length">
      <transition-group name="list" tag="div">
        <PostCard
            v-for="post in props.posts" :key="post.id"
            :post="post"
        />
      </transition-group>
    </template>
    <div class="list__undefined" v-else>Nothing</div>
  </div>
</template>

<style scoped lang="scss">
.list{
  > *{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &--skeleton{
    height: 100px;
    width: 100%;
    border: 0;
    margin: 16px 0;
  }
  &__undefined{
    @include font-default;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 100ms ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>