<template>
  <div class="overflow-x-hidden">
    <Main />
    <About />

  </div>
</template>

<script>
import Main from "../src/Pages/Main.vue";
import About from "../src/Pages/About.vue";

export default {
 name: "HomePage", // Aqui deve ser uma string
 components: {
   Main,
   About
 },
}
</script>