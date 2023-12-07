import makeRequest from "../httpClient";

export const fetchTodos = () =>
  makeRequest({
    url: "https://dummyjson.com/todos",
    method: "GET",
  });

export const fetchToDo = (id: number) =>
  makeRequest({
    url: `https://dummyjson.com/todos/${id}`,
    method: "GET",
  });
