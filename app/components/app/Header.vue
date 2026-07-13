<template>
<header>
  <AppCard v-for="(link, i) in footerMainNavigation" :key="i" v-bind="link"/>
</header>
</template>

<script lang="ts" setup>
</script>

<style lang="sass" scoped>
header
  position: absolute
  top: 0
  left: 0

  display: flex

  z-index: 999
</style>