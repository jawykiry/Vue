import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
    const { title, content, ok, cancel } = options;
    // 创建元素div并在Body上演示
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
        app.unmount(div);
        div.remove();
    };
    //使用mount来执行,unmount结束,render是在mount后执行的,h相当于实例化dialog
    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible) => {
                        if (newVisible === false) {
                            close();
                        }
                    },
                    ok, cancel
                },
                {
                    title,
                    content,
                }
            );
        },
    });
    app.mount(div);
};