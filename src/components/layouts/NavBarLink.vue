<template>
  <router-link class="block sm:inline-block py-2 px-4 hover:text-primary transition-colors duration-300" 
  
      :to="to">
      
      {{ label }}
      </router-link>
</template>

<script>
export default {
  props: {
      to: {
          type: String,
          required: true,
      },
      label: {
          type: String,
          required: true,
      },
  }
}
</script>

<style>

</style>