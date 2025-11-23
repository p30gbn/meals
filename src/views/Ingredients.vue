<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="page-header mt-5">
                <h1>Meals by Name</h1>
            </div>
            <div class="d-flex justify-content-center">
                <div class="my-5 px-5 col-md-6">
                    <BFormInput  type="text" size="lg" v-model="keyword" placeholder="Search for Ingredients" />
                </div>
            </div>
            <div class="col-md-2 py-4 d-flex align-items-stretch" v-for="ingredient in computedIngredients"
                :key="ingredient.idIngredient">
                <BButton class="mx-auto" :to="'/by-ingredient/' + ingredient.strIngredient" variant="outline-success">
                    {{ ingredient.strIngredient }}</BButton>
            </div>
        </div>
    </div>
</template>


<script setup>
import Navbar from '../components/Navbar.vue'
import { BFormInput } from "bootstrap-vue-next"
import { ref, computed, onMounted } from 'vue';
import store from '../store/index';
import axiosInstance from '../axios';
import { BCard, BCardText, BButton } from "bootstrap-vue-next"



const keyword = ref("")
const ingredients = ref([])


// const computedIngredients = computed(() => {
//     if (!computedIngredients) return ingredients 
//     return ingredients.value.filter((element) => {
//         element.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
//     })
// })

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});


onMounted(() => {
    axiosInstance.get("/list.php?i=list").then(({ data }) => {
        ingredients.value = data.meals
    })
})



</script>