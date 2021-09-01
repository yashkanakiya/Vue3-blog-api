<template>
<div>
    <div class="flex justify-center text-center pt-20">
        <form class="bg-gradient-to-tr from-green-500 to-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="text-white text-xl font-bold mb-2">
                Title
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username">
            </div>

            <div class="mb-6">
                <label class="text-white text-xl font-bold mb-2">
                Body
                </label>
                <textarea cols="30" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>

                <div class="flex justify-around">
                <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Update
                </button>  
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Delete
                </button>
                </div>       
            </div>
        </form>
    </div>
    </div>
</template>
