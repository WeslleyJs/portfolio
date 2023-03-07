<template>
  <div id="about" class="mt-2 max-w-md mx-auto bg-black rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <!-- me h-48 w-full object-cover md:h-full md:w-48 -->
        <img class="me h-48 w-full object-cover md:h-full md:w-60" src="../assets/profile/me.jpg"
          alt="Modern building architecture">
      </div>
      <div class="p-8">
        <div class="bg">
          <h2 class="iam uppercase tracking-wide text-sm text-white font-semibold">Who am I?</h2>
        </div>
        <!-- <h3 class="bg uppercase tracking-wide text-sm text-white font-semibold"><span class="text-white">Who am I?</span></h3> -->
        <p class=" block mt-1 text-lg leading-tight font-medium text-white hover:underline"> {{ greeting.Iam }}</p>
        <p class="mt-2 text-slate-500 text-white">
          {{ greeting.eng }}
        </p>
        <h2 class="uppercase tracking-wide text-sm text-white font-semibold md:flex align items-center justify-end">Contact me <span>
            <a href="https://www.linkedin.com/in/weslley-mateus-7a7a43220/" name="LinkedIn">
              <img class="linkedin" src="../assets/linkedin.svg" name="LinkedIn">
            </a>
          </span>
        </h2>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GreeTing',
  data() {
    return {
      greeting: {
        Iam: 'Hi everyone, I am Weslley Vieira.',
        eng: 'Brazilian, graduated in Systems Analysis and Development, Software Developer with a focus on WEB development',
      }
    }
  },
  props: {
    translation: Boolean,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iam {
  margin-left: -20px;
}

.bg {
  background-image: url('../assets/bg1.svg');
  background-repeat: no-repeat;
  background-position: left;
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
.linkedin{
  filter: brightness(150%);
  width: 40px;
  transform:translateY(0px);
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0px)
  }
  50% {
    transform: translateY(-5px)
  }
  100% {
    transform: translateY(0px)
  }
}
</style>
