<template>
<main>
  <MainLayout>
    <div class="flex flex-col justify-center items-center">
      <template v-for="(image, index) in images">
        <img :key="index" :src="image" :alt="index" class="rounded-md mt-2 mb-2" />
      </template>
    </div>
  </MainLayout>
</main>
</template>

<script>
import MainLayout from "@/components/LayoutComponents/MainLayout";
export default {
  name: "Discord",
  components: {MainLayout},
  data() {
    return {
      images: ['https://i.imgur.com/Aav5oIL.png', 'https://i.imgur.com/9snRq8n.png', 'https://i.imgur.com/Rqmdul7.png' , 'https://i.imgur.com/B0PfkZc.png', 'https://i.imgur.com/HlXrYC9.png']
    }
  }
}
</script>

<style scoped>

</style>