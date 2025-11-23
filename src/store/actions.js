import axiosInstance from "../axios";


export const searchMealsByLetter = ({commit},letter) => {
    axiosInstance.get(`/search.php?f=${letter}`).then(({data})=>{
        commit('setMealsByLetter',data.meals)
    })
}

export const searchMealsByName = ({commit},name) => {
    axiosInstance.get(`/search.php?s=${name}`).then(({data})=>{
        commit('setMealsByName',data.meals)
    })
}

export const searchMealsByIngredient = ({commit},ingredient) => {
    axiosInstance.get(`/filter.php?i=${ingredient}`).then(({data})=>{
        commit("setMealsByIngredient",data.meals)
    })
}