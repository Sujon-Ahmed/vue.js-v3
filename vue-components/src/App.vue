<template>
  <!-- <GreetComponent name="Bruce" heroName="Batman" />
  <GreetComponent name="Clark" heroName="Superman" />
  <GreetComponent name="Daina" heroName="Wonder Woman" />
  <GreetComponent :name="name" :heroName="heroName" /> -->
  <ArticleComponent title="Artcle title" :likes="50" :isPublished="true" />
</template>

<script>
// import GreetComponent from "./components/GreetComponent.vue";
import ArticleComponent from "./components/ArticleComponent.vue";
export default {
  name: "App",
  components: {
    // GreetComponent,
    ArticleComponent

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
