<template>
  <!-- <GreetComponent name="Bruce" heroName="Batman" />
  <GreetComponent name="Clark" heroName="Superman" />
  <GreetComponent name="Daina" heroName="Wonder Woman" />
  <GreetComponent :name="name" :heroName="heroName" /> -->
  <!-- <ArticleComponent id="my-article" title="Artcle title" :likes="50" :isPublished="true" /> -->
  <h2>AppComponent username {{ name }}</h2>
  <ComponentC />
</template>

<script>
// import GreetComponent from "./components/GreetComponent.vue";
// import ArticleComponent from "./components/ArticleComponent.vue";
import ComponentC from "./components/ComponentC.vue";
export default {
  name: "App",
  components: {
    // GreetComponent,
    ComponentC,
  },
  data() {
    return {
      name: "Sujon Ahmed",
      heroName: "Developer",
    };
  },
  provide() {
    return {
      username: this.name,
    };
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
