<script setup>
import { ref } from "vue";
import { getIconByValue } from "@/utils";

const props = defineProps({ todos: { type: Array, required: true } });
const page = ref(1);
const itemsPerPage = 12;
</script>

<template>
  <v-data-iterator :items="todos" :page="page" :itemsPerPage="itemsPerPage">
    <template v-slot:default="{ items }">
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="item.raw.id">
          <template v-slot:prepend>
            <v-icon :icon="getIconByValue(item.raw.lifeAspect)" />
          </template>
          <v-list-item-title
            v-text="item.raw.title"
            :class="item.raw.completed && 'text-decoration-line-through'"
          />
          <v-list-item-subtitle
            v-text="'Deadline: ' + item.raw.deadline.toLocaleString()"
          />
          <template v-slot:append>
            <v-list-item-action>
              <v-checkbox-btn v-model="item.raw.completed" />
            </v-list-item-action>
          </template>
        </v-list-item>
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
