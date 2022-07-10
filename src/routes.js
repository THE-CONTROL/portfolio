import { createRouter, createWebHistory } from "vue-router"
import HomePage from "./components/routes/HomePage.vue"
import About from "./components/routes/About.vue"
import Contact from "./components/routes/Contact.vue"
import Education from "./components/routes/Education.vue"
import Projects from "./components/routes/Projects.vue"
import Skills from "./components/routes/Skills.vue"
import Error from "./components/routes/Error.vue"

const routes=[
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "AboutPage",
        path: "/about",
        component: About
    },
    {
        name: "ContactPage",
        path: "/contact",
        component: Contact
    },
    {
        name: "EducationPage",
        path: "/education",
        component: Education
    },
    {
        name: "ProjectsPage",
        path: "/projects",
        component: Projects
    },
    {
        name: "SkillsPage",
        path: "/skills",
        component: Skills
    },
    {
        name: "ErrorPage",
        path: "/:pathMatch(.*)*",
        component: Error
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
