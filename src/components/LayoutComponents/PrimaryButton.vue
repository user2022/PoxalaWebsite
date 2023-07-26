<template>
    <button @click="onClick" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-red-500/25 dark:hover:bg-red-500/50 dark:border-red-500">
        {{text}}
    </button>
</template>

<script>
export default {
    name: "PrimaryButton",
    props: ['onClick', 'text']
}
</script>

<style scoped>

</style>