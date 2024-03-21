<script setup>
import { ref } from "vue";
import { getIconByValue } from "@/utils";

const props = defineProps({ todo: { required: true } });

const dialog = ref(null);
</script>

<template>
  <v-list-item>
    <template v-slot:prepend>
      <v-icon :icon="getIconByValue(todo.lifeAspect)" />
    </template>
    <v-list-item-title
      v-text="todo.title"
      :class="todo.completed && 'text-decoration-line-through'"
    />
    <v-list-item-subtitle
      v-text="'Deadline: ' + todo.deadline.toLocaleString()"
    />
    <template v-slot:append>
      <v-list-item-action>
        <v-checkbox-btn v-model="todo.completed" />
      </v-list-item-action>
      <v-list-item-action>
        <v-btn
          icon="mdi-delete"
          variant="text"
          color="orange"
          class="ml-1"
          @click="dialog = true"
        />
      </v-list-item-action>
    </template>
    <v-dialog v-model="dialog" max-width="400">
      <v-card title="Delete Todo">
        <v-card-text>
          Are you sure you want to delete the todo
          <b>{{ todo.title }}</b>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">Close</v-btn>
          <v-btn
            @click="
              $emit('delete');
              dialog = false;
            "
            color="orange"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>
