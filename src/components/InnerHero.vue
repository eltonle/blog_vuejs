<template>
  <div class="text-white h-64 sm:h-96 relative z-0">
    <img :src="imageUrl" alt="contact" class="w-full h-full object-cover">

    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div class="absolute inset-0 bg-gradient-to-t from-primary opacity-50"></div>

    <div class="absolute inset-0  ">
        <div class=" container mx-auto h-full w-full text-2xl sm:text-4xl font-bold flex flex-col items-center justify-center sm:justify-end">
            <div class="sm:mb-5 text-center">
                {{ title }}
            </div>
        </div>
    </div> 
  </div>

</template>

<script>
export default {
  props :{
      imageUrl: {
          type: String,
          // required: true,
      },

      // data() {
      //   return {
      //     isLoader: false,
      //   }
      // },
      // methods: {
      //   imageLoad() {
      //     this.isLoader = true;
      //   }
      // },

      title: {
          type: String,
          required: true,
      }
  },
}
</script>

<style>

</style>