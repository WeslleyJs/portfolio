<template>
    <div id="more" class=" mb-5 mt-10 max-w-md mx-auto bg-black rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
        <div class="md:flex justify-center">
            <button @click="show()" class="bg md:flex justify-center">
                <h1 class="iam mt-2 md:flex justify-center tracking-wide text-sm text-white font-semibold">{{ msg.technology }} {{
                    showMore ? '-' : '+' }}</h1>
            </button>
        </div>
        <!-- <button class="show" @click="show()">
           <a class="shadow-link" href="#more">{{ showMore ? 'show less -' : 'show more + ' }}</a>
        </button> -->
        <div class="test mt-2 md:flex md:justify-around  items-center">
            <div class="md:shrink-0">
                <img class="tech ease-in duration-300 rotate-[-17deg] hover:rotate-0 me h-20   md:h-full md:w-20"
                    src="../assets/know/nodejs-icon.svg" alt="Modern building architecture">
            </div>
            <div class="md:shrink-0">
                <img class="tech ease-in duration-300 hover:rotate-[5deg] rotate-10 me h-20  md:h-full md:w-20"
                    src="../assets/know/vuejs-icon.svg" alt="Modern building architecture">
            </div>
            <div class="md:shrink-0">
                <img class=" tech ease-in duration-300 rotate-[17deg] hover:rotate-0 me h-20  md:h-full md:w-20"
                    src="../assets/know/javascript-logo-svgrepo-com.svg" alt="Modern building architecture">
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="test mb-8 md:flex sm:justify-center sm:center bg-cover" v-if="showMore">
            <div v-for="imagem in ottersTech" :key="imagem.img" class="md:shrink-0">
                <img class=" otters me md:w-15 lg:w-15 sm:aligm" :src="imagem.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import img01 from '../assets/know/otters/git-scm-icon.svg'
import img02 from '../assets/know/otters/mongodb-icon.svg'
import img03 from '../assets/know/otters/mysql-ar21.svg'
import img04 from '../assets/know/otters/tailwindcss-icon.svg'
import img05 from '../assets/know/otters/w3_css-icon.svg'
import img06 from '../assets/know/otters/expressjs-ar21.svg'
import img07 from '../assets/know/otters/getbootstrap-icon.svg'
export default {
    name: 'KnowLedge',
    data() {
        return {
            showMore: false,
            img1: img01,
            ottersTech: [
                { img: img01 },
                { img: img02 },
                { img: img03 },
                { img: img04 },
                { img: img05 },
                { img: img06 },
                { img: img07 },
            ]
        }
    },
    methods: {
        show() {
            console.log(this.img2);
            this.showMore = !this.showMore;
        }
    },
    props: {
        msg: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style scoped>
@media (max-width: 640px) {
    .test {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}

@media (min-width: 768px) {
    .test {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}

.tech {
    filter:
        blur(.3px)
        /* drop-shadow(4px 4px #999999); */
}

.tech:hover {
    filter:
        saturate(150%) brightness(105%) blur(0);
}

.show {
    font-size: 8px;
    color: white;
}

.otters {
    filter: grayscale(1);
    transition: .5s;
}

.otters:hover {
    filter: grayscale(0) saturate(150%) brightness(105%);
    transition: .5s;
}

.bg {
    background-image: url('../assets/bg1.svg');
    background-repeat: no-repeat;
    background-position: center;
    padding: 50px;
}
</style>