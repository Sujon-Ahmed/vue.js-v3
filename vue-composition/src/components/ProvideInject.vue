<template>
  <div>
    <h3>Parent Component {{ name }}</h3>
    <h3>Parent Component count {{ c_count }}</h3>
    <button @click="incrementCount">Increment Count</button>
    <h3>Parent Component reactive hero {{ firstName }} {{ lastName }}</h3>
    <ChildA />
  </div>
</template>

<script>
import { provide, reactive, ref, toRefs } from "vue";
import ChildA from "./ChildA.vue";

export default {
  name: "ProvideInject",
  setup() {
    provide("compositonUserName", "Sujon Ahmed Riman");

    const c_count = ref(0);
    function incrementCount() {
      c_count.value++;
    }

    const state = reactive({
      firstName: "Sujon",
      lastName: "Ahmed",
    });

    provide("c_count", c_count);
    provide("c_hero", state);
    provide("incrementCount", incrementCount);

    return {
      c_count,
      ...toRefs(state),
      incrementCount,
    };
  },
  data() {
    return {
      name: "Sujon",
    };
  },
  components: {
    ChildA,
  },
  provide() {
    return {
      userName: this.name,
    };
  },
};
</script>

<style scoped></style>
