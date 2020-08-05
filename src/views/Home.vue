<template>
    <div>
        <Topnav></Topnav>
        <div class="banner">
            <h1>读享者</h1>
            <h2>一个寓于读乐于享的网站</h2>
            <p class="actions">
                <a href="https://github.com/jawykiry/Vue">Github</a>
                <router-link to="/Doc">开始</router-link>
            </p>
        </div>
    </div>

</template>

<script lang="ts">
    import Topnav from "../components/Topnav.vue";
    export default {
        components: { Topnav },
    }
</script>

<style lang="scss" scoped>

    .topnav {
        background: pink;
        display: flex;
        padding: 16px;
        > .logo {
            max-width: 6em;
            margin-right: auto;
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            > li {
                margin: 0 1em;
            }
        }
    }

    .banner{
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: lightgreen;
        >.actions{
            padding: 8px 0;
            a{
                margin: 0 8px;
                background: #fff;
                display: inline-block;
                $h : 28px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 8px;
            }
        }
    }
</style>