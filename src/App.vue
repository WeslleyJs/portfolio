<template>
  <div class="app">
    <Homeeg></Homeeg>
    <router-view to="/eg"></router-view>
  </div>
</template>

<script>
import Homeeg from './pages/Homeeg.vue'
export default {
  name: 'App',
  components: {
    Homeeg,
  },
  data(){
    return{
    }
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #3ea626);
    border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: linear-gradient(transparent, #3ea626);
    border-radius: 6px;
}
::-webkit-scrollbar {
    width: 12px;
    background: #09090A;
}
body{
  background-color: #18181b;
  background-image: url('./assets/overlay_stars.svg');
}
html {
  scroll-behavior: smooth;
}
</style>
