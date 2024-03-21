<script setup>
import { ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";
import { lifeAspects } from "@/utils";

const props = defineProps({
  addTodo: {
    type: Function,
    required: true,
  },
});

const dialog = ref(false);
const valid = ref(false);
const title = ref("");
const deadline = ref("");
const lifeAspect = ref("");

const handleSubmit = async () => {
  if (!valid.value) return;
  props.addTodo({
    id: uuidv4(),
    title: title.value,
    deadline: new Date(deadline.value),
    lifeAspect: lifeAspect.value,
    completed: false,
  });
  dialog.value = false;
};

watch(dialog, (newValue) => {
  if (newValue) {
    valid.value = false;
    title.value = "";
    deadline.value = "";
    lifeAspect.value = "";
  }
});

const titleRules = [(value) => !!value || "Title is Required"];
const deadlineRules = [
  (value) => !!value || "Deadline is Required",
  (value) =>
    new Date(value).getTime() > Date.now() || "Deadline Cannot Be in the Past",
];
const aspectRules = [(value) => !!value || "Life Aspect is Required"];
</script>

<template>
  <v-btn @click="dialog = true" size="large" prepend-icon="mdi-plus">
    Create Todo
  </v-btn>
  <v-dialog v-model="dialog" max-width="400">
    <v-card title="Create Todo">
      <v-form @submit.prevent="handleSubmit" v-model="valid">
        <v-card-text>
          <v-text-field label="Title" v-model="title" :rules="titleRules" />

          <v-text-field
            label="Deadline"
            type="datetime-local"
            v-model="deadline"
            :rules="deadlineRules"
          />

          <v-select
            label="Life Aspect"
            v-model="lifeAspect"
            :items="lifeAspects"
            item-value="value"
            :rules="aspectRules"
          >
            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :title="item.raw.title"
                :prepend-icon="item.raw.icon"
              />
            </template>
          </v-select>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">Close</v-btn>
          <v-btn type="submit" color="primary">Create</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
