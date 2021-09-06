<template>
  <div class="sticky top-0 bg-green-400 text-gray-700 p-5 md:flex md:justify-around md:items-center">
    <h1 class="text-4xl text-center font-semibold"><span class="text-red-500">Y</span>A<span class="text-red-500">S</span>H</h1>
      <ul class="flex justify-around text-xl font-semibold mt-3 md:space-x-5 md:mt-0">
        <li><router-link to="/" class="hover:text-white">Home</router-link></li>
        <li><router-link to="/create" class="hover:text-white">Create Blog</router-link></li>
      </ul>
  </div>
  <router-view/>
</template>