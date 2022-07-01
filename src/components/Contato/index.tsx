import React from 'react';
import Container from '~components/Container/Container';
import Label from '~components/Label';
import scss from './Contato.module.scss';
import { contatoData } from '../../pages/data';

const Contato = () => {
  return (
    <Container id="missao" backgroundColor={'backgroundGray800'}>
      <div className={scss.wrapperContact}>
        <Label title="Contato" />
        <div className={scss.containerContact}>
          <div className={scss.contactAbout}>
            <h3 className={scss.contactAboutTitle}>Sobre Leonardo Schlichting:</h3>
            <p className={scss.contactAboutText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ut necessitatibus
              hic fugiat tempora! Suscipit deleniti aut delectus, animi cum odio inventore
              praesentium quaerat, porro nostrum neque excepturi quo hic.
            </p>
          </div>
          <div className={scss.contactInfo}>
            {contatoData.map((contato) => (
              <div key={contato.contact} className={scss.contato}>
                <div className={scss.icon} />
                <p className={scss.contactText}>{contato.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Contato;
