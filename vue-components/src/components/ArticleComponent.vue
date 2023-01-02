<template>
  <div>
    <h2 v-bind="$attrs">{{ title }} of {{ likes }} linkes</h2>
    <h4>Published - {{ isPublished ? "Yes" : "NO" }}</h4>
  </div>
</template>

<script>
export default {
  name: "ArticleComponent",
  props: {
    title: {
      type: String,
      required: true,
      default: "Article default title",
    },
    likes: Number,
    isPublished: Boolean,
  },
};
</script>

<style scoped>
</style>