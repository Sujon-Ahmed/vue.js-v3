<template>
  <div>
    <h3>This is simple popup</h3>
    <input type="text" v-model="name" />
    <button @click="$emit('close', name)">Close Popup</button>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  emits: {
    close: (name) => {
        if(!name) {
            return false
        } else {
            return true
        }
    }
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped>
</style>