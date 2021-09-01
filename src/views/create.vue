<template>
<div>
    <div class="flex justify-center text-center pt-20">
        <form class="bg-gradient-to-tr from-green-500 to-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="text-white text-xl font-bold mb-2">
                Title
                </label>
                <input v-model="post.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username">
            </div>

            <div class="mb-6">
                <label class="text-white text-xl font-bold mb-2">
                Body
                </label>
                <textarea v-model="post.body" cols="30" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>

                <button @click.prevent="create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Create
                </button>         
            </div>
        </form>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
    setup() {
        const post = ref({title: '',body: ''})
        function create() {
        axios.post(`http://localhost:8080/posts.json`,post.value)
        .then(response => {console.log(response.data)})
        }
        return {post, create}
    },
}
</script>