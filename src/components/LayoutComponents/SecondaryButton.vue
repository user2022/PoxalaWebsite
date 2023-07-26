<template>
    <button @click="onClick" type="button" class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm dark:bg-violet-900/40 dark:border-violet-500 dark:hover:bg-violet-900/70 dark:text-white">
        {{text}}
    </button>
</template>

<script>
export default {
    name: "SecondaryButton",
    props: ['onClick', 'text']
}
</script>

<style scoped>

</style>