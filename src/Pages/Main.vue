<template>
    <div class="relative inset-0 overflow-x-hidden min-h-screen">
        <!-- Navbar -->
        <navbar />

        <!-- Imagem de Fundo -->
        <div class="relative w-full h-screen">
            <img
                src="/Main/img-main.jpg"
                alt="Imagem de Fundo"
                class="w-full h-full object-cover brightness-40"
            />

        <!-- Conteúdo Principal -->
            <div class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <img
                    src="/Main/img_perfil.jpg"
                    alt="Imagem de Perfil"
                    class="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full"
                />
                <h1 class="text-red-400 text-3xl md:text-4xl lg:text-5xl mt-4 custom-font">
                    Mesaque
                </h1>
                <p class="text-white text-lg md:text-xl lg:text-2xl mt-2 md:mt-4">
                    Um freelancer criativo & Desenvolvedor de Sistemas
                </p>
            </div>

            <!-- Scroll Down -->
            <div class="absolute bottom-4 left-4 text-white flex items-center space-x-2">
            <span class="text-sm">─────</span>
            <span class="text-sm font-medium">Scroll Down</span>
        </div>
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
