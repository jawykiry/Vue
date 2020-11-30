<template>
    <article v-html="content" class="markdown-body"></article>
</template>

<script lang="ts">
    import {ref} from "vue";
    export default {
        name: "Markdown",
        props:{
            content:{
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped lang="scss">

</style>