<template>

    <Navbar class="mb-5" />
    <Meals :meals="randomMeals" />




</template>

<script setup>
import Meals from '../components/Meals.vue'
import Navbar from '../components/Navbar.vue'
import { onMounted, ref } from 'vue';
import axiosInstance from '../axios';
import { BCard, BCardText, BButton } from "bootstrap-vue-next"
const randomMeals = ref([])

onMounted(() => {
    for (let i = 0; i < 12; i++) {
        axiosInstance.get("/random.php").then(({ data }) => {
            randomMeals.value.push(data.meals[0])
        }).catch((error) => {
            console.error(error)
        })
    }

})



</script>


<style scoped></style>