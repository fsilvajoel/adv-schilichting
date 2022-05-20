import scss from './FabButton.module.scss';

const FabButton = () => {
  return (
    <div className={scss.fab}>
      <button className={scss.main}></button>;
    </div>
  );
};

export default FabButton;
