import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/router' // <---
import axios from 'axios'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(router).mount('#app')
// createApp(App).use(router).mount('#app')
