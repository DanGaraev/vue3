<template>
  <div
    class="flex items-center justify-between h-fit mt-1"
    style="border: 1px red solid"
  >
    <div class="flex items-center gap-[8px]">
      <el-checkbox v-model="todoItem.completed" />
      <p
        v-if="!todoItem.isEditing"
        :class="[
          'text-[16px]/[18px] font-medium',
          { 'text-green-500': !todoItem.completed },
          { 'line-through text-orange-500': todoItem.completed },
        ]"
        @click.prevent="handleOpenDetailedToDo(todoItem.id)"
      >
        {{ todoItem.todo }}
      </p>
      <el-input v-else v-model="todoItem.todo" type="text" />
    </div>
    <div v-if="!todoItem.isEditing" class="flex items-center gap-[8px]">
      <el-button type="warning" @click.prevent="handleEditToDo(todoItem)">
        Редактировать
      </el-button>
      <el-button type="danger" @click.prevent="todoStore.deleteToDo(todoItem)">
        Удалить
      </el-button>
    </div>
    <div v-else>
      <el-button type="success" @click.prevent="handleSaveEdited(todoItem)">
        Сохранить
      </el-button>
      <el-button
        type="info"
        @click.prevent="handleStopEdit(todoItem, editingToDo)"
      >
        Отменить
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IToDoItem } from "./ToDo.vue";
import { useToDoStore } from "../store/todo-store";
import { ref } from "vue";
import router from "../router";

const todoStore = useToDoStore();

interface Props {
  todoItem: IToDoItem;
}

const { todoItem } = defineProps<Props>();

const editingToDo = ref("");

const handleEditToDo = (todoItem: IToDoItem) => {
  editingToDo.value = todoItem.todo;
  todoStore.todoEditing(todoItem);
};

const handleStopEdit = (todoItem: IToDoItem, oldToDo: string) => {
  todoStore.stopEditing(todoItem, oldToDo);
  editingToDo.value = "";
};

const handleSaveEdited = (todoItem: IToDoItem) => {
  todoStore.saveEdited(todoItem);
  editingToDo.value = "";
};

const handleOpenDetailedToDo = (id: number) => {
  todoStore.getToDo(id);
  router.push(`/todo-detailed/${id}`);
};
</script>
