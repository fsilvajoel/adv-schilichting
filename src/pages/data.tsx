import InstagramSVG from '~components/imagens/instagram.svg';
import LinkedInSVG from '~components/imagens/linkedin.svg';

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

export const miassaoData = [
  {
    title: 'Missão',
    content: `Apresentar soluções jurídicas com eficiência`,
  },
  {
    title: 'Valores',
    content: `ética, dedicação, seriedade e comprometimento`,
  },
  {
    title: 'Visão ',
    content: `Tornar-se referência em suas áreas de atuação`,
  },
];

export const especialidadesData = [
  {
    title: 'Direito Civil',
    description: 'Especialista em Direito civil',
  },
  {
    title: 'Direito Processual Civil',
    description: 'Especialista em Direito civil',
  },
  {
    title: 'Direito Previdenciário',
    description: 'Especialista em Direito civil',
  },
];
export const contatoData = [
  {
    contact: 'Endereço',
    content: 'Júlio de Castilhos, 700. Sala 23',
  },
  {
    contact: 'E-mail',
    content: 'contato@doutorleonardo.com',
  },
  {
    contact: 'Telefone',
    content: '(51) 99836-1545',
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
export const dataHome ={
  bannerName: 'Leonardo Schlichting',
  bannerText: 'Advocacia com excelência para fazer a diferença',
  bannerButtonText: 'Entre em contato com nosso especialista',
  buttonLink: '#',
  aboutUs: `Desde a fundação do escritório em Santa Cruz do Sul – RS, atua-se com uma visão inovadora em serviços jurídicos.

  Tem como objetivo atender e assessorar clientes com transparência e qualidade, por meio de procedimentos éticos e sólidos.

  Durante a trajetória o escritório desenvolveu uma estrutura qualificada para atendimentos presenciais e online, aliado aos conhecimentos jurídicos que possibilitam atendimentos em todo o território nacional. `,
  aboutMe:(
  <>
    Leonardo Schlichting é atuante na área do Direito a mais de cinco anos, tendo adquirido experiência em escritórios de renome antes de fundar o próprio escritório.
    <br/>
    <br/>
    Realiza atendimentos com foco em soluções jurídicas, utilizando-se da expertise adquirida durante sua trajetória. Fornece consultas respeitando as individualidades de cada caso com busca em resoluções eficientes.
    <br/>
    <br/>
    <b>Graduado</b> em Direito pela Universidade de Santa Cruz do Sul (UNISC);
    <br/>
    <br/>
    <b>Especialista</b> em Direito Civil pela Universidade Anhanguera (UNIDERP);
    <br/>
    <br/>
    <b>Especialista</b> em Processo Civil pelo Centro Universitário Internacional - UNINTER;
    <br/>
    <br/>
    <b>Pós-Graduado</b> em Direito de Família pela Faculdade Futura;
  </>),
}
