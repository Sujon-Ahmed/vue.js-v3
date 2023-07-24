<template>
  <h2>{{ name }}</h2>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DemoOne",
  setup() {
    let name = ref("Sujon Ahmed");

    setTimeout(() => {
      name.value = "Riman Ahmed";
    }, 2000);

    return { name };
  },
};
</script>

<style scoped></style>
