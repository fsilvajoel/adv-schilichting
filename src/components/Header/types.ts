export interface IHeaderLink {
  label: any;
  to: any;
}

export interface ISocialLink {
  label: string;
  icon: any;
  link: string;
}

export interface IHeaderProps {
  links: IHeaderLink[];
  social: ISocialLink[];
}
