<template>
    <SwitchDemo v-model:value = "y" />
</template>

<script lang="ts">
    import SwitchDemo from '../libs/SwitchDemo.vue'
    import {ref} from  'vue'

    export default {
        name: "Switch",
        components:{SwitchDemo},
        setup(){
            const y = ref(true)
            return {y}
        }
    }
</script>

<style scoped lang="scss">

</style>