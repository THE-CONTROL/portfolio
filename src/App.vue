<template>
  <transition>
    <div class="w-screen h-screen bg-gray-900 pt-44 text-center" v-if="!showWebsite">
      <h1 class="mx-auto w-36 p-1 border-4 border-gray-300 rounded-3xl 
      text-gray-300 hover:bg-gray-700 font-bold text-2xl">CONTROL</h1>
    </div>
  </transition>
  <MainPage v-if="showWebsite"/>
</template>

<script>
import { ref } from '@vue/reactivity'
import MainPage from './components/MainPage.vue'
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {
    MainPage
  },
  setup() {
    const showWebsite = ref(false)
    const interval = ref("")

    function showWebFunc() {
      showWebsite.value = true
    }

    onMounted(() => {
      interval.value = setTimeout(showWebFunc, 3000)
    })

    return { showWebsite, showWebFunc }
  }
}
</script>

<style>
    * {
      user-select: none;
    }
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.1s ease;
    }

    .fade-enter-from {
    opacity: 0;
    }

    .fade-leave-to {
    opacity: 0;
    }
</style>