<template>
  <form @submit.prevent="createPost">
    <div>
      <label for="userId">User Id</label><br/>
      <input type="text" id="userId" v-model="formData.userId" />
    </div>
    <div>
      <label for="title">Post Title</label><br/>
      <input type="text" id="title" v-model="formData.title" />
    </div>
    <div>
      <label for="body">Post Body</label><br/>
      <input type="text" id="body" v-model="formData.body" />
    </div><br/>
    <button>Create Post</button><br/><br/>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
