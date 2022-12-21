<template>
  <!-- <h3>{{ name }}</h3>
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
  </h2> -->
  <!-- style binding -->
  <!-- <h2
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
  </div> -->

  <!-- conditional rendering -->
  <!-- <h2 v-if="num === 0">Number is Zero</h2>
  <h2 v-else-if="num > 0">Number is Positive</h2>
  <h2 v-else-if="num < 0">Number is Negative</h2>
  <h2 v-else>Not a Number</h2>

  <template v-if="msg === 'Hi Mom'">
    <h3>I am Sujon</h3>
    <h3>I love my mom 💜</h3>
    <h3>She is my heart</h3>
  </template> -->

  <!-- conditional rendering  -->
  <!-- v-if VS v-show ? ans: v-if => condition when false remove dom elem but v-show display:none not remove dom tree-->
  <!-- <h2 v-show="showElem">Using v-show</h2>
  <h2 v-if="showElem">Using v-if</h2> -->

  <!-- list rendering -->
  <!-- <h2 v-for="(name, index) in names" :key="index">{{ index }} {{ name }}</h2>
  <h2 v-for="name in fullNames" :key="name.first">
    {{ name.first }} {{ name.last }}
  </h2>
  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>

  <h2 v-for="info in myInfo" :key="info">{{ info }}</h2> -->

  <!-- conditional list rendering -->
  <!-- <template v-for="name in names" :key="name">
    <h1 v-if="name === 'sujon'">{{ name }}</h1>
  </template> -->

  <!-- methods -->
  <!-- <h4>{{ 2 + 2 }}</h4>
  <h4>{{ 20 + 30 + 40 }}</h4>
  <h2>Add Methods - {{ add(10,20,30) }}</h2>
  <h1>Multily Methods - {{ multiply(baseValue) }}</h1> -->

  <!-- Event Handling -->
  <!-- <h2>{{ name }}</h2>
  <button v-on:click="name = 'Superman'">Change Name</button>

  <h2>{{ count }}</h2>
  <div>
    <button v-on:click="increment(1)">Increment 1</button>
    <button v-on:click="increment(5)">Increment 5</button>
    <button v-on:click="decrement(1)">Decrement 1</button>
    <button v-on:click="decrement(5)">Decrement 5</button>
  </div> -->

  <!-- Form Handling  -->
  <!-- <form @submit.prevent="formSubmit">
    <div>
      <pre>
        {{ JSON.stringify(formValues, null, 2) }}
      </pre>
    </div>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model.trim.lazy="formValues.name" />
    </div>
    <div>
      <label for="profile">Profile Summary</label>
      <textarea
        name="profile"
        id="profile"
        cols="10"
        rows="5"
        v-model="formValues.profileSummary"
      ></textarea>
    </div>
    <div>
      <label for="country">Country</label>
      <select name="country" id="country" v-model="formValues.country">
        <option value="">Select a Country</option>
        <option value="bangladesh">Bangladesh</option>
        <option value="india">India</option>
        <option value="pakistan">Pakistan</option>
        <option value="china">China</option>
      </select>
    </div>
    <div>
      <label for="job-location">Job Location</label>
      <select
        name="job-location"
        id="job-location"
        multiple
        v-model="formValues.jobLocation"
      >
        <option value="bangladesh">Bangladesh</option>
        <option value="india">India</option>
        <option value="pakistan">Pakistan</option>
        <option value="china">China</option>
      </select>
    </div>
    <div>
      <input
        type="checkbox"
        name="remote-work"
        id="remote-work"
        true-value="yes"
        false-value="no"
        v-model="formValues.remoteWork"
      />
      <label for="remote-work">Open to remote work?</label>
    </div>
    <div>
      <label>Skill Set</label>
      <input
        type="checkbox"
        value="html"
        id="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        value="css"
        id="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        value="javaScript"
        id="javaScript"
        v-model="formValues.skillSet"
      />
      <label for="javaScript">JavaScript</label>
    </div>
    <div>
      <label>Years of Experience</label>
      <input
        type="radio"
        value="0-2"
        id="0-2"
        v-model="formValues.yearsOfExperience"
      />
      <label for="0-2">0-2</label>

      <input
        type="radio"
        value="3-5"
        id="3-5"
        v-model="formValues.yearsOfExperience"
      />
      <label for="3-5">3-5</label>

      <input
        type="radio"
        value="6-10"
        id="6-10"
        v-model="formValues.yearsOfExperience"
      />
      <label for="6-10">6-10</label>
      <input
        type="radio"
        value="10+"
        id="10+"
        v-model="formValues.yearsOfExperience"
      />
      <label for="10+">10+</label>
    </div>
    <div>
      <label for="age">Age</label>
      <input @keyup.enter="formSubmit" type="number" name="age" id="age" v-model.number="formValues.age">
    </div>
   
  </form> -->
  <!-- bonus directives -->
  <!-- <h3 v-once>{{ name }}</h3>
  <button @click="name = 'Superman'">Change Name</button>
  <h3 v-pre>{{ name }}</h3> -->

  <!-- computed properties -->
  <h3>fullName - {{ firstName }} {{ lastName }}</h3>
  <h1>computed fullname - {{ fullName }}</h1>

  <h1>total - {{ items.reduce((total, curr) => (total += curr.price), 0) }}</h1>
  <h2>computed total - {{ total }}</h2>
  <h3>method total - {{ totalItemPrice() }}</h3>
  <button @click="items.push({ id: 4, title: 'Keyboard', price: 50 })">
    Add Item
  </button>

  <input type="text" v-model="country">
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
      names: ["sujon", "sarah", "riman"],
      fullNames: [
        { first: "Sujon", last: "Ahmed" },
        { first: "Sarah", last: "Islam" },
        { first: "Riman", last: "Ahmed" },
      ],
      actors: [
        {
          name: "Christian Bale",
          movies: ["Batman", "The Prestige"],
        },
        {
          name: "Di Caprio",
          movies: ["Titanic", "Inception"],
        },
      ],
      myInfo: {
        name: "Sujon Ahmed",
        designation: "Web Application Developer",
        course: "Vue 3",
      },
      baseMultiplier: 5,
      baseValue: 2,
      count: 0,
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        remoteWork: "no",
        skillSet: [],
        yearsOfExperience: [],
        age: null,
      },
      firstName: "Sujon",
      lastName: "Ahmed",
      items: [
        {
          id: 1,
          title: "TV",
          price: 100,
        },
        {
          id: 2,
          title: "Phone",
          price: 200,
        },
        {
          id: 3,
          title: "Laptop",
          price: 300,
        },
      ],
      country: ''
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return num * this.baseMultiplier;
    },
    increment(num) {
      this.count += num;
    },
    decrement(num) {
      this.count -= num;
    },
    formSubmit() {
      console.log("Form Values: ", this.formValues);
    },
    totalItemPrice() {
      console.log('method total');
      return this.items.reduce((total, curr) => (total += curr.price), 0);      
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    total() {
      console.log('computed total');
      return this.items.reduce((total, curr) => (total += curr.price), 0);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
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

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border-image: none;
}
</style>
