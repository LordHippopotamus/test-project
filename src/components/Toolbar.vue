<script setup>
const search = defineModel("search");
const sortKey = defineModel("sortKey");
defineProps({
  addTodo: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <v-toolbar class="px-2">
    <div class="d-flex align-center justify-center w-100 ga-2">
      <v-text-field
        v-model="search"
        density="comfortable"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        style="max-width: 300px"
        variant="solo"
        clearable
        hide-details
      />
      <v-select
        v-model="sortKey"
        label="Sort By"
        :items="['deadline', 'title', 'completed', 'lifeAspect']"
        density="comfortable"
        hide-details
        variant="solo"
        style="max-width: 150px"
      />
      <CreateTodo :addTodo="addTodo" />
    </div>
  </v-toolbar>
</template>
