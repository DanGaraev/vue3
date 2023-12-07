<template>
  <div class="flex flex-col gap-[16px]">
    <el-scrollbar class="pr-4" height="700px">
      <ToDoListItem
        v-for="todoItem in todoList"
        :key="todoItem.id"
        :todoItem="todoItem"
      />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { IToDoItem } from "./ToDo.vue";
import ToDoListItem from "../components/ToDoListItem.vue";

interface Props {
  todoList: IToDoItem[];
}

const { todoList } = defineProps<Props>();
</script>
