<script setup lang="ts">

</script>

<template>
  <div class="button"><slot/></div>
</template>

<style lang="scss">
.button {
  @include p-medium;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: 200ms;
  &:active {
    transform: scale(0.99);
  }
  &--disabled {
    @include disabled;
  }
  &--loader {
    pointer-events: none;
  }
}
</style>