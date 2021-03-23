declare namespace LandingModuleCssNamespace {
  export interface ILandingModuleCss {
    centerDiv: string;
    heading: string;
  }
}

declare const LandingModuleCssModule: LandingModuleCssNamespace.ILandingModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LandingModuleCssNamespace.ILandingModuleCss;
};

export = LandingModuleCssModule;
