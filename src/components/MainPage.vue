<template>
    <body>
        <div class="h-screen w-screen bg-black">
        <div class="h-screen w-72 fixed lg:w-80 xl:w-96 bg-gray-300
        pt-14 text-gray-900 text-center z-40" :class="showProfile ? 'block':'hidden md:block'">
            <div class="w-full h-full pt-3">
                <img src="../assets/portpic.jpg" alt="My Picture" class="h-36 w-36 m-auto bg-black 
                rounded-full object-cover">
                <h2 class="mt-5 text-xl font-bold">Lawson Ekhorutomwen</h2>
                <p class="mt-1 text-sm">FULL STACK WEB DEVELOPER IN NIGERIA</p>
                <div class="mt-3 font-semibold">
                    <router-link @click="toggleProfile" to="/" class="hover:text-blue-900 
                    hover:underline">HOME</router-link><br>
                    <router-link @click="toggleProfile" to="/about" class="hover:text-blue-900 
                    hover:underline">ABOUT</router-link><br>
                    <router-link @click="toggleProfile" to="/contact" class="hover:text-blue-900 
                    hover:underline">CONTACT</router-link><br>
                    <router-link @click="toggleProfile" to="/skills" class="hover:text-blue-900 
                    hover:underline">SKILLS</router-link><br>
                    <router-link @click="toggleProfile" to="/education" class="hover:text-blue-900 
                    hover:underline">EDUCATION</router-link><br>
                    <router-link @click="toggleProfile" to="/projects" class="hover:text-blue-900 
                    hover:underline">PROJECTS</router-link><br>
                </div>
                <p class="mt-10"><i>Created by:</i> <span class="font-bold">CONTROL</span></p>
            </div>
        </div>
        <button @click="toggleProfile" class="z-50 fixed left-3 top-3 md:hidden">
            <fa v-if="!showProfile" :icon="['fas', 'plus-square']" class="text-gray-200 
            h-5 w-5 hover:text-gray-400"/>
            <fa v-if="showProfile" :icon="['fas', 'minus-square']" class="text-gray-900
            h-5 w-5 hover:text-gray-700"/>
        </button>
        <div class="h-screen w-full md:pl-72 lg:pl-80 xl:pl-96" :class="showProfile ? 'pl-0':
        ''">
            <div v-for="(image, index) in images" :key="index">
                <transition name="fade">
                    <img v-if="count == index" :src="image" :alt="index" 
                    class="h-full w-full opacity-40 object-cover fixed top-0">
                </transition>
            </div>
        </div>
        <router-view/>
        </div>
    </body>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onBeforeUnmount, onMounted } from '@vue/runtime-core'

export default {
    name: "MainPage",
    setup() {
        const showProfile = ref(false)
        const count = ref(0)
        const interval = ref("")
        const images = ref([require("../assets/background1.jpg"), require("../assets/background3.jpg"),
        require("../assets/background5.jpg"), require("../assets/background6.jpg"), 
        require("../assets/background7.jpg"), require("../assets/background8.jpg"), 
        require("../assets/background10.jpg"), require("../assets/background11.jpg")])

        function toggleProfile() {
            showProfile.value = !showProfile.value
        }

        function changeSlide() {
            if (count.value == images.value.length - 1) {
                count.value = 0
            }        
            else {
                count.value++
            }       
        }

        onMounted(() => {
            interval.value = setInterval(changeSlide, 5000)
        })

        onBeforeUnmount(() => {
            clearInterval(interval.value)
        })

        return { showProfile, toggleProfile, count, interval, changeSlide, images }
    }
}
</script>
