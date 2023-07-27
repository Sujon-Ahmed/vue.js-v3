import { ref } from "vue";

export default function useCounter(initailCount, stepSize) {
  const count = ref(initailCount);

  function incrementCount() {
    count.value += stepSize;
  }

  return {
    count,
    incrementCount,
  };
}
