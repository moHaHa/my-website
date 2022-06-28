import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import {defaultTheme } from './colors'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          dark:defaultTheme
        },
      },
});
