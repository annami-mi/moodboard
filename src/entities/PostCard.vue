<script setup lang="ts">
import PostCardButtonAction from "@/entities/PostCardButtonAction.vue";
import PostCardButtonFavorite from "@/entities/PostCardButtonFavorite.vue";
import {IPost} from "@/shared/interfaces/post.ts";
import PostCardTitle from "@/entities/PostCardTitle.vue";

interface Props {
  post: IPost
}
const props = defineProps<Props>()


</script>

<template>
<div class="post-card">
  <div class="post-card__title">
    <PostCardTitle
        :id="props.post.id"
        :is-read="props.post.isRead"
        :title="props.post.title"
    />
  </div>
  <div class="post-card__description">{{ props.post.body }}</div>
  <div class="post-card__action">
    <PostCardButtonAction
        :is-read="props.post.isRead"
        :id="props.post.id"
    />
  </div>
  <div v-if="props.post.isRead" class="post-card__favorite">
    <PostCardButtonFavorite
        :is-favorite="props.post.isFavorite"
        :id="props.post.id"
    />
  </div>
</div>
</template>

<style lang="scss">
.post-card{
  border: 1px solid $accent-100;
  padding: 24px 32px;
  border-radius: 10px;
  display: grid;
  grid-gap: 16px;
  position: relative;
  @media screen and (min-width: $tablet){
    grid-template-columns: 2fr 1fr;
  }

  &__title{
    @include title-card;
    color: $neutral-100;
  }
  &__description{
    @include font-default;
    color: $neutral-100;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  &__action{
    text-align: right;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    @media screen and (min-width: $tablet){
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  &__favorite{
    position: absolute;
    top: 24px;
    right: 32px;
  }
}
</style>