<template>
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
  <br /><br />
  <PersonGreetComponent :firstName="firstName" :lastName="lastName" @callHeroes="callHeroes" />
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

    function callHeroes(hero) {
        alert(`Calling ${hero}`);
    }

    return {
      firstName,
      lastName,
      callHeroes
    };
  },
};
</script>

<style scoped></style>
