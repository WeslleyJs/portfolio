<template>
          <header class="pointer-events-none relative z-50 flex flex-col"
        style="height:var(--header-height);margin-bottom:var(--header-mb)">
        <div class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
        <div class="sm:px-8 top-0 order-last -mb-3 pt-3" style="position:var(--header-position)">
        </div>
        <div class="top-0 z-10 h-16 pt-6" style="position:var(--header-position)">
          <div class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
            style="position:var(--header-inner-position)">
            <div class="mx-auto max-w-7xl lg:px-8">
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="relative flex gap-4">
                    <div class="flex flex-1"></div>
                    <div class="flex flex-1  md:justify-center">
                      <div class="pointer-events-auto md:hidden" data-headlessui-state=""><button
                          class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                          type="button" aria-expanded="false" data-headlessui-state=""
                          id="headlessui-popover-button-:R2qb6:">Menu<svg viewBox="0 0 8 6" aria-hidden="true"
                            class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                            <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"></path>
                          </svg></button></div>
                      <nav class="pointer-events-auto hidden md:block">
                        <ul
                          class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                          <li><a
                              class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="#about">About</a></li>
                          <li><a
                              class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="#more">Experience</a></li>
                          <li><a
                              class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="#projects">Projects</a></li>
                        </ul>
                      </nav>
                    </div>
                    <div class="flex justify-end md:flex-1">
                        <a href="#contact" @click="console.log('Ola mundo')">

                            <img style="width:30px; color: white;" src="../assets/contacts-svgrepo-com.svg" alt="">
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
</template>
<script>

export default {
    name:'MyHeader'
}
</script>
<style scoped>
</style>