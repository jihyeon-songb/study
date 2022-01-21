<template>
  <div id="app">
    <TodoLIst></TodoLIst>
    <quill />
    <tiptap />
  </div>
</template>

<script>
import Tiptap from './components/Tiptap.vue';
import Quill from './components/Quill.vue';
import TodoLIst from "@/components/TodoLIst";

export default {
  name: 'App',
  components: {
    TodoLIst,
    Tiptap,
    Quill
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
