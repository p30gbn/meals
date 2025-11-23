<template>
    <Navbar class="mb-5" />
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-8 my-5 d-flex justify-content-center">
                <BCard :title="meal.strMeal" :subtitle="meal.strCategory" :img-src="meal.strMealThumb" img-alt="Image"
                    img-top tag="article" style="max-width: 40rem">
                    <BCardText>
                        {{ meal.strInstructions }}
                    </BCardText>
                    <BCardText class="d-flex">
                        <div class="col-md-6">
                            <h2 class="mb-4">Ingredients</h2>
                            <ul>
                                <template v-for="(elment, index) of new Array(20)">
                                    <li v-if="meal[`strIngredient${index + 1}`]">
                                        {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
                                    </li>
                                </template>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h2 class="mb-4">Measures</h2>
                            <ul>
                                <template v-for="(elment, index) of new Array(20)">
                                    <li v-if="meal[`strMeasure${index + 1}`]">
                                        {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </BCardText>
                    <BCardFooter class="d-flex justify-content-between">
                        <BButton class="" target="_blank" :href="meal.strYoutube" variant="outline-danger">YOUTUBE</BButton>
                        <BButton class="" target="_blank" :href="meal.strSource" variant="outline-dark">Source</BButton>
                    </BCardFooter>
                </BCard>
            </div>
        </div>
    </div>

</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { onMounted, ref } from 'vue';
import axiosInstance from '../axios';
import { useRoute } from 'vue-router';
import { BCard, BCardText, BCardFooter,BButton } from "bootstrap-vue-next"


const meal = ref({})
const route = useRoute()

onMounted(() => {
    axiosInstance.get(`/lookup.php?i=${route.params.id}`).then(({ data }) => {
        meal.value = data.meals[0]
    }).catch((error) => {
        console.error(error)
    })
})



</script>