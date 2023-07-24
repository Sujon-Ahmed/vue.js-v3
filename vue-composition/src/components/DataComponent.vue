<template>
  <div>
    <h2>Option - {{ o_firstName }} {{ o_lastName }} a.k.a {{ o_heroName }}</h2>
    <h2>Composition - {{ c_firstName }}</h2>
    <h2>Composition - {{ greet }}</h2>
    <h2>Composition - {{ greetHero }}</h2>
    <h2>Composition Reactive - {{ greetReactiveHero }}</h2>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "DataComponent",
  setup() {
    const c_firstName = ref("Clark");
    const c_lastName = ref("Kent");
    const c_heroName = ref("Superman");

    const greet = `Hello, ${c_firstName.value}`;

    const greetHero = `${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`;

    // reactive
    const state = reactive({
      firstName: "Priencess",
      lastName: "Daina",
      heroName: "Wonder Woman"
    });

    const greetReactiveHero = `${state.firstName} ${state.lastName} a.k.a ${state.heroName}`;

    return {
      c_firstName,
      c_lastName,
      c_heroName,
      greet,
      greetHero,
      greetReactiveHero
    };
  },
  data() {
    return {
      o_firstName: "Bruce",
      o_lastName: "Wayne",
      o_heroName: "Batman",
    };
  },
};
</script>

<style scoped></style>
