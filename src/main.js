import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { VApp, VCard, VTextField, VBtn, VContainer } from 'vuetify/components';
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { useVuelidate } from '@vuelidate/core';
import router from './router';

const vuetify = createVuetify({
  components: {
    VApp,
    VCard,
    VTextField,
    VBtn,
    VContainer,
    VNumberInput,
  }
});

createApp(App)
  .use(router)
  .use(vuetify)
  .use(useVuelidate)
  .mount('#app');
