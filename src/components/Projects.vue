<template>
      <div id="projects" class=" mb-5 mt-10 max-w-md mx-auto bg-black rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
        <div class="bg">
            <h1 class="title mt-2 md:flex justify-center tracking-wide text-sm text-white font-semibold">{{ msg.projects }}</h1>
        </div>
        <div class="test mt-2 md:flex md:justify-around items-center mb-8">
            <div class="md:shrink-0 bg-projects click">
                <img class="tech sm:justify-center img-project me h-40   md:h-full md:w-40"
                    src="../assets/projects/project01.png" alt="Modern building architecture">
                    <h6 class="block text-white text-center">HiperCode</h6>
            </div>
            <div class="md:shrink-0 bg-projects click">
                <img class="tech  me h-40  md:h-full md:w-40 items-center"
                    src="../assets/projects/project02.png" alt="Modern building architecture">
                <h6 class="block text-white text-center">Sales Rocket</h6>
            </div>
        </div>
        <div class="bg-projects md:flex justify-center">
            <img class="" style="width: 40px;" src="../assets/GitHub-Icon-White-Dark-Background-Logo.wine.svg" alt="">
            <h4 class="text-white md:inline sm:flex items-center justify">
                    <a href="https://github.com/TLT-sptb" class="font-bold justify center">
                        For more Project access my GitHub
                    </a>
                </h4>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'MyProject',
    props:{
        msg:{
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style scoped>
@media (min-width: 768px) {
    .title {
        text-align: center;
    }

}
@media (max-width: 560px) {
    .title {
        text-align: center;
    }
    .bg{
        background-position: left;
    }
    .img-project{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}
.bg{
  background-image: url('../assets/bg1.svg');
  background-repeat: no-repeat;
  background-position:center;
  padding: 50px;
  /* filter:contrast(150%)
            drop-shadow(100px 100px 200px #FFF); */
}
    .bg-projects{
        background-color: rgba(113, 110, 110, 0.1);
        padding: 10px;
        border-radius: 8px  ;
}
.click{
    transition: .5s;
    transform:translateY(0px);
}
.click:hover{
    animation: float 1s ease-in-out ;
    transition: .5s;
    transform:translateY(-10px);
}
@keyframes float {
  0% {
    transform: translateY(0px)
  }
  100% {
    transform: translateY(-10px)
  }
}
</style>