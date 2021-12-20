export interface Config {
  colorTheme: string;
  layout: {
    style: string;
    width: 'fullwidth' | 'boxed';
    navbar: {
      primaryBackground: string;
      secondaryBackground: string;
      hidden: boolean;
      position: 'left' | 'right' | 'top';
    };
    footer: {
      customBackgroundColor: boolean;
      background: string;
      hidden: boolean;
      position:
        | 'above'
        | 'above-static'
        | 'above-fixed'
        | 'below'
        | 'below-static'
        | 'below-fixed';
    };
    sidepanel: {
      hidden: boolean;
      position: 'left' | 'right';
    };
  };
  showProgressBar: boolean;
  URL: string;
  API_KEY: string;
  user: {
    id: string;
    id_paciente: string;
    firstname: string;
    lastname: string;
    email: string;
    photo: string;
  };
}
