<template>
  <Hero />
   <div class=" container mx-auto py-8 sm:py-20 px-4 sm:px-0 ">
     <Articles />
   </div>
</template>

<script>
import Hero from "./Hero.vue"
import Articles from "../../components/Articles.vue";

export default {
  
  components : {
    Hero,
    Articles,
  }
  
}
</script>
