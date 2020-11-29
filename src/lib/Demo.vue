<template>
    <div class="demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="component" />
        </div>
        <div class="demo-actions">
            <Button  @click="codeVisable = !codeVisable">查看代码</Button>
        </div>
        <div class="demo-code">
            <pre class="language-html" v-html="html" v-if="codeVisable"/>
        </div>

    </div>
</template>

<script lang="ts">
    import Button from './Button.vue'
    import 'prismjs';
    import 'prismjs/themes/prism.css'
    import {computed, ref} from 'vue'
    const Prism = (window as any).Prism
    export default {
        props: {
            component: Object
        },
        components:{
            Button
        },
        setup(props) {
            const html = computed(() =>{
                return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
            })
            //千万别用show这类动词来形容一个属性
            const codeVisable = ref(false)
            return {
                Prism,
                html,
                codeVisable
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;
        >h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }
        &-component {
            padding: 16px;
        }
        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }
        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
            >pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>