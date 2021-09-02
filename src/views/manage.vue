<template>
<div>
<div class="flex flex-col items-center h-screen bg-gray-800 space-y-3 p-10 md:mx-20" >
    <div class="flex justify-center text-center pt-40">
        <form class="bg-gradient-to-tr from-green-500 to-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="text-white text-xl font-bold mb-2">
                Title
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
            </div>

            <div class="mb-6">
                <label class="text-white text-xl font-bold mb-2">
                Body
                </label>
                <textarea cols="30" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></textarea>

                <div class="flex justify-around">
                <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click.prevent="up">
                Change
                </button>  
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Delete
                </button>
                </div>       
            </div>
        </form>
    </div>
    </div>
</div>
</template>

<script>
import { useRoute} from 'vue-router'
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {
    setup(props) {

        let route = useRoute()

        props['id']
        let blog = ref('')

        onMounted(() =>{
            console.log(route.params.id);
            let id = route.params.id
            if(route.params.id){
            axios.get(`http://localhost:8080/posts.json/`,{id})
            .then(response => {
            console.log(response.data);
            blog.value = response.data
            })
            }
        })
        function up() {
        
        }

        return { blog, up, route }
    },
}

</script>
