<template>
  <div class=" w-full h-screen absolute top-0 left-0 md:pl-72 lg:pl-80 xl:pl-96">
        <div class="w-60 mx-auto mt-44 h-72 text-center text-gray-100 text-3xl">
            <h1 class="font-semibold underline"><i>404 Error</i></h1>
            <h1 class="font-bold mt-4">Page Not Found</h1>
            <p class="font-medium text-sm mt-4">Return to the 
                <router-link to="/"  class="hover:text-blue-900 hover:underline"
                >Home Page</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ErrorPage"
}
</script>

<style>

</style>