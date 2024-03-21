<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const todos = ref([
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "todo",
    deadline: new Date(),
    lifeAspect: "education",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "todo",
    deadline: new Date(),
    lifeAspect: "education",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "todo",
    deadline: new Date(),
    lifeAspect: "education",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "todo",
    deadline: new Date(),
    lifeAspect: "education",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "todo",
    deadline: new Date(),
    lifeAspect: "education",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "todo",
    deadline: new Date(),
    lifeAspect: "education",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "todo",
    deadline: new Date(),
    lifeAspect: "education",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "todo",
    deadline: new Date(),
    lifeAspect: "education",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "todo",
    deadline: new Date(),
    lifeAspect: "education",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "qwerty",
    deadline: new Date(),
    lifeAspect: "health",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "todo",
    deadline: new Date(),
    lifeAspect: "education",
    completed: false,
  },
]);

const search = ref("");
const sortKey = ref("deadline");

const addTodo = (todo) => (todos.value = [...todos.value, todo]);
const deleteTodo = (id) => {
  const index = todos.value.findIndex((el) => el.id === id);
  todos.value.splice(index, 1);
};
</script>

<template>
  <v-app>
    <v-main>
      <v-container style="max-width: 500px">
        <v-data-iterator
          :items="todos"
          :itemsPerPage="8"
          :search="search"
          :sortBy="{ key: sortKey }"
        >
          <template v-slot:header>
            <Toolbar
              v-model:search="search"
              v-model:sortKey="sortKey"
              :addTodo="addTodo"
            />
          </template>
          <template v-slot:default="{ items }">
            <v-list v-if="items.length">
              <TodoListItem
                v-for="item in items"
                :key="item.raw.id"
                :todo="item.raw"
                @delete="deleteTodo(item.raw.id)"
              />
            </v-list>
            <div v-if="!items.length">All is Done!</div>
          </template>
          <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
            <v-toolbar class="px-2">
              <div class="d-flex align-center justify-center w-100">
                <v-btn
                  :disabled="page === 1"
                  class="me-2"
                  icon="mdi-arrow-left"
                  size="small"
                  variant="tonal"
                  @click="prevPage"
                />
                <div class="mx-2 text-caption">
                  Page {{ page }} of {{ pageCount }}
                </div>
                <v-btn
                  :disabled="page === pageCount"
                  icon="mdi-arrow-right"
                  size="small"
                  variant="tonal"
                  @click="nextPage"
                />
              </div>
            </v-toolbar>
          </template>
        </v-data-iterator>
      </v-container>
    </v-main>
  </v-app>
</template>
