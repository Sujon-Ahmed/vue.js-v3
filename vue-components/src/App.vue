<template>
  <!-- <GreetComponent name="Bruce" heroName="Batman" />
  <GreetComponent name="Clark" heroName="Superman" />
  <GreetComponent name="Daina" heroName="Wonder Woman" />
  <GreetComponent :name="name" :heroName="heroName" /> -->

  <!-- <ArticleComponent id="my-article" title="" :likes="50" :isPublished="true" /> -->

  <!-- <h2>AppComponent username {{ name }}</h2> -->

  <!-- <ComponentC /> -->

  <!-- <button @click="showPopup = true">Show Popup</button>
  <PopupComponent v-show="showPopup" @close="closePopup" /> -->

  <!-- <CustomInput v-model="name" /> -->

  <!-- <CardComponent>
    <template v-slot:header>
      <h3>Card Component Title</h3>
    </template>
    <template v-slot:default>
      <img src="https://picsum.photos/200" />
    </template>
    <template v-slot:footer>
      <button>View Details</button>
    </template>
  </CardComponent>

  <CardComponent>Card content</CardComponent>
  <CardComponent><h2>Card title</h2></CardComponent>
  <CardComponent><img src="https://picsum.photos/200" /></CardComponent> -->

  <!-- <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.lastName }} {{ slotProps.firstName }}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }}
    </template>
  </NameList> -->

  <button @click="activeTab = 'TabA'">TabA</button>
  <button @click="activeTab = 'TabB'">TabB</button>
  <button @click="activeTab = 'TabC'">TabC</button>

  <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'" />
  <TabC v-if="activeTab === 'TabC'" />
</template>

<script>
// import GreetComponent from "./components/GreetComponent.vue";
// import ArticleComponent from "./components/ArticleComponent.vue";
// import ComponentC from "./components/ComponentC.vue";
// import PopupComponent from "./components/PopupComponent.vue";
// import CustomInput from './components/CustomInput.vue';
// import CardComponent from "./components/CardComponent.vue";
// import NameList from "./components/NameList.vue";

import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";
import TabC from "./components/TabC.vue";

export default {
  name: "App",
  components: {
    // GreetComponent,
    // ArticleComponent
    // ComponentC,
    // PopupComponent,
    // CustomInput
    // CardComponent,
    // NameList,

    TabA,
    TabB,
    TabC,
  },
  data() {
    return {
      name: "",
      heroName: "Web Application Developer",
      showPopup: false,
      activeTab: "TabA",
    };
  },
  methods: {
    closePopup(name) {
      this.showPopup = false;
      console.log("name:", name);
    },
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
