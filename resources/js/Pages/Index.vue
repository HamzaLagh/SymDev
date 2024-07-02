<template>
    <div class="flex flex-col h-screen overflow-hidden p-6 bg-slate-200 font-bold">

        <header class="text-gray-600 pb-6 text-xl mx-1 flex items-center justify-between">
        <div class="flex items-center">
            <button class="shrink-0 bg-gray-300 flex items-center justify-center cursor-pointer w-10 h-10 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 rotate-180 shrink-0" viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.81701 13.8692C5.36464 13.4172 5.36435 12.6841 5.81635 12.2317L10.0036 8.04103L5.81701 3.85775C5.36464 3.40574 5.36435 2.6726 5.81635 2.22023C6.26836 1.76787 7.00149 1.76757 7.45386 2.21958L11.7022 6.4645C12.5729 7.33447 12.5734 8.74553 11.7035 9.61619L7.45452 13.8685C7.00251 14.3209 6.26937 14.3212 5.81701 13.8692Z"
                fill="#25213E"></path>
            </svg>
            </button>
            <div class="heading-4 ml-3">Messages</div>
        </div>
        <button class="shrink-0 bg-gray-300 flex items-center justify-center cursor-pointer w-10 h-10 rounded-full overflow-hidden">
            <img src="../../assets/images/logo.png" alt="Profile" class="w-full h-full object-cover">
        </button>
</header>




      <!-- Contenu principal avec cartes -->
      <div class="flex-1 p-4 overflow-auto">
        <!-- Affichage conditionnel des cartes en fonction de la taille de l'écran -->
        <div class="hidden lg:flex lg:space-x-4">
          <CardOne />
          <CardTwo />
        </div>
        <div v-if="isMobile">
            <CardOne v-if="currentCard === 'CardOne'"/>
            <CardTwo v-if="currentCard === 'CardTwo'" />

        </div>
      </div>






      <!-- Pied de page pour la version mobile -->
      <footer v-if="isMobile" class="bg-gray-200 p-4 flex justify-center">
        <button @click="toggleCard"
          class="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">{{ currentCard === 'CardOne' ? 'Go to Card 2' : 'Go to Card 1' }}</button>
      </footer>

    </div>
  </template>

  <script setup>
  import CardOne from './CardOne.vue'; // Importer le composant CardOne.vue
  import CardTwo from './CardTwo.vue';
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  // État et gestion du responsive
  const isMobile = ref(false);
  const currentCard = ref('CardOne');

  const toggleCard = () => {
    currentCard.value = currentCard.value === 'CardOne' ? 'CardTwo' : 'CardOne';
  };

  const handleResize = () => {
    isMobile.value = window.innerWidth < 1024;
  };

  onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
  });

  </script>

  <style scoped>
  /* Styles spécifiques à index.vue */
  </style>
