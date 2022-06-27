import scss from './FabButton.module.scss';
import WppIcon from './wppIcon.svg';
const FabButton = () => {
  return (
    <div className={scss.fab}>
      <a href="https://wa.me/+5551998738961" className={scss.main}>
        <WppIcon />
      </a>
    </div>
  );
};

export default FabButton;
