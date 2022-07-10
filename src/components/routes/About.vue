<template>
  <div class=" w-full h-screen absolute top-0 left-0 md:pl-72 lg:pl-80 xl:pl-96">
        <div class="w-10/12 mx-auto mt-20 h-72 text-center text-gray-100 text-3xl">
            <h1 class="font-bold underline"><i>About Me</i></h1>
            <p class="font-medium text-base mt-4">
                I am Lawson Ekhorutomwen. I am a full stack web developer and a
                second year medical student at the University of Benin. Although I am currently
                based in Benin City, Edo State, I am open to remote employment opportunities
                for companies around the globe. 
            </p>
            <p class="font-medium text-base mt-1">
                I have a few personal projects which highlight my skills as a web developer. These can
                be accessed in the 
                <router-link to="/projects" class="hover:text-blue-900 hover:underline">projects page</router-link>.
            </p>
            <p class="font-medium text-base mt-1">
                When I am not glued to my computer screen or reading my pre-clinical textbooks, I spend 
                my time watching football, listening to music, playing video games and watching movies.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutPage"
}
</script>

<style>

</style>