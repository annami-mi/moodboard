<script setup lang="ts">

import ButtonBase from "@/shared/ui/ButtonBase.vue";
</script>

<template>
<button-base class="button button--link"><slot/></button-base>
</template>

<style lang="scss">
.button{
  &--link{
    @include p2;
    font-weight: 500;
    color: $neutral-400;
  }
}
</style>