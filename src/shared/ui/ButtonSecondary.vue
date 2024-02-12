<script setup lang="ts">

import ButtonBase from "@/shared/ui/ButtonBase.vue";
</script>

<template>
<button-base class="button button--secondary"><slot/></button-base>
</template>

<style lang="scss">
.button{
  &--secondary{
    color: $neutral-200;
    background-color: $accent-200;
    border-radius: 10px;
    padding: 12px 24px 11px;
    &:hover{
      background-color: $accent-200--hover
    }
  }
}
</style>