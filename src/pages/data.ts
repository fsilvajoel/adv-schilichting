import InstagramSVG from '~components/imagens/instagram.svg';
import LinkedInSVG from '~components/imagens/linkedin.svg';
export interface IComoFuncionaStep {
  title: string;
  description: string;
}

export interface IComoFuncionaProps {
  steps: IComoFuncionaStep[];

  removePaddingBottom?: boolean;
}

export const indicadoHeaderLinks = [
  {
    label: 'Home',
    to: '#home',
  },
  {
    label: 'sobre',
    to: '#sobre',
  },
  {
    label: 'Áreas de atuação',
    to: '#atuacao',
  },
  {
    label: 'Contato',
    to: '#contato',
  },
];

export const social = [
  {
    label: 'Instagram',
    icon: InstagramSVG,
    link: 'https://www.instagram.com/',
  },
  {
    label: 'LinkedIn',
    icon: LinkedInSVG,
    link: 'https://pt.linkedin.com/',
  },
];
