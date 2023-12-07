<template>
  <div class="w-[100vw] h-[100vh] flex items-center justify-center">
    <div
      class="w-[500px] h-[800px] bg-gray-600 py-[14px] px-[20px] flex flex-col gap-[12px]"
    >
      <div>
        <p class="text-[24px]/[24px] font-bold">ToDo List</p>
      </div>
      <form class="flex items-center gap-[8px]">
        <el-input v-model="creatingToDo" class="create_input" type="text" />
        <el-button
          type="primary"
          @click.prevent="todoStore.createToDo(creatingToDo)"
        >
          Завести задачу
        </el-button>
      </form>
      <ToDoList
        :todoList="todoStore.todos"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ToDoList from "../components/ToDoList.vue";
import { useToDoStore } from "../store/todo-store";
import { onMounted } from "vue";

const todoStore = useToDoStore();
const creatingToDo = ref("");

export interface IToDoItem {
  id: number;
  completed: boolean;
  userId: number;
  todo: string;
  isEditing: boolean;
}

onMounted(() => {
  todoStore.getToDos();
});



// const handleSaveEdited = (todoItem: IToDoItem) => {
//   let editingToDo = editingToDos.value.find(
//     (editingToDo) => editingToDo.id === todoItem.id
//   );
//   if (editingToDo) {
//     todoItem.isEditing = false;
//     let editingToDoIndex = editingToDos.value.indexOf(editingToDo);
//     editingToDos.value.splice(editingToDoIndex, 1);
//   }
// };
</script>
