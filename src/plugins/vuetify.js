import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      options: { customProperties: true },
        themes: {
          dark:{
            "rich-black": "#090412",
            "chinese-black": "#0F0A22",
            "majorelle-blue": "#6546ED",
            "violets-are-blue-dark": "#7A5BFF",
            "violets-are-blue-light": "#957CFF",
            vodka: "#C0B1FF",
            white: "#FFFFFF",
            'copy-email-button-once': "#342e31",
            'fake-path-button-once': "#524e60",
          
          },
          light:{
            "rich-black": "#090412",
            "chinese-black": "#0F0A22",
            "majorelle-blue": "#6546ED",
            "violets-are-blue-dark": "#7A5BFF",
            "violets-are-blue-light": "#957CFF",
            vodka: "#C0B1FF",
            white: "#FFFFFF",
            'copy-email-button-once': "#342e31",
            'fake-path-button-once': "#524e60",
          }
        },
      },
});
