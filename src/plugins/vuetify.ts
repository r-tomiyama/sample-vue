import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey.lighten3,
        secondary: colors.blueGrey.lighten1,
        accent: colors.lime.darken2,
        success: colors.teal.lighten1,
        error: colors.red.lighten2,
        anchor: colors.blueGrey.lighten1
      }
    }
  }
});
