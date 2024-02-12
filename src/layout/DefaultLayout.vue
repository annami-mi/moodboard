<script setup lang="ts">

</script>

<template>
  <div class="default-layout">
    <div class="wrap">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
.default-layout{
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background: linear-gradient(to bottom, #2F2F2F, #2A2B24);
  color: $neutral-100;
  position: relative;
  padding-top: 48px;
  padding-bottom: 118px;
  @media screen and (min-width: $tablet){
    padding-top: 148px;
  }
  &:before,
  &:after{
    content: '';
    width: 500px;
    height: 500px;
    position: fixed;
  }
  &:before{
    background: url("@/shared/assets/bumble.svg") no-repeat right top / contain;
    right: 0;
    top: 0;
  }
  &:after{
    background: url("@/shared/assets/bumble-2.svg") no-repeat left bottom / contain;
    left: 0;
    bottom: 0;
  }
}
.wrap{
  padding-left: 20px;
  padding-right: 20px;
  max-width: 710px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}
</style>