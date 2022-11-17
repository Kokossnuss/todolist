<script setup lang="ts">
    import Authbox from "./auth/Authbox.vue"
    import { _Dash } from "./Dashstore";
</script>
<template>
  <div class="dashboard">
    <Authbox v-if="_Dash.state.auth"/>
  </div>
</template>

<style scoped>
.dashboard {
  border: 3px solid darkgrey;
  min-height: 75vh;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  background-color: whitesmoke;
}
</style>
