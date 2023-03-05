<template>
  <div class="app font-mono">
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
  }
}
</script>

<style>
body{
  background-color: #18181b;
  background-image: url('./assets/overlay_stars.svg');
}
</style>
