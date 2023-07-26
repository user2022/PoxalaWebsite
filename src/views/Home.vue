<template>
    <MainLayout>
        <div class="text-center mt-20">
            <h1 class="text-8xl font-bold text-[#27304c] dark:text-red-600">Poxnora Rune DB</h1>
            <h2 class="text-3xl text-gray-800 dark:text-zinc-200">Filter through runes and build your deck</h2>
        </div>

        <div class="flex justify-center mt-12">
            <router-link to="/runes">
                <button class="pt-4 pb-4 pr-6 pl-6 bg-indigo-600 text-white text-lg hover:bg-indigo-700 rounded-lg dark:bg-red-500/25 border dark:border-red-500 dark:hover:bg-red-500/50">Start Building</button>
            </router-link>
        </div>
    </MainLayout>
</template>

<script>
    import MainLayout from "@/components/LayoutComponents/MainLayout";
    export default {
        name: "Home",
      components: {MainLayout},
      metaInfo: {
            title: 'Poxala'
        }
    }
</script>

<style scoped>
.main-logo {
    font-size: 100px;
    font-weight: 700;
    color: white;
    position: absolute;
}
.logo-gradient {
    background: -webkit-linear-gradient(left, #14984c, #5d0e62, #cd0b0b, yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    top: 6px;
    left: 6px;
}
.logo-cont {
    transform: translate(-50%, -50%);
    position: relative;
    width: 260px;
    height: 122px;
}
</style>