import Icon from './extensions/icon.png'
import Logo from './extensions/logo.svg'

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Icon,
    },
    locales: [],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Won Games!",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "app.components.LeftMenu.navbrand.title": "Won Games Dashboard",
        "app.components.HomePage.welcomeBlock.content.again": "Welcome to Won Games Admin! Add more games, categories and publishers from Content Manager.",
      },
    },
    menu: {
      logo: Icon,
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: "#111111",
          primary600: "#53F9FF",
          primary700: "#53F9FF",
          neutral0: "#191919",
          neutral100: "#111111",
        },
      },
    },
    tutorials: false,
    notifications: {
      releases: false,
    }
  },
  bootstrap() {},
};
