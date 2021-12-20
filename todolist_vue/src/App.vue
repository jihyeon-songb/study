<template>
  <div id="app">
    <TodoLIst></TodoLIst>
  </div>
</template>

<script>
import TodoLIst from "@/components/TodoLIst";
export default {
  name: 'App',
  components: {
    TodoLIst
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
