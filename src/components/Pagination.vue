<script setup>
const props = defineProps({
  page: { type: Number, required: true },
  pageCount: { type: Number, required: true },
  prevPage: { type: Function, required: true },
  nextPage: { type: Function, required: true },
});
</script>

<template>
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
      <div class="mx-2 text-caption">Page {{ page }} of {{ pageCount }}</div>
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
