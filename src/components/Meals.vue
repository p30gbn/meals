<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 py-4 d-flex align-items-stretch" v-for="meal in meals" :key="meal.idMeal">
                <BCard :title="meal.strMeal" :img-src="meal.strMealThumb" img-alt="Image" img-top tag="article"
                    style="max-width: 20rem">
                    <BCardText>
                        {{ meal.strInstructions.split("").slice(0, 150).join("") }}
                    </BCardText>
                    <template #footer>
                        <BButton class="mx-auto" :to="'/meal/' + meal.idMeal" variant="primary">Visit Meal Page</BButton>
                    </template>
                </BCard>
            </div>
        </div>
    </div>

</template>

<script setup>
import { BCard, BCardText, BButton } from "bootstrap-vue-next"
import { defineProps } from "vue";

defineProps(["meals"])
</script>