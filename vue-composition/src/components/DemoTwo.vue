<template>
  <h2>{{ firstName }} {{ lastName }}</h2>
  <h2>{{ fName }} {{ lName }}</h2>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "DemoTwo",
  data() {
    return {
      fName: "Sujon",
      lName: "Ahmed",
    };
  },
  setup() {
    const state = reactive({
      firstName: "Sujon Ahmed",
      lastName: "Riman",
    });

    setTimeout(() => {
      state.firstName = "Riman Ahmed";
      state.lastName = "Sujon";
      console.log(state);
    }, 2000);

    return toRefs(state);
  },
};
</script>

<style scoped></style>
