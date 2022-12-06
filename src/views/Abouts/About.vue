<template>
  
       <InnerHero image-url="/images/about1.jpg" title="About"/>
    
  <div class="container mx-auto px-4 sm:px-0 py-4 sm:py-8 text-xl">
      <p class="py-1">
      Vuejs se distingue de tous les autres sites d’éducation en ligne. Nos parcours diplômants sont construits autour de sessions de mentorat </p>

     <p class="py-1">
      Notre engagement, ce n’est pas seulement de vous offrir une formation de qualité mais aussi de vous permettre de trouver un emploi. A l’issue de votre parcours diplômant, nous vous secondons à chaque étape de votre recherche de travail ; si vous ne trouvez pas un emploi correspondant à votre formation pendant les six mois qui suivent votre diplôme, nous vous remboursons vos frais de scolarité.</p>

      <p class="py-1">
      L’entreprise est née de la rencontre de Pierre Dubuc et Mathieu Nebra, alors âgés de respectivement 11 et 13 ans. Tous deux animés de la même passion pour l’informatique, ils lancent leur premier cours de programmation en ligne en 1999 ; dès le début de l’histoire, l’objectif est de rendre accessible un savoir complexe.</p>
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