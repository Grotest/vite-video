import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/router' 
import mycomponents from '../src/components/UI'
import './assets/style/main.sass'
import axios from 'axios'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})
mycomponents.forEach(component => {
  app.component(component.name, component)
})
createApp(App).use(vuetify).use(router).mount('#app')
// createApp(App).use(router).mount('#app')
