<template>
  <div class="app">
    <Header></Header>
    <Greeting></Greeting>
    <KnowledgeVue></KnowledgeVue>
    <Projects></Projects>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Greeting from './components/Greeting.vue';
import KnowledgeVue from './components/Knowledge.vue';
import Projects from './components/Projects.vue';
export default {
  name: 'App',
  components: {
    Greeting,
    KnowledgeVue,
    Projects,
    Header
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
</style>
