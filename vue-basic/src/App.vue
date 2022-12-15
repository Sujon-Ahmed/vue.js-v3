<template>
  <h3>{{ name }}</h3>
  <p v-text="gmail"></p>
  <h4 v-bind:id="isSuccessed" v-html="nickName"></h4>
  <p v-html="hack"></p>
  <button v-bind:disabled="isDisabled">Bind Disabled</button>
  <p v-bind:class="danger" class="underline">class binding</p>
  <h2 v-bind:class="isPromoted && 'promoted'">promoted movie</h2>
  <h2 v-bind:class="isSoldout ? 'sold-out' : 'new'">sold-out movie</h2>
  <h2 v-bind:class="['new', 'promoted']">Newly promoted movie</h2>
  <h2 v-bind:class="[isPromoted && 'promoted', isSoldout ? 'sold-out' : 'new']">
    Array conditional movie
  </h2>
  <h2
    v-bind:class="{
      promoted: isPromoted,
      new: !isSoldout,
      'sold-out': isSoldout,
    }"
  >
    Object conditional movie
  </h2>
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
      danger: "danger",
      isPromoted: false,
      isSoldout: true,
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
.danger {
  color: red;
}
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: green;
}
.sold-out {
  color: red;
}
</style>
