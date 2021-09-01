<template>
  <div class="bg-green-400 text-gray-700 p-5 md:flex md:justify-around md:items-center">
    <h1 class="text-4xl text-center">Yash</h1>
      <ul class="flex justify-around text-xl mt-3 md:space-x-5 md:mt-0">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/create">Create Blog</router-link></li>
        <li><router-link to="/manage">Manage Blog</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
  </div>
  <router-view/>
</template>