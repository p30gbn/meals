import {createMemoryHistory,createRouter,createWebHistory} from "vue-router"
import Home from "./views/Home.vue"
import MealDetails from "./views/MealDetails.vue"
import MealsByLetter from "./views/MealsByLetter.vue"
import MealsByName from "./views/MealsByName.vue"
import Ingredients from "./views/Ingredients.vue"
import MealsByIngredient from "./views/MealsByIngredient.vue"


const routes = [
    {
        path:"/",
        name:"home",
        component:Home,
        meta:{title:"Meals"}
    },
    {
        path:"/meal/:id",
        name:"mealDetails",
        component:MealDetails
    },
    {
        path:"/by-letter/:letter?",
        name:"byLetter",
        component:MealsByLetter,
    },
    {
        path:"/by-name/:name?",
        name:"byName",
        component:MealsByName

    },
    {
        path:"/ingredients",
        name:"ingredients",
        component:Ingredients,
        meta:{
            title:"Ingredients"
        }
    },
    {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      }
]

const router = createRouter({
    history:createMemoryHistory(),
    routes:routes
})

router.beforeEach((to,from)=>{[
    document.title = to.meta.title || "Meals"
]})

export default router