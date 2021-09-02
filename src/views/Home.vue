<template>
  <div class="flex flex-col items-center bg-gray-800 space-y-3 p-10 md:mx-20" >
    <h1 class="text-5xl text-green-300 font-bold uppercase tracking-wider ">all blogs articals</h1>
    <div v-for="(blog,index) in blogs" :key="index" class="bg-gray-600 text-white p-10 text-center space-y-5">
      <p class="text-3xl">{{blog.title}}</p>
      <p class="text-xl">{{blog.body}}</p>

      <router-link :to ="{ name: 'Manage', params:{ id: blog.id } }"> 
      <div class="flex justify-around">
        <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Update
        </button> 
      </div>     
      </router-link> 

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
  setup() {

    const blogs = ref([])
    axios.get(`http://localhost:8080/posts.json`)
    .then(response => {
      blogs.value = response.data
    })

    return {blogs}
  },
  
}
</script>
