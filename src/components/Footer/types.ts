interface IFooterLinks {
  linkText: string;
  to: string;
}

export interface IFooterProps {
  links?: IFooterLinks[];
}
