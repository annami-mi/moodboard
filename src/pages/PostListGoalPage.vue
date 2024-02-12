<script setup lang="ts">

import PostList from "@/entities/PostList.vue";
import {usePostStore} from "@/plugins/stores/modules/postStore.ts";
import {computed} from "vue";
const storePost = usePostStore()
const posts = computed(() => storePost.posts)
const isLoading = computed(() => storePost.isLoadingPosts)
</script>

<template>
  <PostList :posts="posts" :is-loading="isLoading"/>
</template>

<style scoped lang="scss">

</style>