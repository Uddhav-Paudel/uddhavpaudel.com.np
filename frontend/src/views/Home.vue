<script setup>
import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const apiUrl = import.meta.env.VITE_API_URL;
import axios from 'axios';

const hitCount = ref(0);

onMounted(async () => {
    const { data } = await axios.post(`${apiUrl}/hit`);
    hitCount.value = data.count;
});
</script>

<template>
    <div class="flex flex-row-reverse overflow-hidden bg-[url('../assets/images/logo_white.svg')] bg-contain bg-no-repeat bg-center h-screen">
        <img src="../assets/images/daughter.jpeg" alt="Portfolio Background Image" class="mix-blend-overlay absolute size-full object-cover object-center" />
        <a href="https://roadmap.sh/r?id=67b2602474e25b5b30f86780" target="_blank" class="place-self-start z-1">
            <button class="border-1 px-8 py-4 bg-black hover:bg-black text-white cursor-pointer">About</button>
        </a>
        <a href="https://www.linkedin.com/in/uddhav-paudel" target="_blank" class="place-self-start z-1 hover:bg-blue">
            <button class="border-1 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">
                <FontAwesomeIcon :icon="faLinkedinIn" class="text-xl" />                
            </button>
        </a>
    </div>
</template>
