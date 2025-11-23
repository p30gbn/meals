<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="page-header mt-5">
                <h1>Meals for {{ route.params.ingredient }}</h1>
            </div>
                <div class="col-md-4 py-4 d-flex  align-items-stretch" v-for="meal in meals" :key="meal.idMeal">
                    <BCard :title="meal.strMeal" :img-src="meal.strMealThumb" img-alt="Image" img-top tag="article"
                        style="max-width: 20rem">
                        <template #footer>
                            <BButton class="mx-auto" :to="'/meal/' + meal.idMeal" variant="primary">Visit Meal Page
                            </BButton>
                        </template>
                    </BCard>
                </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import Navbar from '../components/Navbar.vue'
import { useRoute } from 'vue-router';
import store from '../store/index';
import { BCard, BCardText, BButton } from "bootstrap-vue-next"

const route = useRoute()
const meals = computed(() => {
    return store.state.mealsByIngredient
})

onMounted(() => {
    store.dispatch("searchMealsByIngredient", route.params.ingredient)
})
</script>