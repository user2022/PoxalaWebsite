<template>
  <router-link
      active-class="is-active bg-gray-900 hover:bg-gray-900 text-white dark:bg-red-500 dark:bg-opacity-30 border dark:border-red-500 dark:text-white"
      :to="url"
      class="border text-gray-300 hover:bg-gray-700 border-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer dark:border-zinc-900 dark:hover:bg-red-500 dark:hover:border-red-500 dark:hover:bg-opacity-30 border-gray-900 dark:hover:border-red-500 dark:text-white">
    {{text}}
  </router-link>
</template>

<script>
export default {
  name: "NavItem",
  props: ['text', 'url']
}
</script>

<style scoped>

</style>