<template>
  <button @click="incrementCount">Clicked {{ count }} times</button>
</template>

<script>
// import CounterMixin from "../mixins/counter";
import useCounter from "../composables/useCounter";
export default {
  name: "ClickCounter",
  setup() {
    const { count, incrementCount } = useCounter(10, 5);

    return {
      count,
      incrementCount,
    };
  },
  //   mixins: [CounterMixin],
};
</script>

<style scoped></style>
