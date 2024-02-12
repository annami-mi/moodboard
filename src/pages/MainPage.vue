<script setup lang="ts">
import {computed} from "vue";
import appPackage from "../../package.json";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import PostFilter from "@/entities/PostFilter.vue";
import {useMoodBoardStore} from "@/plugins/stores/modules/moodBoardStore.ts";

const siteName = computed(() => appPackage.name)
const storeMoodBoard = useMoodBoardStore()
const notes = computed(()=> storeMoodBoard.notes)

const leftDays = computed(()=> {
  const now = new Date()
  const next = new Date(new Date().setMonth(now.getMonth() + 1))
  next.setDate(0)
  return Math.round((next.getTime() - now.getTime()) / 1000 / 60 / 60 / 24)
})

</script>

<template>
  <default-layout>
<div class="container">
  <h1 class="h1">{{siteName}}</h1>
  <section class="moodboard">
    <div class="notes">
      <div>{{notes.quote}}</div>
      <br/>
      <div>{{'– ' + notes.author}}</div>
    </div>
    <div class="gallery">
      <img src="@/shared/assets/2.png" alt="gallery">
      <img src="@/shared/assets/3.png" alt="gallery">
      <img src="@/shared/assets/1.png" alt="gallery">
    </div>
  </section>

  <section>
    <div class="section__header">
      <h2 class="h2">My monthly goals</h2>
      <div class="timer">{{ leftDays + ' days to the end of the month' }}</div>
    </div>
    <PostFilter/>
    <router-view/>
  </section>
</div>
  </default-layout>
</template>

<style scoped lang="scss">
.h1{
  @include title-section;
  font-weight: 400;
  font-size: 32px;
  margin-bottom: 32px;
  @media screen and (min-width: $tablet) {
    font-size: 48px;
    margin-bottom: 56px;
  }
}

.moodboard{
  margin: 32px 0;
  display: grid;
  gap: 16px;
  @media screen and (min-width: $tablet) {
    grid-template-columns: 1fr 2fr;
    gap: 48px;
    margin: 64px 0;
  }
}

.notes{
  @include font-default;
  font-style: italic;
  font-size: 16px;
  color: $neutral-200;
  padding: 24px;
  padding-right: 32px;
  background-color: $accent-100;
  border-radius: 10px;
  @media screen and (min-width: $tablet) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
}

.gallery{
  display: none;
  @media screen and (min-width: $tablet) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 70px 70px;
    gap: 24px;
  }
  > img{
    display: block;
    border-radius: 70px;
    object-fit: cover;
    height: 70px;
    width: 100%;
    &:last-child{
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }
}
.h2{
  @include title-section;
}

.section__header{
  margin-bottom: 24px;
  @media screen and (min-width: $tablet) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.timer{
  @include font-default;
  color: $accent-200;
}
</style>