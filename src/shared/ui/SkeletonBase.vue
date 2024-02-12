<template>
  <div class="skeleton"></div>
</template>

<script>
export default {
  name: "SkeletonBase"
}
</script>

<style lang="scss">
.skeleton{
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: $neutral-100;
  background-image: linear-gradient(110deg, #434242 8%, #4D4D4D 18%, #434242 33%);
  background-size: 200% 100%;
  animation: 1.5s loading linear infinite;
}
@keyframes loading{
  to{
    background-position-x: -200%
  }
}
</style>