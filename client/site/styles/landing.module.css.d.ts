declare namespace LandingModuleCssNamespace {
  export interface ILandingModuleCss {
    centerDiv: string;
    heading: string;
    projectsButton: string;
    selfie: string;
    textDiv: string;
  }
}

declare const LandingModuleCssModule: LandingModuleCssNamespace.ILandingModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LandingModuleCssNamespace.ILandingModuleCss;
};

export = LandingModuleCssModule;
