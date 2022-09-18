<script setup>
  import { defineAsyncComponent } from 'vue';
  import LoaderView from './views/LoaderView.vue';
  import MainLayout from './layouts/MainLayout.vue';

  // const MainLayout = defineAsyncComponent(() =>
  //                       new Promise(( resolve ) => {
  //                         setTimeout( () => {
  //                           resolve( import( './components/MainLayout.vue' ) );
  //                         }, 2500);
  //                       })
  //                     );
</script>

<template>
  <MainLayout />
</template>

<style>
  #app {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1.6rem;
    font-weight: normal;
  }
</style>
