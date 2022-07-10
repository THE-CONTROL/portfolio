<template>
    <div class=" w-full h-screen absolute top-0 left-0 md:pl-72 lg:pl-80 xl:pl-96">
        <div class="w-10/12 mx-auto mt-20 h-72 text-center text-gray-100 text-3xl">
            <h1 class="font-bold underline"><i>Contact</i></h1>
            <ul class="font-medium text-base mt-4">
                <li><fa :icon="['fab', 'instagram']"/>
                    <a href="https://www.instagram.com/lawsonekho" class="hover:text-blue-900 
                    hover:underline"> @LawsonEkho</a></li>
                <li><fa :icon="['fab', 'twitter']" class="text-blue-700"/>
                    <a href="https://twitter.com/LawsonEkho?t=Vrqd66efsxloF-ca84jkqQ&s=08" 
                    class="hover:text-blue-900 hover:underline"> @LawsonEkho</a>
                </li>
                <li><fa :icon="['fab', 'linkedin']" class="text-blue-500"/>
                    <a href="https://www.linkedin.com/in/lawson-ekhorutomwen-26aa5123b" 
                    class="hover:text-blue-900 hover:underline"> Lawson Ekhorutomwen</a>
                </li>
                <li><fa :icon="['fab', 'github']"/>
                    <a href="https://github.com/THE-CONTROL" class="hover:text-blue-900 hover:underline"
                    > THE-CONTROL</a>
                </li>
                <li><fa :icon="['fas', 'envelope']" class="text-red-500"/>
                    <a href="https://www.lawsonekhorutomwen@gmail.com" class="hover:text-blue-900 hover:underline"
                    > lawsonekhorutomwen@gmail.com</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactPage"
}
</script>

<style>

</style>