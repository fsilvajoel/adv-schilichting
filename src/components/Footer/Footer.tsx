import useIsDesktop from '~hooks/useIsDesktop';

import { social } from './data';
import { IFooterProps } from './types';

import Container from '~components/Container/Container';
import { EListBackground } from '~components/Container/types';

import scss from './Footer.module.scss';

import Image from 'next/image';
import Logo from '../imagens/Logo-leonardo.png';

const Footer = () => {
  const isDesktop = useIsDesktop();
  const renderSocial = () =>
    social.map((s) => (
      <a target="_blank" rel="noreferrer" href={s.link} className={scss.socialButton} key={s.label}>
        <s.icon />
      </a>
    ));

  return (
    <>
      <Container
        id="footer-indique-amigo"
        className={scss.container}
        backgroundColor={EListBackground.backgroundWhite}
      >
        <div className={scss.content}>
          {!isDesktop && <Image src={Logo} className={scss.logo} alt="Leonardo Schlichting" />}
          <div className={scss.divisor} />
          <div className={scss.underDivisorWrapper}>
            {isDesktop && <Image src={Logo} className={scss.logo} alt="Leonardo Schlichting" />}
            <div className={scss.legalTextWrapper}>
              <span className={scss.legalText}>© 2022 - Todos os direitos reservados.</span>
            </div>
            <div className={scss.socialWrapper}>{renderSocial()}</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
