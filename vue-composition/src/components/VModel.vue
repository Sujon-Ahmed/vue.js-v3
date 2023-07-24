<template>
  <!-- Options API V-Model -->
  <input type="text" placeholder="Enter Fast Name" v-model="fname" />
  <input type="text" placeholder="Enter Last Name" v-model="lname" />
  <br />
  <br />
  <!-- Composition API V-Model -->
  <input type="text" placeholder="Enter Fast Name" v-model="firstName" />
  <input type="text" placeholder="Enter Last Name" v-model="lastName" />
  <input type="text" placeholder="Enter Hero Name" v-model="heroName" />
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  name: "VModel",
  setup() {
    const heroName = ref("");

    const state = reactive({
      firstName: "",
      lastName: "",
    });

    return {
      heroName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      fname: "",
      lname: "",
    };
  },
};
</script>

<style scoped></style>
