<template>
        <div class="h-full w-screen bg-[#25273e] flex justify-center items-center flex-col">
            <div class="flex flex-col lg:flex-row gap-10 mt-12 lg:mt-24 px-4 lg:px-0">
        <!-- Imagem profile -->
        <div class="flex justify-center items-center">
            <img
                src="/Main/img_perfil.jpg"
                alt="Imagem de Perfil"
                class="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full"
            />
        </div>

        <div class="flex flex-col text-justify items-center lg:items-start">
            <!-- Descrição sobre mim -->
            <p class="text-red-400 text-2xl md:text-3xl lg:text-4xl font-semibold">Descobrir</p>
            <div class="flex gap-6 mt-2 md:gap-6 lg:gap-10">
                <p class="text-white text-2xl md:text-3xl lg:text-4xl">
                    <span class="border-b-2 border-red-400 inline-block w-12 md:w-16 pb-1">Sobre</span>
                </p>
                <p class="text-white text-2xl md:text-3xl lg:text-4xl">Mim</p>
            </div>
            <div class="flex max-w-full lg:max-w-[620px] mt-4">
                <p class="text-white text-sm md:text-base lg:text-lg">
                    Sou formado em Desenvolvimento de Sistemas pela ETEC e Análise e Desenvolvimento de Sistemas pela Unicesumar. 
                    Iniciei minha graduação na Fatec, onde aprofundei meus conhecimentos em programação e desenvolvimento de software. Posteriormente, transferi meus estudos para a Unicesumar, onde finalizei minha formação.
                </p>
            </div>

            <!-- Informações pessoais -->
            <div class="w-full max-w-[620px] h-auto mt-6 border border-red-500 rounded-lg p-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Primeira coluna -->
                    <p class="text-white text-sm md:text-base">Nome: Mesaque</p>
                    <p class="text-white text-sm md:text-base">Idade: 20 anos</p>
                    <p class="text-white text-sm md:text-base">Telefone: (18 99114-4799)</p>
                    <p class="text-white text-sm md:text-base">Endereço: Guararapes-SP</p>
                    <!-- Segunda coluna -->
                    <p class="text-white text-sm md:text-base">Experiência: 2 anos</p>
                    <p class="text-white text-sm md:text-base">Freelancer: Aberto</p>
                    <p class="text-white text-sm md:text-base">Email: mesaque1212@gmail.com</p>
                    <p class="text-white text-sm md:text-base">Especialização: Desenvolvimento Web</p>
                </div>
            </div>

            <!-- Download button -->
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 mt-6 rounded-lg cursor-pointer flex items-center">
                Baixar
                <svg class="w-6 h-6 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"/>
                </svg>
            </button>
            </div>
        </div>

        <!-- Formação Acadêmica - Timeline -->
        <div class="flex flex-col mt-12 max-w-full px-4 sm:px-6 lg:px-8 mb-12">
            <p class="text-white font-semibold mb-6 text-2xl sm:text-3xl sm:flex text-center justify-center lg:justify-start">Formação Acadêmica</p>
            <ol class="items-center mt-2 space-y-8 sm:flex sm:flex-col sm:items-center lg:space-y-0 lg:flex-row lg:justify-between lg:flex lg:gap-8">
                <!-- ETEC -->
                <li class="relative">
                <div class="flex items-center sm:flex md:hidden lg:flex justify-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3  text-center lg:text-left">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Etec - Guararapes</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">Curso Técnico Integrado, ADS</p>
                    <time class="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">Jan de 2019 - Dez de 2021</time>
                </div>
                </li>

                <!-- FATEC -->
                <li class="relative">
                <div class="flex items-center sm:flex md:hidden lg:flex justify-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3  text-center lg:text-left">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Fatec - Araçatuba</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">Análise e Desenvolvimento de Sistemas</p>
                    <time class="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">Jan de 2022 - Jan de 2024</time>
                </div>
                </li>

                <!-- UniCesumar -->
                <li class="relative">
                <div class="flex items-center sm:flex md:hidden lg:flex justify-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3  text-center lg:text-left">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">UniCesumar</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">Análise e Desenvolvimento de Sistemas</p>
                    <time class="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">Fev de 2024 - Jun de 2024</time>
                </div>
                </li>

                <!-- PUCRS -->
                <li class="relative">
                <div class="flex items-center sm:flex md:hidden lg:flex justify-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3  text-center lg:text-left">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">PUC-RS</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">MBA em Gestão de Projetos e Metodologias Ágeis</p>
                    <time class="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">Jan de 2025 - Abr de 2026</time>
                </div>
                </li>
            </ol>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
  };
  </script>
  