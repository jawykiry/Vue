<template>
    <!--    新的组件teleport使用这个组件可以无视优先级而直接变成指定的下面这里时body-->
    <teleport to="body">
        <div class="topnav">
            <router-link class="logo" to="/">
                <svg class="icon">
                    <use xlink:href="#icon-ye"></use>
                </svg>
            </router-link>
            <ul class="menu">
                <li>
                    <router-link to="/doc">文档</router-link>
                </li>
            </ul>
            <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
                <use xlink:href="#icon-menu"></use>
            </svg>
        </div>
    </teleport>
</template>
<script lang="ts">
    import {inject, Ref} from "vue";

    export default {
        props: {
            toggleMenuButtonVisible: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
            const toggleMenu = () => {
                menuVisible.value = !menuVisible.value;
            };
            return {toggleMenu};
        },
    };
</script>
<style lang="scss" scoped>
    $color: #007974;
    .topnav {
        color: $color;
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 20;
        justify-content: center;
        align-items: center;
        > .logo {
            max-width: 6em;
            margin-right: auto;
            > svg {
                width: 32px;
                height: 32px;
            }
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            a{
                text-decoration: none;
            }
            > li {
                margin: 0 1em;
            }
        }

        > .toggleAside {
            width: 24px;
            height: 24px;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
        }

        //检测宽度时的css
        @media (max-width: 500px) {
            > .menu {
                display: none;
            }
            > .logo {
                margin: 0 auto;
            }
            > .toggleAside {
                display: inline-block;
            }
        }
    }
</style>