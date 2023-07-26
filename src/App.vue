<template>
  <div id="app" class="flex flex-col h-screen" :class="{dark: getTheme === 'dark'}">
        <NavBar />
        <ErrorModal v-if="this.$store.state.showErr" />
        <main class="bg-gray-100 dark:bg-zinc-800 flex-grow">
            <router-view />
        </main>
      {{process.env.FIREBASE_API}}
      <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ErrorModal from "./components/ErrorModal";

export default {
    name: 'App',
    components: {
      ErrorModal,
      Footer,
      NavBar,
    },
    computed: {
      getTheme() {
          console.log(this.$store.getters.getTheme)
          return this.$store.getters.getTheme
      }
    },
    beforeMount() {
      this.$store.dispatch('initTheme')
    },
    watch: {
      theme(newTheme) {
          newTheme === 'light' ? document.querySelector("html").classList.remove("dark") : document.querySelector("html").classList.add("dark");
      }
    }
}
</script>

<style>
    @import "assets/styles/tailwind.css";


    .popover {
        background-color: rgba(8, 8, 8, 0.89);
        padding: 7px 12px;
        color: white;
        max-width: 300px;
        z-index: 10;

        border: 2px solid rgb(96, 96, 96);
        margin-top: 7px;
    }

    .popover-2 {
        height: 34px;
    }

    .popover-small {
        background-color: blue !important;
    }

    p, h1, h2, h3 {
        margin: unset;
    }

    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #4f46ef;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #4f46ef transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }



</style>
