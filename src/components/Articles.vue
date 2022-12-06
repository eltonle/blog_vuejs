<template>
  <div :class="{
     'space-y-8 sm:space-y-16': isList,
     'grid sm:grid-cols-3 sm:gap-12': isGrid
        
         }">
     
      <Article :layout="layout" />
      <Article :layout="layout" />
      <Article :layout="layout" />
      <Article :layout="layout" />
      <Article :layout="layout" />
       <Article :layout="layout" />

       <div v-if="showViewAll" class="mt-4 sm:mt-8"> 
           <router-link to="/articles" class="px-4 py-2 sm:py-3 sm:px-6 bg-primary text-white rounded focus:outline-none">View All</router-link>
       </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import Article from "./Article.vue"
export default {

  components: {
      Article,
  },
  props: {
     layout: {
       style: String,
       default: "list",
     },
     showViewAll: {
       style: Boolean,
       default:true
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