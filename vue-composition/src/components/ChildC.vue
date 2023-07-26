<template>
  <div>
    <h3>Child C Component</h3>
    <h4>Child Component C username - {{ userName }}</h4>
    <h4>Child Component Composition Username - {{ childUserName }}</h4>
    <h4>Child Component Composition count - {{ c_count }}</h4>
    <button @click="incrementCount">Increment Count</button>
    <h4>
      Child Component Composition reactive hero - {{ firstName }} {{ lastName }}
    </h4>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "ChildC",
  setup() {
    const childUserName = inject("compositonUserName", "Default Username");
    const c_count = inject("c_count", 0);
    const c_hero = inject("c_hero", {});
    const incrementCount = inject("incrementCount");

    return {
      childUserName,
      c_count,
      ...toRefs(c_hero),
      incrementCount,
    };
  },
  inject: ["userName"],
};
</script>

<style scoped></style>
