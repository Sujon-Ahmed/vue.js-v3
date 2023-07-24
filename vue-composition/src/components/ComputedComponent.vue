<template>
  <div class="box">
    <h3>Options Computed - {{ fullName }}</h3>
    <input type="text" placeholder="Enter First Name" v-model="firstName" />
    <input type="text" placeholder="Enter Last Name" v-model="lastName" />
  </div>
  
  <div class="box">
    <h3>Composition Computed - {{ fullComputedName }}</h3>
    <input type="text" placeholder="Enter First Name" v-model="fName" />
    <input type="text" placeholder="Enter Last Name" v-model="lName" />
  </div>

  <div class="box">
    <h3>Composition Reactive Computed - {{ computedReactiveFullname }}</h3>
    <input
      type="text"
      placeholder="Enter First Name"
      v-model="computedReactiveFirstName"
    />
    <input
      type="text"
      placeholder="Enter Last Name"
      v-model="computedReactiveLastName"
    />
  </div>
</template>

<script>
import { computed, reactive, ref, toRefs } from "vue";
export default {
  name: "ComputedComponent",
  setup() {
    const fName = ref("");
    const lName = ref("");

    const fullComputedName = computed(() => fName.value + " " + lName.value);

    const state = reactive({
      computedReactiveFirstName: "",
      computedReactiveLastName: "",
    });

    const computedReactiveFullname = computed(
      () =>
        state.computedReactiveFirstName + " " + state.computedReactiveLastName
    );

    return {
      fName,
      lName,
      fullComputedName,
      ...toRefs(state),
      computedReactiveFullname,
    };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>

<style scoped>
.box {
  border: 1px solid #000;
  padding: 20px 0;
}
input[type="text"] {
  width: 300px;
  display: block;
  margin: auto;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 18px;
}
</style>
