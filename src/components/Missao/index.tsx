import React from 'react';
import Container from '~components/Container/Container';
import scss from './Missao.module.scss';

interface IcardProps {
  title: string;
  content: string;
}
const Card = (props: IcardProps) => {
  return (
    <div className={scss.missionCard}>
      <h2 className={scss.titleCard}>{props.title}</h2>
      <p className={scss.contentCard}>{props.content}</p>
    </div>
  );
};

const Missao = () => {
  return (
    <Container id="missao" backgroundColor={'backgroundTransparent'}>
      <div className={scss.container}>
        <Card
          title="Missão"
          content="lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit"
        />
        <Card
          title="visao"
          content="lorem ipsum dolor sit amet  amet dolor sit amet, consectetur adipiscing elit"
        />
        <Card
          title="valores"
          content="lorem ipsum dolor sit  amet dolor sit amet, consectetur adipiscing elit"
        />
      </div>
    </Container>
  );
};

export default Missao;
