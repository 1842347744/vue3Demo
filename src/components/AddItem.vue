<template>
  <div class="form-group">
    <label for="exampleInputName2">待办项</label>
    <input
      type="text"
      class="form-control"
      id="exampleInputName2"
      placeholder="请输入代办项"
      v-model="inputval"
      @keydown.enter="addTodo(inputval)"
    />
    <small class="help-block">回车即可</small>
  </div>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(item, index) in todos"
      :key="'todo-' + index"
    >
      <div
        class="form-check"
        style="
          display: flex;
          align-item: center;
          justify-content: space-between;
        "
      >
        <label>
          <input type="checkbox" @change="checkTodo(index)" />
          {{ item }}
        </label>
        <button
          type="button"
          class="btn btn-sm btn-danger"
          @click="deleteTodo(index)"
        >
          删除
        </button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from "vue";
import store from "@/store";

export default defineComponent({
  setup() {
    // let inputval = ref("");
    let inputval = "";
    const addTodo = (value: string) => {
      if (value.trim() === "") return;
      store.commit("add", value);
      inputval = "";
    };
    const checkTodo = (index: number) => {
      store.commit("checked", index);
    };
    const deleteTodo = (index: number) => {
      store.commit("delete", index);
    };
    const dataObj = reactive({
      inputval,
      todos: computed(() => store.state.todos),
      addTodo,
      deleteTodo,
      checkTodo,
    });
    return dataObj;

    // return {
    //   inputval,
    //   todos: computed(() => store.state.todos),
    //   addTodo,
    //   deleteTodo,
    //   checkTodo,
    // };
  },
});
</script>

<style scoped></style>
