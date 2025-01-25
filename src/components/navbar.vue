<template>
    <div>
        <nav class="p-4 fixed top-0 left-0 right-0 z-50">
            <div class="max-w-screen-xl mx-auto flex justify-between items-center">
                <div class="text-white text-xl font-semibold">
                    Portfolio
                </div>

                <!-- Links de navegação para telas grandes -->
                <div class="hidden items-center md:flex space-x-6 text-white">
                <router-link to="/home" class="hover:text-gray-300 cursor-pointer">Home</router-link>
                <router-link to="/about" class="hover:text-gray-300 cursor-pointer">Sobre mim</router-link>
                <router-link to="/trilha" class="hover:text-gray-300 cursor-pointer">Experiencia</router-link>
                <router-link to="/portfolio" class="hover:text-gray-300 cursor-pointer">Portfolio</router-link>
                <router-link to="/contact">
                    <button class="bg-transparent text-red-500 font-semibold py-2 px-4 border border-red-500 rounded cursor-pointer">
                        Contact me
                    </button>
                </router-link>
                </div>

                <!-- Menu de hambúrguer ou "X" para telas menores -->
                <div class="md:hidden">
                    <button @click="toggleMenu" class="text-white">
                        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    
                    <button @click="toggleMenu" v-if="menuOpen" class="text-white">   
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Menu dropdown para telas pequenas -->
        <div v-if="menuOpen" class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 text-white p-4 flex flex-col justify-center items-center">
            <router-link to="/home" class="block py-2 px-4 hover:bg-gray-700">Home</router-link>
            <router-link to="/about" class="block py-2 px-4 hover:bg-gray-700">Sobre mim</router-link>
            <router-link to="/trilha" class="block py-2 px-4 hover:bg-gray-700">Experiencia</router-link>
            <router-link to="/portfolio" class="block py-2 px-4 hover:bg-gray-700">Portfolio</router-link>
            <router-link to="/contact">
                <button class="w-full bg-transparent text-red-500 font-semibold py-2 px-4 border border-red-500 rounded cursor-pointer">
                Contact me
                </button>
            </router-link>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "navbar",
    data() {
        return {
        menuOpen: false
        };
    },
    methods: {
        toggleMenu() {
        this.menuOpen = !this.menuOpen; 
        },
        closeMenu() {
        this.menuOpen = false;
        },
        closeMenuOnResize() {
        if (window.innerWidth >= 768) {
            this.closeMenu();
        }
        }
    },
    watch: {
        // Fechar o menu quando a tela for grande o suficiente
        $route() {
        this.closeMenu();
        }
    },
    mounted() {
        window.addEventListener('resize', this.closeMenuOnResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.closeMenuOnResize);
    }
};
</script>
  