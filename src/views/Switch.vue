<template>
    <SwtichDemo v-model:value = "y" />
</template>

<script lang="ts">
    import SwtichDemo from '../libs/SwitchDemo.vue'
    import {ref} from  'vue'

    export default {
        name: "Switch",
        components:{SwtichDemo},
        setup(){
            const y = ref(true)
            return {y}
        }
    }
</script>

<style scoped lang="scss">

</style>