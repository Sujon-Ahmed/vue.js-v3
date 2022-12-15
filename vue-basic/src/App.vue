<template>
  <h3>{{ name }}</h3>
  <p v-text="gmail"></p>
  <h4 v-bind:id="isSuccessed" v-html="nickName"></h4>
  <p v-html="hack"></p>
  <button v-bind:disabled="isDisabled">Bind Disabled</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Sujon Ahmed",
      gmail: "sujonahmed5284@gmail.com",
      nickName: "<b>Riman</b>",
      isSuccessed: "success",
      hack: `<a href="#" onclick="alert('You have been HACKED!')"">Win a prize</a>`,
      isDisabled: true,
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
#success {
  color: springgreen;
}
</style>
