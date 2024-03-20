<template>
  <v-app>
    <v-main>
      <v-container>
        <CreateTodo :addTodo="addTodo" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const todos = ref([
  {
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: false,
  },
]);

const addTodo = (todo) => (todos.value = [...todos.value, todo]);
</script>
