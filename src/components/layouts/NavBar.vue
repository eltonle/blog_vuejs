<template>
  <nav id="navbar" class="px-2 py-4 sm:py-4 bg-white  shadow sm:fixed w-full z-10 transition-colors duration-500 " :class="{ 'sm:bg-transparent': !showWhiteBackground }">
      <div class="container mx-auto flex flex-col sm:flex-row justify-between items-center ">
         <div class="w-full flex flex-row items-center justify-between ">
            <div class="text-3xl font-bold">
              <span :class="{ 'sm:text-white': !showWhiteBackground }">Vue</span>
              <span class="text-primary">Tips</span>
            </div>
          <div>
                <button v-show="!isVisible" class="sm:hidden" @click="toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg> 
                </button>

                <button v-show="isVisible" class="sm:hidden" @click="toggle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg> 
                </button>
            </div>
            
         </div>
          <div class=" mt-4 sm:mt-0 w-full sm:text-right sm:block sm:space-x-3 " :class="{ 'hidden': !isVisible, 'sm:text-white': !showWhiteBackground }">
              <NavBarLink to="/" label="Home"/>
              <NavBarLink to="/articles" label="Articles"/>
              <NavBarLink to="/about" label="About"/>
              <NavBarLink to="/contact" label="Contact"/>
          </div>
      </div>
  </nav>
</template> 

<script>
import NavBarLink from "./NavBarLink.vue"
import { userToggle } from '@/customerjs/userToggle'
import { ref } from 'vue'
export default {
  components: {
      NavBarLink,
  },
  setup() {
      let{ isVisible, toggle} = userToggle();
      let showWhiteBackground = ref(false);
       
      document.addEventListener("scroll", function () {
         let bodyToPosition = document.body.getBoundingClientRect().top;

         if (bodyToPosition < -150) {
           showWhiteBackground.value = true;
         } else 
         {
           showWhiteBackground.value = false;
         }
      });

      return{
          isVisible,
          toggle,
          showWhiteBackground,
      }
  }
}
</script>

<style>

</style>