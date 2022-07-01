import scss from './Atividade.module.scss';
import { especialidadesData } from '../../pages/data';
interface IcardProps {
  title: string;
  content: string;
}

const CardAtividade = (props: IcardProps) => {
  return (
    <div className={scss.missionCard}>
      <h2 className={scss.titleCard}>{props.title}</h2>
      <p className={scss.contentCard}>{props.content}</p>
    </div>
  );
};

const Atividade = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.container}>
        {especialidadesData.map((atividade: { title: string; description: string }) => (
          <CardAtividade
            key={atividade.title}
            title={atividade.title}
            content={atividade.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Atividade;
