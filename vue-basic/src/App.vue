<template>
  <h3>{{ name }}</h3>
  <p v-text="gmail"></p>
  <h4 :id="isSuccessed" v-html="nickName"></h4>
  <p v-html="hack"></p>
  <button :disabled="isDisabled">Bind Disabled</button>
  <p :class="danger" class="underline">class binding</p>
  <h2 :class="isPromoted && 'promoted'">promoted movie</h2>
  <h2 :class="isSoldout ? 'sold-out' : 'new'">sold-out movie</h2>
  <h2 :class="['new', 'promoted']">Newly promoted movie</h2>
  <h2 :class="[isPromoted && 'promoted', isSoldout ? 'sold-out' : 'new']">
    Array conditional movie
  </h2>
  <h2
    :class="{
      promoted: isPromoted,
      new: !isSoldout,
      'sold-out': isSoldout,
    }"
  >
    Object conditional movie
  </h2>
  <!-- style binding -->
  <h2
    :style="{
      color: highlightColor,
      fontSize: headerSize + 'px',
      padding: '20px',
    }"
  >
    Inline Style
  </h2>
  <h1 :style="headerStyleObject">Style Object</h1>
  <div :style="[baseStyleObject, successStyleObject]">
    Inline array base style
  </div>
  <div :style="[baseStyleObject, dangerStyleObject]">
    Inline array base style two
  </div>

  <!-- conditional rendering -->
  <h2 v-if="num === 0">Number is Zero</h2>
  <h2 v-else-if="num > 0">Number is Positive</h2>
  <h2 v-else-if="num < 0">Number is Negative</h2>
  <h2 v-else>Not a Number</h2>

  <template v-if="msg === 'Hi Mom'">
    <h3>I am Sujon</h3>
    <h3>I love my mom 💜</h3>
    <h3>She is my heart❣</h3>
  </template>

  <!-- conditional rendering  -->
  <!-- v-if VS v-show ? ans: v-if => condition when false remove dom elem but v-show display:none not remove dom tree-->
  <h2 v-show="showElem">Using v-show</h2>
  <h2 v-if="showElem">Using v-if</h2>
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
      highlightColor: "orange",
      headerSize: 50,
      headerStyleObject: {
        color: "orange",
        fontSize: "50px",
        padding: "20px",
      },
      baseStyleObject: {
        fontSize: "50px",
        padding: "20px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
        padding: "50px",
      },
      dangerStyleObject: {
        color: "darkred",
        backgroundColor: "red",
        border: "1px solid red",
      },
      num: 5,
      msg: "Hi Mom",
      showElem: false,
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
