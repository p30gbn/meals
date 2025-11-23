<template>
    <b-navbar v-b-color-mode="'dark'" variant="dark-subtle">
        <b-navbar-nav>
            <b-nav-item to="/">
                Home
            </b-nav-item>
            <b-nav-item to="/by-letter">
                Meals By Letter
            </b-nav-item>
            <b-nav-item to="/by-name">
                Meals By Name
            </b-nav-item>
            <b-nav-item to="/ingredients">
                Ingredients
            </b-nav-item>
        </b-navbar-nav>

    </b-navbar>

</template>

<script setup>
import {BNavbar,BNavbarNav,BNavItem} from "bootstrap-vue-next"
</script>