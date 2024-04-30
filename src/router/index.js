import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import MusicianManagementComponent from "../profiles/pages/musician-management.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home",    component: HomeComponent, meta: { title: "Home"}},
        { path: "/about",   component: AboutComponent, meta: { title: "About us"}},
        { path: '/Musician', component: MusicianManagementComponent, meta: { title: 'Musician' } },
        { path: "/",        redirect: "/home"},
    ]
});

export default router;