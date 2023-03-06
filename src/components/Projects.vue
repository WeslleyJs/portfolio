<template>
      <div id="projects" class=" mb-5 mt-10 max-w-md mx-auto bg-black rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
        <div class="bg">
            <h1 class="title mt-2 md:flex justify-center tracking-wide text-sm text-white font-semibold">Some Projects</h1>
        </div>
        <div class="test mt-2 md:flex md:justify-around  items-center mb-8">
            <div class="md:shrink-0 bg-projects">
                <img class="tech hover:rotate-0 me h-40   md:h-full md:w-40"
                    src="../assets/projects/project01.png" alt="Modern building architecture">
                    <h6 class="text-white text-center">HiperCode</h6>
            </div>
            <div class="md:shrink-0 bg-projects">
                <img class="tech me h-40  md:h-full md:w-40 hover:"
                    src="../assets/projects/project02.png" alt="Modern building architecture">
                <h6 class="text-white text-center">Sales Rocket</h6>
            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    name:'MyProject',
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
}
.bg{
  background-image: url('../assets/bg1.svg');
  background-repeat: no-repeat;
  background-position:center;
  padding: 50px;
}
    .bg-projects{
        background-color: rgba(113, 110, 110, 0.1);
        padding: 10px;
        border-radius: 8px  ;
    }

</style>