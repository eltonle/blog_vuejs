<template>
  <InnerHero image-url="/images/image1.jpg" title="Contact Us"/>

   <div class="container mx-auto py-4 sm:py-8 px-2 sm:px-0">
     
     <div class="grid sm:grid-cols-3 sm:gap-4 px-4 sm:px-0 "> 
       <div> <span class="text-gray-500"> Adress :</span>Lorem upsim</div>       
       <div> <span class="text-gray-500">Phone :</span>+237 690909090</div>       
       <div><span class="text-gray-500"> Email :</span> infos@localhostdigital.com</div>       
    </div>

    <div class="mt-8 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-12">
      <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.54605115415!2d9.671763356449453!3d4.036071988407635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be2e1fe6d%3A0x92daa1444781c48b!2sDouala!5e0!3m2!1sfr!2scm!4v1643828542054!5m2!1sfr!2scm" class="w-full" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>

      <form class="bg-gray-300 shadow rounded p-4 space-y-2">

        <div>
           <input type="text" name="" id="" placeholder="Enter your name" class="w-full py-2 px-2 rounded-md focus:border-primary focus:outline-none border-4 bg-gray-200" required>
           <span class="text-red-600 text-sm">the error message</span>
        </div>

        <div>
           <input type="email" name="" id="" placeholder="Enter your email" class="w-full py-2 px-2 rounded-md focus:border-primary focus:outline-none border-4 bg-gray-200" required>
           <!-- <span class="text-red-600 text-sm">the error message</span> -->
        </div>

        <div>
           <input type="phone" name="" id="" placeholder="Enter your phone number" class="w-full py-2 px-2 rounded-md focus:border-primary focus:outline-none border-4 bg-gray-200" required>
           <!-- <span class="text-red-600 text-sm">the error message</span> -->
        </div>

        <div>
           <textarea name="" id="" rows="4" class=" px-2 py-2 w-full rounded-md focus:border-primary focus:outline-none border-4 bg-gray-200" placeholder="Enter your message" required></textarea>
            <!-- <span class="text-red-600 text-sm">the error message</span> -->
        </div>

        <!-- <div class="px-4 py-2 text-white bg-red-600 rounded-md ">
           Lorem ipsum dolor sit, amet consectetur adipi
        </div> -->

        <!-- <div class="px-4 py-2 text-white bg-green-600 rounded-md ">
           Lorem ipsum dolor sit, amet consectetur adipi
        </div> -->

        <button class=" bg-red-600 py-2 px-4 sm:px-5 rounded-md text-white">Submit</button>
      </form>
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

</style>