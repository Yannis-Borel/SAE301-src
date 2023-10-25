<template>
  <div class="bg-white pb-6 relative">
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2">
      <img src="@/assets/logo.svg" alt="Logo" class="w-[200px] h-[190.168px]">
    </div>
    
    <div class="absolute top-5 right-5 flex gap-38">
      <img src="@/assets/geolocalisation.svg" alt="Icon 4" class="w-10 h-10 m-6" >
      <img src="@/assets/Panier.svg" alt="Icon 1" class="w-10 h-10 m-6">
      <img src="@/assets/Compte.svg" alt="Icon 2" class="w-10 h-10 m-6">
      <img src="@/assets/Settings.svg" alt="Icon 3" class="w-10 h-10 m-6">
    </div>
    <div class="flex gap-36 font-bold font-montserrat text-[15.6px] text-customGray pt-[225px] justify-center">
  <span class="hover:text-hoverGray px-2 py-1">Toutes les LUNETTES</span>
  <span class="hover:text-hoverGray px-2 py-1">PERSONNALISER</span>
  <span class="hover:text-hoverGray px-2 py-1">ACCESSOIRES</span>
  <span class="hover:text-hoverGray px-2 py-1">Trouvez vos LUNETTES</span>
</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
