declare namespace NavbarModuleCssNamespace {
  export interface INavbarModuleCss {
    logo: string;
    navbar: string;
    selector: string;
    selectorAboutMe: string;
    selectorBlog: string;
    selectorHome: string;
    selectorProjects: string;
  }
}

declare const NavbarModuleCssModule: NavbarModuleCssNamespace.INavbarModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavbarModuleCssNamespace.INavbarModuleCss;
};

export = NavbarModuleCssModule;
