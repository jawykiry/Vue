<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav" ref="container">
            <!--            利用ref来实现获取元素的值-->
            <div class="gulu-tabs-nav-item" v-for="(t,index) in titles"
                 :ref="el => { if (t===selected) selectedItem = el }" @click="select(t)"
                 :class="{selected: t=== selected}" :key="index">{{t}}
            </div>
            <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <!--        显示内容,这里的key一定要用好,否则很容易出现问题-->
        <div class="gulu-tabs-content">
            <component class="gulu-tabs-content-item" :key="current" :is="current"/>
        </div>
    </div>
</template>
<script lang="ts" >
    import Tab from './Tab.vue'
    import {
        computed,
        ref,
        onMounted,
        watchEffect
    } from 'vue'

    export default {
        props: {
            selected: {
                type: String
            }
        },
        setup(props, context) {
            //ts泛型: ts的写法，利用ref，从html中传入div或者其他形式的值并用相应函数获取
            const selectedItem = ref<HTMLDivElement>(null)
            const indicator = ref<HTMLDivElement>(null)
            const container = ref<HTMLDivElement>(null)
            //生命周期的钩子函数,因为watchEffect在Mounted之前也会运行,所以第一次执行的时候ref中的值都是null,所以要在onMounted中嵌套
            onMounted(() => {
                    watchEffect(() => {
                        //获取宽度,高,top,left的函数getBoundingClientRect, {width, height, top, left}
                        const {
                            width
                        } = selectedItem.value.getBoundingClientRect()
                        indicator.value.style.width = width + 'px'
                        // es6重命名
                        const {
                            left: left1
                        } = container.value.getBoundingClientRect()
                        const {
                            left: left2
                        } = selectedItem.value.getBoundingClientRect()
                        //利用左边减去右边的方式来计算下划线的位置
                        const left = left2 - left1
                        indicator.value.style.left = left + 'px'
                    }, {flush: 'post'})
                }
            );
            //在context中有上层传入的标签属性，在slots.default()中
            const defaults = context.slots.default()
            defaults.forEach((tag) => {
                //default的内容中有type值就是标签类型
                if (tag.type !== Tab) {
                    throw new Error('Tabs 子标签必须是 Tab')
                }
            })
            //在default的tag中会有tag,map和foreach我现在不知道具体区别应该是直接返回全部的title
            const titles = defaults.map((tag) => {
                return tag.props.title
            })
            //返回一个对象,对象中的props.title===props.selected,后一个props是全文的props,其中的type就是组件类型,而用computed来动态监测
            const current = computed(() => {
                return defaults.find(tag => tag.props.title === props.selected)
            })
            //点击后触发事件，向上返回title告知发生变化emit
            const select = (title: string) => {
                context.emit('update:selected', title)
            }
            return {
                current,
                defaults,
                titles,
                select,
                selectedItem,
                indicator,
                container
            }
        }
    }
</script>

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .gulu-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            position: relative;

            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;

                &:first-child {
                    margin-left: 0;
                }

                &.selected {
                    color: $blue;
                }
            }

            &-indicator {
                position: absolute;
                height: 3px;
                background: $blue;
                left: 0;
                bottom: -1px;
                width: 100px;
                /*transition来获取补间动画*/
                transition: all 250ms;
            }
        }

        &-content {
            padding: 8px 0;

            &-item {
                display: none;

                &.selected {
                    display: block;
                }
            }
        }

    }
</style>