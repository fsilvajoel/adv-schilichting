import React from 'react';
import Container from '~components/Container/Container';
import Label from '~components/Label';
import scss from './Contato.module.scss';
import { contatoData, dataHome } from '~pages/data';
import ContatoImage from '../imagens/LeonardoSchlichting.png';
import Image from 'next/image';

const Contato = () => {
  return (
    <Container id="missao" backgroundColor={'backgroundGray800'}>
      <div className={scss.wrapperContact}>
        <Label title="Contato" />
        <div className={scss.containerContact}>
          <div className={scss.contactAbout}>
            <h3 className={scss.contactAboutTitle}>Sobre Leonardo Schlichting:</h3>
            <p className={scss.contactAboutText}>
              {dataHome.aboutMe}
            </p>
          </div>
          <div className={scss.contentImage}>
            <div className={scss.wrapperImage}>
              <Image src={ContatoImage} alt="Leonardo Schlichting" />
            </div>
          </div>
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
    </Container>
  );
};
export default Contato;
