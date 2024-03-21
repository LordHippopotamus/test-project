<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column ga-3" style="max-width: 500px">
        <CreateTodo :addTodo="addTodo" />
        <TodoList :todos="todos" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const todos = ref([
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: false,
  },
]);

const addTodo = (todo) => (todos.value = [...todos.value, todo]);
</script>
