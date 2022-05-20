import React from 'react';
import Container from '~components/Container/Container';
import scss from './Banner.module.scss';

const Banner = () => {
  return (
    <Container
      id="bannerIntro"
      className={scss.container}
      backgroundColor={'backgroundTransparent'}
    >
      <div className={scss.heroText}>
        <h2 className={scss.CallText}>ADVOCACIA COM EXCELÊNCIA E EFICIÊNCIA</h2>
        <p className={scss.CallContent}>Leonardo Shlichting</p>

        <button className={scss.button}>Entre em Contato</button>
      </div>
    </Container>
  );
};

export default Banner;
