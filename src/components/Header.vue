<template>
  <header class="mt-5 bg-gray sm:flex sm:justify-center">
    <div class="flex items-center justify-between px-4 py-3">
      <div>
        <img class="h-8" src="" alt="">
      </div>
      <div class="sm:hidden bg-dark">
        <button @click=" isOpen = !isOpen" type="button" class="block text-white">
          <img style="width:40px" src="../assets/menu-svgrepo-com.svg" alt="">
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block': 'hidden'" class="hd px-2 pt-2 pb-4 sm:flex text-white bg-black">
      <a href="#about" class="lnk block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0">About </a>
      <a href="#more" class="lnk mt-2 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0">Technology </a>
      <a href="#projects" class="lnk mt-2 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0">Projects</a>
    </div>
  </header>
</template>
<script>

export default {
  name: 'MyHeader',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
<style scoped>
.hd{
  border-radius: 50px;
  padding: 20px;
  gap: 20px;
}
.lnk{
  color: white;
  display: flex;
  justify-content: space-around;
}
</style>