import AuthLogo from './extensions/TylerLogo.svg';
import MenuLogo from './extensions/TylerLogoCollapsed.svg';

export default {
  config: {
    auth: {
      logo: AuthLogo
    },
    menu: {
      logo: MenuLogo,
    },
    theme: {
      colors: {
        alternative100: '#f6ecfc',
        alternative200: '#B3E8F5',
        alternative500: '#7ED3E7',
        alternative600: '#55BFD8',
        alternative700: '#34A9C5',
        primary100: '#f0f0ff',
        primary200: '#7FAEDF',
        primary500: '#5490CE',
        primary600: '#3478BF',
        primary700: '#1261B3'
      },
    },
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'tylercooke.dev CMS'
      }
    },
    notifications: {
      releases: false
    }
  },
  bootstrap() {},
};
