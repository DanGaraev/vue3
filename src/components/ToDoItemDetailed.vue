<template>
  <div class="flex flex-col gap-8 items-center justify-center">
    <el-button @click.prevent="router.go(-1)">Назад</el-button>
    <p class="text-[24px]/[28px] text-red-300">
      {{ "Задача №" + todoStore.detailedToDo.id }}
    </p>
    <p class="text-[24px]/[28px] text-red-300">
      {{ todoStore.detailedToDo.todo }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useToDoStore } from "../store/todo-store";
import router from "../router";

const todoStore = useToDoStore();
</script>
