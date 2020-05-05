<template>
  <img
    class="logo"
    v-if="$site.themeConfig.header"
    :src="$withBase($site.themeConfig.header)"
    :alt="$siteTitle"
  />
</template>

<script>
export default {
  name: "BlogHeader"
};
</script>

<style>
</style>