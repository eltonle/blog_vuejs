<template>
  
       <InnerHero image-url="/images/about.jpg" title="Articles"/>
    
  <div class="container mx-auto px-4 sm:px-0 py-4 sm:py-8 text-xl">
      <Articles layout="grid" :show-view-all="false"/>

      <div class="mt-6 sm:mt-12">
        <button class="bg-red-500 text-white rounded px-4 sm:px-6 py-3 focus:outline-none">More view</button>
      </div>
  </div>
</template>

<script>
import InnerHero from "@/components/InnerHero"
import Articles from "@/components/Articles"
export default {
  components: {
      InnerHero,
      Articles
  }
}
</script>

<style>

</style>