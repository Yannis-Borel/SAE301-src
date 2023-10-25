<template>
  <div id="app" class="font-montserrat">
    <header></header>
    <main>
      <div class="bg-custom-gradient pb-11">
        <h1 class="text-white text-2xl font-bold tracking-wider text-center pt-10 uppercase">LUNETTES PERSONNALISABLES DISPONIBLES</h1>
        <div class="underline bg-white w-1/2 h-1 mx-auto mt-2.5"></div>
        <div class="transform rotate-45 absolute right-0 bg-gray-100 p-2 border-b-2 border-black">
          <span class="text-black uppercase tracking-wider text-sm">ÉDITION LIMITÉE</span>
        </div>

        <div class="flex mt-10">
          <div class="glasses mx-auto bg-white border-black border-solid border-7 flex items-center justify-center ml-[182px] p-[100px] rounded-[50px]" >
            <img src="../assets/lunettes_empilé.svg" alt="Lunettes" class="w-[300px]">
        </div>
          <div class="content-right flex items-center justify-end flex-1 mr-[250px]">
            <img src="../assets/logo_blanc.svg" alt="Logo TAVUE">
          </div>
        </div>
        <span class="text-white text-lg font-bold text-left ml-[400px] ">120,00€</span>
        <div class="mt-10 flex justify-center">
          <button class="bg-white text-custom-gradient font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-200">
            CONFIGURER MAINTENANT
          </button>
      </div>
      </div>
      
      <div class="container mx-auto p-8">

  <div class="flex mb-8">
    <img src="../assets/image1.png" alt="image1" class="w-[650px] h-[450px]">
    <div class="w-1/2 pl-4 p-10">
      <h2 class="font-semibold text-xl mb-4 border-b pb-2">Une création française</h2>
      <div class="underline bg-black w-[400px] h-1  "></div>
      <p class="p-10 leading-relaxed text-[20px]">TaVue est fière de perpétuer l'héritage de l'artisanat français. Depuis notre atelier niché au cœur de Paris, nous exploitons des décennies de savoir-faire pour transformer des matériaux bruts en chef-d'œuvre de lunetterie. Chaque paire est conçue et fabriquée en France, garantissant que vous portez non seulement une paire de lunettes, mais un morceau de l'histoire et de la culture françaises.</p>
    </div>
  </div>

  <div class="flex mb-8">
    <div class="w-1/2 pr-4 p-10">
      <h2 class="font-bold  text-xl p-4 pl-10">Un style épuré et raffiné</h2>
      <div class="underline bg-black w-[400px] h-1  "></div>
      <p class="p-10 leading-relaxed text-[20px]">Chez TaVue, nous croyons que le véritable luxe réside dans l'understatement. Notre approche du design s'enracine dans la pureté des lignes, la subtilité des formes et la clarté de la structure. Chaque pièce est une célébration de la sophistication minimaliste, destinée à compléter votre style plutôt qu'à le dominer.</p>
    </div>
    <img src="../assets/image2.png" alt="image2" class="w-[650px] h-[450px]">
  </div>


  <div class="flex mb-8">
    <img src="../assets/image3.png" alt="image3" class="w-[650px] h-[450px]">
    <div class="w-1/2 pl-4 p-10">
      <h2 class="font-bold  text-xl p-4 pl-10 ">Possibilité de personnaliser</h2>
      <div class="underline bg-black w-[400px] h-1  "></div>
      <p class="p-10 leading-relaxed text-[20px]">Dans un monde où la mode et la fonctionnalité convergent, TaVue vous offre la possibilité ultime d'exprimer votre individualité. Des lunettes entièrement personnalisables: dites adieu aux choix standards et accueillez un horizon où vous êtes le créateur de votre propre style. Avec TaVue, chaque détail de vos lunettes est une réflexion de votre personnalité, vous permettant de porter fièrement une pièce qui est intrinsèquement vous.</p>
    </div>
  </div>
</div>

<div class="font-bold  flex  justify-center items-center font-montserrat mt-16">
    <div class="menu-container flex space-x-20 ">
      <span class="text-center">CITYWATCH</span>
      <div class="border-l border-r h-6 mx-3"></div>
      <span class="text-center">NOUVEAUTÉS</span>
      
      <div class="border-l border-r h-6 mx-3"></div>
      <span class="text-center">ACCESSOIRES</span>
    </div>
    
    
  </div>
  <div class="underline bg-red-400 w-[200px] h-1 mx-auto mt-1"></div>

  <div class="transform rotate-45 absolute right-0 bg-gray-100 p-2 border-b-2 border-black mb-">
          <span class="text-black uppercase  text-xs ">PLUS DE 10.000  CLIENTS SATISFAITS</span>
        </div>



      <div class="flex justify-between px-10 my-[150px]  space-x-4"> <!-- Conteneur principal pour les lunettes -->
  <!-- Lunettes 1 -->
  <div class="flex flex-col items-center">
    <span class="bg-gray-200 py-1 px-4 rounded-full text-sm uppercase font-semibold mb-[50px]">Le plus populaire</span>
    <img src="../assets/lunettes1.svg" alt="lunettes1" class="w-[200px] h-auto">
    <span class="mt-16 text-xl font-bold">HAMTOUTGLASSES</span>
    <span class="mt-2 text-lg font-medium">150,00 €</span>
    <button class="mt-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-700">ACHETER MAINTENANT</button>
  </div>

  <!-- Lunettes 2 -->
  <div class="flex flex-col items-center">
    <span class="bg-gray-200 py-1 px-4 rounded-full text-sm uppercase font-semibold mb-[50px]">Nouveautés</span>
    <img src="../assets/lunettes2.svg" alt="lunettes2" class="w-[200px] h-auto">
    <span class="mt-16 text-xl font-bold">MASHALLAHGLASSES</span>
    <span class="mt-2 text-lg font-medium">180,00 €</span>
    <button class="mt-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-700">ACHETER MAINTENANT</button>
  </div>

  <!-- Lunettes 3 -->
  <div class="flex flex-col items-center">
    <span class="bg-gray-200 py-1 px-4 rounded-full text-sm uppercase font-semibold mb-[50px]">Nouveautés</span>
    <img src="../assets/lunettes3.svg" alt="lunettes3" class="w-[200px] h-auto">
    <span class="mt-16 text-xl font-bold">O'MOUADEBGLASSES</span>
    <span class="mt-2 text-lg font-medium">80,00 €</span>
    <button class="mt-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-700">ACHETER MAINTENANT</button>
  </div>

  <!-- Lunettes 4 -->
  <div class="flex flex-col items-center">
    <span class="bg-gray-200 py-1 px-4 rounded-full text-sm uppercase font-semibold mb-[50px]">Nouveautés</span>
    <img src="../assets/lunettes4.svg" alt="lunettes4" class="w-[200px] h-auto">
    <span class="mt-16 text-xl font-bold">WALIGLASSES</span>
    <span class="mt-2 text-lg font-medium">230,00 €</span>
    <button class="mt-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-700">ACHETER MAINTENANT</button>
  </div>

</div>
  </main>
</div>
</template>

<script>
          export default {
            name: "MenuSection"
          };
</script>
