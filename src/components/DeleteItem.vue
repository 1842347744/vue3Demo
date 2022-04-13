<template>
  <div>删除</div>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(item, index) in deletes"
      :key="'todo-' + index"
    >
      <label>
        {{ item }}
      </label>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import store from "@/store";

export default defineComponent({
  setup() {
    return {
      deletes: computed(() => store.state.deletes),
    };
  },
});
</script>

<style scoped></style>
