import React from 'react';
import Container from '~components/Container/Container';
import Label from '~components/Label';
import scss from './Contato.module.scss';

const Contato = () => {
  return (
    <Container id="missao" backgroundColor={'backgroundTransparent'}>
      <div className={scss.heroText}>
        <Label title="Contato" />
        {/* <h2 className={scss.CallText}>Contato</h2> */}
      </div>
    </Container>
  );
};
export default Contato;
