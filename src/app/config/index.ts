import { Config } from "./config";
import { environment as env } from "../../environments/environment";

/**
 * Default Fuse Configuration
 *
 * You can edit these options to change the default options. All these options also can be
 * changed per component basis. See `app/main/pages/authentication/login/login.component.ts`
 * constructor method to learn more about changing these options per component basis.
 */

export const config: Config = {
  // Color themes can be defined in src/app/app.theme.scss
  colorTheme: "theme-default",
  layout: {
    style: "vertical-layout-1",
    width: "fullwidth",
    navbar: {
      primaryBackground: "",
      secondaryBackground: "",
      hidden: true,
      position: "left",
    },
    footer: {
      customBackgroundColor: true,
      background: "",
      hidden: false,
      position: "below-fixed",
    },
    sidepanel: {
      hidden: false,
      position: "right",
    },
  },
  showProgressBar: false,
  URL: "https://api.unsplash.com/",
  API_KEY: "ABjxOstHT2WYkJXBuZuxHKWdg_7Ia7cWMVEm8KZqHQE",
  user: {
    id: "",
    id_paciente: "",
    firstname: "Cargando. . .",
    lastname: "",
    email: "",
    photo: "",
  },
};
