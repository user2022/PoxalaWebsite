<template>
  <label :for="For" class="block text-sm font-medium text-gray-700 dark:text-zinc-200">
    {{text}}
  </label>
</template>

<script>
export default {
  name: "FormLabel",
  props: ['For', 'text']
}
</script>

<style scoped>

</style>