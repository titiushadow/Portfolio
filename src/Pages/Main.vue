<template>
    <div class="fixed inset-0 overflow-hidden">
        <navbar />
        <img src="/Main/img-main.jpg" alt="Imagem de Fundo" class="w-full h-full object-cover brightness-40" />

        <div class="absolute inset-0 flex flex-col items-center justify-center px-4">
            <img src="/Main/img_perfil.jpg" alt="Imagem de Perfil" class="w-32 h-32 rounded-full" />
            <h1 class="text-red-400 text-5xl mt-6 custom-font text-center">Mesaque</h1>
            <p class="text-white mt-4 text-xl text-center">Um freelancer criativo & Desenvolvedor de Sistemas</p>
        </div>

        <div class="absolute bottom-4 left-4 text-white flex items-center space-x-2">
            <span class="text-sm">─────</span>
            <span class="text-sm font-medium">Scroll Down</span>
        </div>
    </div>
</template>


<script>
import navbar from '../components/navbar.vue';
export default {
    name: "Main",
    components: {
        navbar
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

.custom-font {
  font-family: 'Poppins', sans-serif;
}
</style>
