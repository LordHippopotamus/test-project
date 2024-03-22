<script setup>
import { ref } from "vue";
import { generateTodos } from "@/utils";

const todos = ref(generateTodos());

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
          :sortBy="[{ key: sortKey }]"
        >
          <template v-slot:header>
            <Toolbar
              v-model:search="search"
              v-model:sortKey="sortKey"
              :addTodo="addTodo"
            />
          </template>
          <template v-slot:no-data>
            <v-toolbar class="px-2">
              <div class="mx-auto text-center">
                <span class="text-body-1">Everything is Done! </span>
                <v-icon icon="mdi-emoticon-cool" />
                <p class="text-body-2">Or just clear the search field</p>
              </div>
            </v-toolbar>
          </template>
          <template v-slot:default="{ items }">
            <v-list>
              <TodoListItem
                v-for="item in items"
                :key="item.raw.id"
                :todo="item.raw"
                @delete="deleteTodo(item.raw.id)"
              />
            </v-list>
          </template>
          <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
            <Pagination
              :page="page"
              :pageCount="pageCount"
              :prevPage="prevPage"
              :nextPage="nextPage"
            />
          </template>
        </v-data-iterator>
      </v-container>
    </v-main>
  </v-app>
</template>
