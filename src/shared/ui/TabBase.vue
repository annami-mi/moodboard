<script setup lang="ts">
interface Props {
  isActive?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isActive: false
})
</script>

<template>
  <div :class="['tab', {'tab--active' : props.isActive}]"><slot/></div>
</template>

<style lang="scss">
.tab{
  @include font-default;
  color: inherit;
  position: relative;
  display: inline-block;
  cursor: pointer;
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

.router-link-exact-active.tab{
  color: $accent-100;
  &:before{
    width: 100%;
    background-color: $accent-100;
  }
}
</style>