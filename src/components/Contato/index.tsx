import React from 'react';
import Container from '~components/Container/Container';
import scss from './Contato.module.scss';

const Contato = () => {
  return (
    <Container id="missao" backgroundColor={'backgroundTransparent'}>
      <div className={scss.heroText}>
        <h2 className={scss.CallText}>Contato</h2>
      </div>
    </Container>
  );
};
export default Contato;
