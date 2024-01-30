<script setup>

import { RouterLink, useRouter } from 'vue-router';
const router = useRouter()



</script>

<template>
  <div class="bg-white pb-6 relative">
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2">
      <RouterLink to="/accueil">
      <img src="@/assets/logo.svg" alt="Logo" class="w-[200px] h-[190.168px]">
    </RouterLink>
    </div>
    
    <div class="absolute top-5 right-5 flex gap-38">
      <RouterLink to="/map">
      <img src="@/assets/geolocalisation.svg" alt="Icon 4" class="w-8 h-8 m-6" >
    </RouterLink>
    <RouterLink to="/Exemple">
      <img src="@/assets/Panier.svg" alt="Icon 1" class="w-8 h-8 m-6">
    </RouterLink>
      <RouterLink to="/inscription">
      <img src="@/assets/Compte.svg" alt="Icon 2" class="w-8 h-8 m-6">
    </RouterLink>
      
    </div>
    <div class="flex gap-36 font-bold font-montserrat text-[15.6px] text-customGray pt-[225px] justify-center">
  <span class="hover:text-hoverGray px-2 py-1">TOUTES LES LUNETTES</span>
  <RouterLink to="/personnalisation">
  <span class="hover:text-hoverGray px-2 py-1">PERSONNALISER</span>
</RouterLink>
  <span class="hover:text-hoverGray px-2 py-1">ACCESSOIRES</span>
  <RouterLink to="/inscription">
  <span class="hover:text-hoverGray px-2 py-1">MON COMPTE</span>
  </RouterLink>
</div>
  </div>

</template>

