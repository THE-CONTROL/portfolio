<template>
    <div class=" w-full h-screen absolute top-0 left-0 md:pl-72 lg:pl-80 xl:pl-96 pt-5
    text-center text-gray-300 overflow-auto">
        <h1 class="font-bold underline text-3xl text-gray-100"><i>Projects</i></h1>
        <div class="w-full h-fit flex flex-wrap justify-center mb-4">
            <a v-for="(item, index) in list" :key="index" :href="item.website">
                <div class="bg-gray-900 mt-4 mx-5 font-semibold text-lg hover:bg-gray-300
                hover:text-gray-900">
                    <img :src="item.image" alt="project" class="w-36 h-20 object-cover 
                    hover:opacity-80">
                    <div class="w-36">
                        <h2>{{ item.name }}</h2>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectsPage",
    setup() {
        const list = [ 
            {"name": "Pygame Project", "website": "https://github.com/THE-CONTROL/Pygame-Project", 
            "image": require("../../assets/img3.jpg")},
            {"name": "Vue Project", "website": "https://willowy-gaufre-74f83f.netlify.app/", 
            "image": require("../../assets/img1.jpg")},
            {"name": "Flask Project", "website": "https://control.pythonanywhere.com/", 
            "image": require("../../assets/img2.jpg")},
            {"name": "Blog Project", "website": "https://phenomenal-tartufo-128db5.netlify.app/", 
            "image": require("../../assets/img4.png")},
            {"name": "Gallery Project", "website": "https://elaborate-medovik-171096.netlify.app/", 
            "image": require("../../assets/fa.jpg")},
         ]

        return { list }
    }
}
</script>

<style>

</style>