<template>
  
       <InnerHero image-url="/images/title.jpg" title="Article Title"/>
    
  <div class="container mx-auto px-4 sm:px-0 py-4 sm:py-8 text-xl">

       <div class="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 justify-between">
           <div class="flex items-center space-x-1">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"       stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
               <div class=" text-gray-700"> Category Name</div>
           </div>
           <div class="flex items-center space-x-1 text-sm text-gray-700">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>Septembre 18th,2022</div>
           </div>
       </div>

       <div class="mt-4 sm:mt-16">
           <p class="">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate, tenetur illum, ab in voluptatem ut temporibus, natus deserunt nisi iure totam rerum possimus magni ad accusamus facilis laudantium maiores vel! Vitae alias, fugiat cumque modi sed ad ea possimus nulla explicabo facilis unde illum perspiciatis beatae, obcaecati, ratione voluptatibus!
           </p>
           <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate, tenetur illum, ab in voluptatem ut temporibus, natus deserunt nisi iure totam rerum possimus magni ad accusamus facilis laudantium maiores vel! Vitae alias, fugiat cumque modi sed ad ea possimus nulla explicabo facilis unde illum perspiciatis beatae, obcaecati, ratione voluptatibus!
           </p>
       </div>
  </div>
</template>

<script>
import InnerHero from "@/components/InnerHero"

export default {
  components: {
      InnerHero,
    
  }
}
</script>

<style>

</style>vue