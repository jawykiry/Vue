<template>
    <div class="demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="component" />
        </div>
        <div class="demo-actions">
            <Button  @click="click" v-text="content"></Button>
        </div>
        <div class="demo-code">
            <pre class="language-html" v-html="html" v-if="codeVisable"/>
        </div>

    </div>
</template>

<script lang="ts" >
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
            const content_set = ref(["显示代码", "隐藏代码"])
            const content = ref("显示代码")
            const click = ()=>{
                codeVisable.value = !codeVisable.value
                if(codeVisable.value) content.value = content_set.value[1]
                else content.value = content_set.value[0]
            }
            //千万别用show这类动词来形容一个属性
            const codeVisable = ref(false)
            return {
                Prism,
                html,
                codeVisable,
                content,
                click
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