<template>
  <div>Hello, {{ firstName }} {{ lastName }}</div>
  <div>Hello, {{ fullName }}</div>
  <div>Hello, {{ fullname }}</div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PersonGreetComponent",
  setup(props) {
    const fullname = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    return {
      fullname,
    };
  },
  props: ["firstName", "lastName"],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>

<style scoped></style>
