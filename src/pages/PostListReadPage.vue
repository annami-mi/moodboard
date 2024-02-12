<script setup lang="ts">

import PostList from "@/entities/PostList.vue";
import {usePostStore} from "@/plugins/stores/modules/postStore.ts";
import {computed} from "vue";
import {useRoute} from "vue-router";
const storePost = usePostStore()
const posts = computed(() => storePost.postsRead)
const postsFavorite = computed(() => storePost.getPostsFavorite())

const route = useRoute()
const postsPrimary = computed(() => route.query.favorite ? postsFavorite.value : posts.value)

</script>

<template>
  <PostList :posts="postsPrimary"/>
</template>

<style scoped lang="scss">

</style>