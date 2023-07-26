<template>
    <div class="mt-1">
        <input @input="$emit('input', $event.target.value)" :value="inputModel" @keyup.enter="keyup" @change="change" type="text" name="search" id="search" class="text-2xl text-gray-800 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full border-gray-300 rounded-md dark:focus:border-zinc-600 dark:focus:ring-zinc-600 dark:bg-zinc-700 dark:border-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400" placeholder="Search">
    </div>
</template>

<script>
export default {
    name: "BigSearchBox",
    props: ['inputModel', 'keyup', 'change'],
    data() {
        return {
            input: JSON.stringify(JSON.parse(this.input))
        }
    },
    computed: {
        userInput: {
            get: () => {
                return this.inputModel
            },
            set: (value) => {
                this.$emit('changeInput', value)
            }
        },
    }

}
</script>

<style scoped>

</style>