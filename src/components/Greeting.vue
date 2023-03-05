<template>
  <div id="about" class="mt-2 max-w-md mx-auto bg-black rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class="me h-48 w-full object-cover md:h-full md:w-48" src="../assets/profile/me.jpg"
          alt="Modern building architecture">
      </div>
      <div class="p-8">
        <div class="bg">
            <h2 class="iam uppercase tracking-wide text-sm text-white font-semibold">Who am I?</h2>
        </div>
        <!-- <h3 class="bg uppercase tracking-wide text-sm text-white font-semibold"><span class="text-white">Who am I?</span></h3> -->
        <p class=" block mt-1 text-lg leading-tight font-medium text-white hover:underline">Hi everyone, I am Weslley Vieira.</p>
        <p class="mt-2 text-slate-500 text-white">
          Brazilian, graduated in Systems Analysis and Development, Software Developer with a focus on WEB development
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GreeTing',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iam{
  margin-left: -20px;
}
.bg{
  background-image: url('../assets/bg1.svg');
  background-repeat: no-repeat;
  background-position:left;
  padding: 50px;
}
.me {
  filter: brightness(80%);
  transition: 1s;
}

.me:hover {
  filter: brightness(100%);
  transition: 1s;
}
</style>
