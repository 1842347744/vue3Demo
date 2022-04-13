import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [] as string[],
    dones: [] as string[],
    deletes: [] as string[],
  },
  getters: {},
  mutations: {
    add(state, value) {
      state.todos.push(value);
    },
    delete(state, index) {
      const item = state.todos[index];
      state.todos.splice(index, 1);
      state.deletes.push(item);
    },
    checked(state, index) {
      const item = state.todos[index];
      state.todos.splice(index, 1);
      state.dones.push(item);
    },
  },
  actions: {},
  modules: {},
});
