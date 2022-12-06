<template>
  <div  :class="{'grid sm:grid-cols-5 gap-4 sm:gap-12': isList}">
      <div class=" h-64 "
       :class="{'sm:h-400px sm:col-span-3':isList,
                   'sm:col-span-5': isGrid }">

          <img src="/images/image1.jpg" alt="image" class="w-full h-full object-cover">
      
      </div>
      <div class="sm:col-span-2 flex flex-col justify-between mt-1">
          <div :class="{'sm:py-2 sm:mt-0':isGrid}">
              <div class="text-md font-bold text-gray-500">Category Article</div>
              <h3 class="mt-1 text-2xl"> <router-link to="/articles/article-slug" class="hover:text-primary font-bold transition-colors duration-500">Title Lorem, ipsum dolor sit amet consectetur adipisicing.</router-link> </h3>
              <div class="mt-2 text-gray-800">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti debitis repellendus quasi, sit natus blanditiis sapiente rem quo nulla mollitia....!
              </div>
          </div>
          <div class="text-base text-gray-500 flex items-center"> 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="ml-2">
                  5 mins ago
              </div> </div>
      </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {

  props: {
     layout: {
       style: String,
       default: "list"
     }
  },
  setup(props) {
     let isGrid = computed(() => {
         return props.layout === 'grid'; 
     });


     let isList = computed(() => {
         return props.layout === 'list'; 
     });

     return {
         isGrid,
         isList
     }
  }
}
</script>

<style>

</style>