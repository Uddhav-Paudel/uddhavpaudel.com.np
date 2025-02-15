<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const hitCount = ref(0);
const cvLink = ref('');

onMounted(async () => {
    const { data } = await axios.post('http://localhost:5000/api/hit');
    hitCount.value = data.count;

    const cvResponse = await axios.get('http://localhost:5000/api/cv');
    cvLink.value = cvResponse.data.cv_link;
});
</script>

<template>
    <div>
        <h1 class='text-3xl font-bold underline font-manrope'>Welcome to My Portfolio</h1>
        <p>Site Visit Count: {{ hitCount }}</p>
        <a :href="cvLink" download><button>Download CV</button></a>
    </div>
</template>
