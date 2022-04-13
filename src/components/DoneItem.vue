<template>
  <div>完成</div>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(item, index) in dones"
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
      dones: computed(() => store.state.dones),
    };
  },
});
</script>

<style scoped></style>
