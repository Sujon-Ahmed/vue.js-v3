<template>
  <h2>{{ name }}</h2>
  <button type="button" @click="setName">Change Name</button>

  <h2>{{ count }}</h2>
  <button type="button" @click="updateCount">Update Count</button>

  <h2>{{ firstName }} {{ lastName }}</h2>
  <button type="button" @click="changeHere">Change Hero</button>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  name: "MethodsComponent",
  setup() {
    const count = ref(0);

    function updateCount() {
      count.value++;
    }

    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
    });

    function changeHere() {
      state.firstName = "Clark";
      state.lastName = "Kent";
    }

    return {
      count,
      updateCount,
      ...toRefs(state),
      changeHere
    };
  },
  data() {
    return {
      name: "Sujon Ahmed",
    };
  },
  methods: {
    setName() {
      this.name = "Riman Ahmed";
    },
  },
};
</script>

<style scoped></style>
