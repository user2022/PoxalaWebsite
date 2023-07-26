<template>
    <select
        :id="sId"
        :name="name"
        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-green-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:focus:border-zinc-600 dark:focus:ring-zinc-600 dark:bg-zinc-700 dark:border-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400"
        :default="selectDefault"
        :value="selectModel"
        @change="onChange"
        @input="$emit('input', $event.target.value)"
    >
        <slot>

        </slot>
    </select>
</template>

<script>
export default {
    name: "SelectBox",
    props: ['selectModel', 'onChange', 'sId', 'name', 'selectDefault'],
    computed: {
        test: {
            get() { return this.selectModel },
            set(value) { this.$emit('update:model', value) }
        }
    }
}
</script>

<style scoped>

</style>