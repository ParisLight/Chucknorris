import { defineStore } from "pinia";
import { ref } from "vue";

export const useState = defineStore("state", () => {
  const jokes = ref([]);

  return {
    jokes
  };
});
