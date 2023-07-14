<template>
  <div>
    <h2>Option - {{ o_firstName }}</h2>
    <h2>Composition - {{ c_firstName }}</h2>
    <h2>Composition - {{ greet }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DataComponent",
  setup() {
    const c_firstName = ref("Clark");
    
    c_firstName.value = "Daina";
    const greet = `Hello, ${c_firstName.value}`;

    return {
      c_firstName,
      greet,
    };
  },
  data() {
    return {
      o_firstName: "Bruce",
    };
  },
};
</script>

<style scoped></style>
