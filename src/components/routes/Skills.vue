<template>
  <div class=" w-full h-screen absolute top-0 left-0 md:pl-72 lg:pl-80 xl:pl-96"
    :class="showProfile ? 'pl-0':''">
        <div class="w-10/12 mx-auto mt-20 h-72 text-center text-gray-100 text-3xl">
            <h1 class="font-bold underline"><i>Skills</i></h1>
            <ul class="font-medium text-base mt-4">
                <li v-for="(skill, index) in skills" :key="index">{{skill}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    name: "SkillsPage",
    setup() {
        const skills = ref(["HTML", "CSS", "TailwindCSS", "Bootstrap", "Javascript", 
        "Vue", "React", "Python", "Pygame", "Flask", "Fast API", "MySQL"])

        return { skills }
    }
}
</script>

<style>

</style>