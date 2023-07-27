<template>
  <LifecycleO />
  <LifecycleC />
</template>

<script>
import LifecycleO from "./components/LifecycleO.vue";
import LifecycleC from "./components/LifecycleC.vue";

export default {
  name: "App",
  components: {
    LifecycleO,
    LifecycleC,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
