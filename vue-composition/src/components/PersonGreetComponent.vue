<template>
  <!-- <div>Hello, {{ firstName }} {{ lastName }}</div>
  <div>Hello, {{ fullName }}</div> -->
  <!-- <div>Hello, {{ fullname }}</div> -->
  <button @click="sendEvent">Call Heroes</button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PersonGreetComponent",
  setup(props, context) {
    console.log(context);
    const fullname = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    function sendEvent() {
      context.emit("callHeroes", fullname.value);
    }

    return {
      fullname,
      sendEvent,
    };
  },
  props: ["firstName", "lastName"],
  emits: ["callHeroes"],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>

<style scoped></style>
