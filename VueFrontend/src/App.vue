<script setup lang="ts">
import Dashboard from "./components/Dashboard.vue"
</script>
 
<template>
  <header>
    <button class="logout">X</button>
    <h1>Todolist</h1>
    <button class="userbtn">U</button>
  </header>
  <main>
    <Dashboard/>
  </main>
</template>

<style scoped>
header {
  width: inherit;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  border-bottom: 5px solid black;
  background-color: whitesmoke;
  border-radius: 15px;
  border-bottom-right-radius: 0px;
  padding: 10px;
}
main{
  margin-top: 30px;

}
.logout {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: lightcoral;
  border-color: red;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: darkred;
}
.userbtn {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: lightgreen;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
  border-color: green;
}
</style>
