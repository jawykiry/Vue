<template>
    <button @click="toggle" :class="{checked}"> <span></span> </button>
    <div>{{value}}</div>
</template>

<script lang="ts">
    import Button from "../views/Button.vue";
    import {ref} from "vue";
    export default {
        name : 'SwtichDemo',
        components: {Button},
        props: {
            value : Boolean
        },
        setup(props, context){
            const checked = ref(false)
            const toggle = ()=>{
                context.emit('update:value', !props.value)
                checked.value = !checked.value
            }
            return{checked, toggle}
        }
    }
</script>

<style scoped lang="scss">
    $h: 22px;
    $h2: $h - 4px;
    button {
        height: $h; width: $h * 2; border: none; background: #bfbfbf; border-radius: $h/2; position: relative;
        > span {
            position: absolute; top: 2px; left: 2px; height: $h2; width: $h2; background: white; border-radius: $h2 / 2; transition: all 250ms;
        }
        &.checked { background: #1890ff;
            > span { left: calc(100% - #{$h2} - 2px); }
        }
        &:focus { outline: none; }
        &:active {
            > span { width: $h2 + 4px; }
        }
        &.checked:active {
            > span { width: $h2 + 4px; margin-left: -4px; }
        }
    }
</style>