import Container from '~components/Container/Container';
import Label from '~components/Label';
import scss from './Atuacao.module.scss';

const Atuacao = () => {
  return (
    <Container id="atuacao" className={scss.container} backgroundColor={'backgroundTransparent'}>
      <div className={scss.heroText}>
        <Label title="Sobre Nós" />
        <p className={scss.CallContent}>
          Como atuação o escritório tem como pilar a advocacia moderna nas áreas do{' '}
          <b>Direito Civil</b> e <b>Direito Previdenciário</b>, que visa trazer serviços para os
          clientes com o objetivo de obter para as pessoas a adoção de procedimentos corretos com a
          utilização de teses jurídicas sólidas e atualizadas.
          <br /> Dedicação, empenho, especialização, combatividade e agilidade são a pedra basilar
          do nosso trabalho permanente.
        </p>
      </div>
    </Container>
  );
};

export default Atuacao;
