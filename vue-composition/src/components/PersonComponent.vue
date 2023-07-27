<template>
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
  <br /><br />
  <PersonGreetComponent :firstName="firstName" :lastName="lastName" />
</template>

<script>
import { ref } from "vue";
import PersonGreetComponent from "./PersonGreetComponent.vue";
export default {
  name: "PersonComponent",
  components: {
    PersonGreetComponent,
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");

    return {
      firstName,
      lastName,
    };
  },
};
</script>

<style scoped></style>
