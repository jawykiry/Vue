<template>
    <article v-html="content" class="markdown-body"></article>
</template>

<script lang="ts">
    import {ref} from "vue";
    export default {
        name: "Markdown",
        props:{
            path:{
                type: String,
                required: true
            }
        },
        setup(props) {
            const content = ref<String>(null);
            // 使用异步import
            import(props.path).then(result =>{
                content.value = result.default
            })
            return{
                content
            }
        }
    }
</script>

<style scoped lang="scss">

</style>