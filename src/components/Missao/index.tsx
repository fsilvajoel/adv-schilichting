import React from 'react';
import Container from '~components/Container/Container';
import scss from './Missao.module.scss';
import { miassaoData } from '../../pages/data';

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
        {miassaoData.map((mission) => (
          <Card key={mission.title} title={mission.title} content={mission.content} />
        ))}
      </div>
    </Container>
  );
};

export default Missao;
