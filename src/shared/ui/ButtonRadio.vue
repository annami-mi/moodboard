<template>
  <button-base class="button-radio">
    <div :class="['button-radio__switch', {'button-radio__switch--active': isActive}]">
      <div :class="['button-radio__switch__circle', {'button-radio__switch__circle--active': isActive}]"></div>
    </div>
    <div v-if="$slots.default" :class="['button-radio__label',{'button-radio__label--active': isActive}]"><slot/></div>
  </button-base>
</template>

<script>
import ButtonBase from "@/shared/ui/ButtonBase.vue";

export default {
  name: "ButtonRadio",
  components: {ButtonBase},
  props:{
    isActive:{
      type: Boolean,
      default(){
        return false
      },
    }
  }
}
</script>

<style lang="scss">
.button-radio{
  display: flex;
  justify-content: center;
  gap: 15px;
  &__label{
    @include font-default;
    padding-top: 3px;
  }
  &__switch{
    width: 50px;
    height: 24px;
    background-color: $neutral-300;
    border-radius: 24px;
    position: relative;
    cursor: pointer;
    &__circle{
      width: 20px;
      height: 20px;
      position: absolute;
      left: 2px;
      right: auto;
      top: 50%;
      transform: translate(0, -50%);
      background-color: $neutral-100;
      border-radius: 50%;
      transition: 200ms;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      &--active{
        left: 100%;
        transform: translate(-22px, -50%);
        background-color: $neutral-200;
      }
    }
    &--active{
      background: $accent-100;
    }
  }
}
</style>
