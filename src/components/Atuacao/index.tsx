import Container from '~components/Container/Container';
import scss from './Atuacao.module.scss';

const Atuacao = () => {
  return (
    <Container id="atuacao" className={scss.container} backgroundColor={'backgroundTransparent'}>
      <div className={scss.heroText}>
        <h2 className={scss.CallText}>Sobre Nós</h2>
        <p className={scss.CallContent}>
          O escritório de advocacia M.Santos Advogados foi fundado em 1987 com o propósito de trazer
          a satisfação aos clientes por meio dos serviços jurídicos especializados nas áreas de
          Direito Civil e de Família, Direito Penal, Direito do Trabalho e Direito Previdenciário.
          <br />
          Priorizamos um atendimento humanizado, valorizando e respeitando os clientes, em quaisquer
          de suas formas de atuação, e primando sempre pela excelência e eficiência na resolução dos
          problemas de nossos clientes. Buscamos sempre nos adaptar as necessidades de nossos
          clientes e tratar com ética, responsabilidade e seriedade cada trabalho exercido.
        </p>
      </div>
    </Container>
  );
};

export default Atuacao;
