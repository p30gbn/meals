<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="page-header mt-5">
                <h1>Meals by Letter</h1>
            </div>
            <div class="d-flex mt-3">
                <router-link class="mx-3" v-for="letter in letters" :key="letter"
                    :to="{ name: 'byLetter', params: { letter } }">{{ letter }}</router-link>
            </div>
            <Meals :meals="meals" class="mt-5" />

        </div>
    </div>
</template>



<script setup>
import Navbar from '../components/Navbar.vue'
import Meals from '../components/Meals.vue'
import { useRoute } from "vue-router"
import { computed, onMounted,watch } from 'vue';
import store from '../store/index';
import { BCard, BCardText, BButton } from "bootstrap-vue-next"


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute()
const meals = computed(() => { return store.state.mealsByLetter })

onMounted(() => {
    store.dispatch("searchMealsByLetter", route.params.letter)
})
watch(route,()=>{
    store.dispatch("searchMealsByLetter", route.params.letter)
})
</script>