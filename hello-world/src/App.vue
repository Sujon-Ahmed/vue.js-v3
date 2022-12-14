<template>
  <h2>{{ greet }} {{ name }}</h2>
  <h3 v-text="nickName"></h3>
  <div v-html="designation"></div>
  <div v-html="hack"></div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      greet: "Hello",
      name: "Sujon Ahmed",
      nickName: "Riman",
      designation: "<i>Web Application Developer</i>",
      hack: `<a href="#" onclick="alert('You have been HACKED!')">Win a prize!</a>`,
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
  margin-top: 50px;
}
</style>
