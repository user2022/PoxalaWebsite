<template>
    <div>
        <img style="transform: scale(1.2, 1.3); margin-top: 3px" :src="`https://d2aao99y1mip6n.cloudfront.net/images/runes/med/${rune.hash}.jpg`" :alt="rune.name">
    </div>
</template>

<script>
export default {
    name: "RuneSmallerDisplay",
    props: ['rune']
}
</script>

<style scoped>

</style>