import { todos } from "../api";
import { defineStore } from "pinia";
import { IToDoItem } from "../components/ToDo.vue";

export const useToDoStore = defineStore("todo-store", {
  state: () => ({
    todos: <IToDoItem[]>[],
    detailedToDo: <IToDoItem>{},
    nextID: 31,
  }),
  actions: {
    getToDos() {
      return todos.fetchTodos().then(({ data }) => {
        return (this.todos = data.todos);
      });
    },
    getToDo(id: number) {
      return todos.fetchToDo(id).then(({ data }) => {
        this.detailedToDo = data;
      });
    },
    createToDo(creatingToDo: string) {
      this.todos.push({
        id: this.nextID,
        completed: false,
        todo: creatingToDo,
        userId: 432,
        isEditing: false,
      });
      this.nextID += 1;
    },
    deleteToDo(todoItem: IToDoItem) {
      let todoToDeleteIndex = this.todos.indexOf(todoItem);
      if (todoToDeleteIndex !== -1) {
        this.todos.splice(todoToDeleteIndex, 1);
      }
    },
    todoEditing(item: IToDoItem) {
      let editingToDoIndex = this.todos.indexOf(item);
      this.todos[editingToDoIndex].isEditing = true;
    },
    stopEditing(item: IToDoItem, oldToDo: string) {
      let editingToDoIndex = this.todos.indexOf(item);
      this.todos[editingToDoIndex].todo = oldToDo;
      this.todos[editingToDoIndex].isEditing = false;
    },
    saveEdited(item: IToDoItem) {
      let editingToDoIndex = this.todos.indexOf(item);
      this.todos[editingToDoIndex].isEditing = false;
    },
  },
});
