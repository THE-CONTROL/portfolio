import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./routes"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMinusSquare, faPlusSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

library.add(faMinusSquare, faPlusSquare, faEnvelope, faTwitter, faGithub, faInstagram, faLinkedin, faGithub);

createApp(App).use(router).component("fa", FontAwesomeIcon).mount('#app')
