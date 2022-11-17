<script setup lang="ts">
    import Login from "./content/features/Login.vue";
    import Register from "./content/features/Register.vue";
    import Errormsg from "./content/features/Errormsg.vue";
    import {_Auth} from './Authstore'
</script>
<template>
    <div class="authcont">
        <h2>{{_Auth.state.authContent}}</h2>
        <Errormsg v-if="_Auth.state.err"/>
        <Login v-if="_Auth.state.authContent=== 'Login'" />
        <Register v-if="_Auth.state.authContent=== 'Register'" />
    </div>
</template>
<style scoped>
.authcont{
    background-color: lightgrey;
    width: 400px;
    min-height: 200px;
    border-radius: 10px;
    position: absolute;
    justify-self: center;
    top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-bottom-right-radius: 0px;
}
h2{
    margin-top: 10px;
    margin-bottom: 30px;
}
</style>