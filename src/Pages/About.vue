<template>
    <div class="h-full w-screen bg-[#25273e] flex justify-center items-center flex-col">
        <div class="flex gap-10 mt-24">

            <!-- Imagem profile -->
            <div class="flex items-center">
                <img
                    src="/Main/img_perfil.jpg"
                    alt="Imagem de Perfil"
                    class="md:w-80 md:h-80 lg:w-96 lg:h-96"
                />
            </div>

            <div class="flex text-justify flex-col">

                <!-- Descrição sobre mim -->
                <p class="text-red-400 text-4xl md:text-4xl lg:text-2xl font-semibold">Descobrir</p>
                <div class="flex gap-20">
                    <p class="text-white text-4xl md:text-4xl lg:text-5xl mt-3">
                        <span class="border-b-2 border-red-400 inline-block w-16 pb-2">Sobre</span> 
                    </p>
                    <p class="text-white text-4xl md:text-4xl lg:text-5xl mt-3">Mim</p>
                </div>
                <div class="flex max-w-[620px] mt-6">
                    <p class="text-white">Sou formado em Desenvolvimento de Sistemas pela ETEC e Análise e Desenvolvimento de Sistemas pela Unicesumar. 
                    Iniciei minha graduação na Fatec, onde aprofundei meus conhecimentos em programação e desenvolvimento de software. Posteriormente, transferi meus estudos para a Unicesumar, onde finalizei minha formação.</p>
                </div>

                <!-- Informações pessoais -->
                <div class="w-[620px] h-[200px] mt-6 border-1 border-red-500 outline">
                    <div class="grid grid-cols-2 gap-4 ml-6 mt-5">
                        <!-- Primeira coluna -->
                        <p class="text-white">Nome: Mesaque </p>
                        <p class="text-white">Idade: 20 anos</p>
                        <p class="text-white">Telefone: (18 99114-4799) </p>
                        <p class="text-white">Endereço: Guararapes-SP</p>
                    
                        <!-- Segunda coluna -->
                         <p class="text-white">Experiência: 2 anos </p>
                         <p class="text-white">Freelancer: Aberto </p>
                         <p class="text-white">Email: mesaque1212@gmail.com </p>
                         <p class="text-white">Especialização: Desenvolvimento Web</p>
                    </div>
                    
                </div>

                <!-- Download button -->
                <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mt-6 w-32 rounded cursor-pointer">
                    <span class="flex justify-center items-center">
                        <!-- Ícone de Download -->
                        Baixar
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>

        <!-- Formação Acadêmica - Timeline -->
        <div class="flex flex-col mt-12 w-[1100px]">
            <p class="text-white font-semibold mb-6 text-3xl">Formação academica</p>
            <ol class="items-center ml-10 mt-2 sm:flex">

                <!-- ETEC - Escola Técnica Estadual de São Paulo -->
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Etec - Guararapes</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">Curso Técnico Integrado, ADS</p>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan de 2019 - Dez de 2021</time>
                    </div>
                </li>

                <!-- FATEC - Faculdade de Tecnologia de São Paulo -->
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Fatec - Araçatuba</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">Análise e Desenvolvimento de Sistemas</p>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan de 2022 - Jan de 2024</time>
                    </div>
                </li>

                <!-- UniCesumar -->
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">UniCesumar</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">Análise e Desenvolvimento de Sistemas</p>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">fev de 2024 - jun de 2024</time>
                    </div>
                </li>
                <!-- PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul-->
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">PUC-RS</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">MBA em Gestão de Projetos e Metodologias Ágeis</p>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">jan de 2025 - abr de 2026</time>
                    </div>
                </li>
            </ol>
        </div>

        <!-- Experiência - Timeline -->
        <div class="flex flex-col mt-12 w-[1100px]">
            <p class="text-white font-semibold mb-6 text-3xl">Experiência</p>
            
            
            <div class="flex ms-10 flex-col">
                <img class="w-16 h-16" src="../../About/logo-intersolid.jpeg" alt="logo-intersolid">
                <ol class="relative border-s border-gray-200 dark:border-gray-700 ms-8 mt-4">                 
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Junior Software Developer</h3>
                        <p class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-1">Tempo integral</p>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun de 2024 - o momento • 8 meses</time>
                        <ul class="text-white ml-2 mt-2">
                            <li> • Programação: Delphi/Pascal</li>
                            <li> • Banco de Dados: Oracle, Firebird</li>
                            <li> • Experiiência com Kanban</li>
                            <li> • Ferramentas de Versionamento de códigos: SVN - Subversion</li>
                            <li> • PL/SQL</li>
                        </ul> 
                    </li>
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Estágiario</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Estágio</p>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar de 2024 - Jun de 2024 • 4 meses</time>
                        <ul class="text-white ml-2 mt-2">
                            <li> • Programação: Delphi/Pascal</li>
                            <li> • Banco de Dados: Oracle, Firebird</li>
                        </ul> 
                    </li>
                </ol>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
  };
  </script>
  