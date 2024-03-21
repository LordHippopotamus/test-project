<script setup>
import { ref } from "vue";

const props = defineProps({ todos: { type: Array, required: true } });

const page = ref(1);
const itemsPerPage = 12;
</script>

<template>
  <v-data-iterator :items="todos" :page="page" :itemsPerPage="itemsPerPage">
    <template v-slot:default="{ items }">
      <v-list>
        <TodoListItem
          v-for="item in items"
          :key="item.raw.id"
          :todo="item.raw"
          @delete="
            const index = items.findIndex((el) => el.id === item.raw.id);
            todos.splice(index, 1);
          "
        />
      </v-list>
    </template>
  </v-data-iterator>
  <div class="mt-2">
    <v-pagination
      v-model="page"
      :length="Math.ceil(todos.length / itemsPerPage)"
    />
  </div>
</template>
