<template>
    <button class="btn-space" @click="translate"><router-link class="text-white" to="/pt"><img src="../assets/icons8-brazil-48.png" alt=""></router-link></button>
    <button class="btn-space" @click.stop="translate"><router-link class="text-white" to="/eg"><img src="../assets/icons8-usa-48.png" alt=""></router-link></button>
    <Header :msg="msg"></Header>
    <Greeting :msg="msg"></Greeting>
    <KnowledgeVue :msg="msg"></KnowledgeVue>
    <Projects :msg="msg"></Projects>
</template>

<script>
import Header from '../components/Header.vue';
import Greeting from '../components/Greeting.vue';
import KnowledgeVue from '../components/Knowledge.vue';
import Projects from '../components/Projects.vue';

import data from '../data/index.js'
export default {
    name: 'HomeEng',
    components: {
        Header,
        Greeting,
        KnowledgeVue,
        Projects,
    },
    data() {
        return {
            msg: {},
        }
    },
    mounted(){
        data.forEach(element => {
            const base = element.pt;
            this.msg = base;
        })

    },
    methods:{
        translate(){
            const local = window.location.pathname;
            data.forEach(element => {
                const data = element;
                if(local === '/pt'){
                    this.msg = data.pt;
                }else{
                    this.msg = data.eng;
                }
            })
        }
    }
    

}
</script>

<style scoped>
.btn-space{
    justify-content: right;
    gap: 3px;
    filter:contrast(150%)
            drop-shadow(2px 2px 4px #999999);
}
</style>