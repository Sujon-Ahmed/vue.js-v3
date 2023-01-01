<template>
  <GreetComponent name="Bruce" heroName="Batman" />
  <GreetComponent name="Clark" heroName="Superman" />
  <GreetComponent name="Daina" heroName="Wonder Woman" />
  <GreetComponent :name="name" :heroName="heroName" />
</template>

<script>
import GreetComponent from "./components/GreetComponent.vue";
export default {
  name: "App",
  components: {
    GreetComponent,
  },
  data() {
    return{
      name: 'Sujon Ahmed',
      heroName: 'Developer'
    }
  }
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
