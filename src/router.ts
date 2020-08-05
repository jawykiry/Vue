import {createWebHashHistory, createRouter} from 'vue-router'
import DocDemo from "./views/DocDemo.vue";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './views/Switch.vue'
import ButtonDemo from './views/Button.vue'
import DialogDemo from "./views/Dialog.vue";
import TabsDemo from "./views/Tabs.vue";

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path : '/', component: Home},
        {path : '/Doc', component: Doc,
            children:[
                {path: '', component: DocDemo},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo},
            ]},
    ]
})

