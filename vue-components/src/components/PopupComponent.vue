<template>
    <div>
        <h3>This is simple popup</h3>
        <button @click="$emit('close', 'Sujon')">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name: 'PopupComponent',
        emits: ['close'],
    }
</script>

<style scoped>

</style>