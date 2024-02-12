<script setup lang="ts">

import ButtonRadio from "@/shared/ui/ButtonRadio.vue";
import {useRoute, useRouter} from "vue-router";
import {computed, reactive, watch} from "vue";
// import {usePostStore} from "@/plugins/stores/modules/postStore.ts";

const route = useRoute()
const isReadPage = computed(() => route.name === 'Read')

const state = reactive({
  isActiveFavoriteList: false,
  isActiveReadList: false,
})

const router = useRouter()
function showFavoritePosts() {
  if(state.isActiveFavoriteList){
    router.push({path:'/read'})
    state.isActiveFavoriteList = false
  } else {
    router.push({path:'/read', query:{ favorite:'true'}})
    state.isActiveFavoriteList = true
  }
}

watch( () => isReadPage.value, () => {
  state.isActiveFavoriteList = false
})

// const storePost = usePostStore()
// const hasPosts = computed(() => storePost.posts.length)
</script>

<template>
  <div class="filter">
    <router-link class="filter__item" to="/">Goal</router-link>
    <router-link class="filter__item" to="/read">Read</router-link>

    <div class="filter__switch" v-if="isReadPage" @click="showFavoritePosts"><button-radio :is-active="state.isActiveFavoriteList">Only favorite</button-radio></div>
  </div>
</template>

<style lang="scss">
.filter{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin: 32px 0;
  &__switch{
    @media screen and (min-width: $tablet){
      margin-left: auto;
    }
  }
  &__item{
    @include font-default;
    color: inherit;
    position: relative;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    &:before{
      content: '';
      width: 0;
      height: 2px;
      transition: 200ms;
      position: absolute;
      left: 0;
      bottom: -2px;
    }
    &:hover,
    &--active{
      color: $accent-100;
      &:before{
        width: 100%;
        background-color: $accent-100;
      }
    }
  }
}

.router-link-exact-active.filter__item{
  color: $accent-100;
  &:before{
    width: 100%;
    background-color: $accent-100;
  }
}
</style>