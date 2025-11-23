<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="page-header mt-5">
                <h1>Meals by Name</h1>
            </div>
            <div class="d-flex justify-content-center">
                <div class="mt-5 px-5 col-md-6">
                    <BFormInput type="text" size="lg" v-model="keyword" placeholder="Search for Meals"
                        @change="searchMeal" />
                </div>
            </div>
            <div class="mt-5 px-5">
                <Meals :meals="meals" />
            </div>
        </div>
    </div>


</template>





<script setup>
import Navbar from '../components/Navbar.vue'
import Meals from '../components/Meals.vue';
import { BFormInput } from "bootstrap-vue-next"
import { ref, computed, onMounted } from 'vue';
import store from '../store/index';
import { useRoute } from "vue-router"

const route = useRoute()
const keyword = ref("")
const meals = computed(() => { return store.state.mealsByName })

const searchMeal = () => {
    if (keyword.value) {
        store.dispatch("searchMealsByName", keyword.value)
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeal()
    }
})

</script>