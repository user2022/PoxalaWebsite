<template>
    <div>
        <label htmlFor="location" class="block text-sm font-medium text-gray-700">
            {{label}}
        </label>
        <select
            id="location"
            name="location"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            default="none"
        >
            <option :value="null" name="none">None</option>
            <template v-for="(item, index) in data">
                <option :key="index">{{item.name}}</option>
            </template>
        </select>
    </div>
</template>

<script>
export default {
    name: "RuneDropDowns",
    props: ['data', 'label'],
}
</script>

<style scoped>

</style>