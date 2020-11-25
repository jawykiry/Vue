<template>
    <div>Button示例</div>
    <h1>Button1</h1>
    <button-demo theme="button">你好</button-demo>
    <button-demo theme="link">你好</button-demo>
    <button-demo theme="text">你好</button-demo>
    <button-demo>你好</button-demo>
    <h1>示例2</h1>
    <div>
        <button-demo size="big">大大大</button-demo>
        <button-demo>普普通</button-demo>
        <button-demo size="small">小小小</button-demo>
    </div>
    <div>
        <button-demo theme="link" size="big">大大大</button-demo>
        <button-demo theme="link">普普通</button-demo>
        <button-demo size="small" theme="link">小小小</button-demo>
    </div>
    <div>
        <button-demo size="big" theme="text">大大大</button-demo>
        <button-demo theme="text">普普通</button-demo>
        <button-demo size="small" theme="text">小小小</button-demo>
    </div>
</template>

<script lang="ts">
    import ButtonDemo from "../libs/ButtonDemo.vue";
    export default {
        name: "Button",
        components: {ButtonDemo},
        setup(){
            const onClick = ()=>{
                console.log("Button")
            }
            return {onClick}
        }
    }
</script>

<style scoped lang="scss">

</style>