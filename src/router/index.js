import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: "/",
        name: "SpacePage",
        component: () =>
            import(
                "../components/SpacePage.vue"
            )
    },
    {
        path: "/mindnote/:mindnoteId",
        name: "MindnotePage",
        component: () =>
            import(
               "../components/MindnotePage.vue"
            )
    }
];

export default createRouter({
    history: createWebHistory('/z-mindnote/'),//
    routes,
});