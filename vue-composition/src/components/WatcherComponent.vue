<template>
  <!-- options API -->
  <input type="text" placeholder="Name" v-model="name" />
  <br />
  <br />
  <!-- compositions API -->
  <input type="text" placeholder="firstName" v-model="firstName" />
  <input type="text" placeholder="firstName" v-model="lastName" />
  <br />
  <br />
  <!-- reactive compositions API -->
  <input type="text" placeholder="Reactive first name" v-model="fName" />
  <input type="text" placeholder="Reactive last name" v-model="lName" />
  <input
    type="text"
    placeholder="Reactive hero name"
    v-model="options.heroName"
  />
</template>

<script>
import { reactive, ref, toRefs, watch } from "vue";
import _ from "lodash";
export default {
  name: "WatcherComponent",
  setup() {
    const firstName = ref("");
    const lastName = ref("Ahmed");

    const state = reactive({
      fName: "",
      lName: "",
      options: {
        heroName: "",
      },
    });

    // reactive watch
    // watch(
    //   () => {
    //     return { ...state };
    //   },
    //   function (newValue, oldValue) {
    //     console.log("Reactive fName Old Value", oldValue.fName);
    //     console.log("Reactive fName New Value", newValue.fName);
    //     console.log("Reactive lName Old Value", oldValue.lName);
    //     console.log("Reactive lName New Value", newValue.lName);
    //   }
    // );

    watch(
      () => _.cloneDeep(state.options),
      function (newValue, oldValue) {
        console.log("fname old value", oldValue);
        console.log("fname new value", newValue);
      },
      {
        deep: true,
      }
    );

    watch(
      [firstName, lastName],
      (newValues, oldValues) => {
        console.log("firstName Old Value", oldValues[0]);
        console.log("firstName New Value", newValues[0]);

        console.log("lastName Old Value", oldValues[1]);
        console.log("lastName New Value", newValues[1]);
      },
      {
        immediate: true,
      }
    );

    return {
      firstName,
      lastName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log("Old Value", oldValue);
      console.log("New Value", newValue);
    },
  },
};
</script>

<style scoped></style>
