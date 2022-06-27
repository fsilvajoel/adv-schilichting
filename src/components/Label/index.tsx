import scss from './Label.module.scss';

const Label = (props: { title: string }) => {
  return <h2 className={scss.CallText}>{props.title}</h2>;
};

export default Label;
