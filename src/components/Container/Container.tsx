import { TContainerProps } from './types';

import scss from './Container.module.scss';

const Container: React.FC<TContainerProps> = (props) => {
  const containerClass = [scss.section];

  const contentClass = [scss.content];

  const renderContent = () => <div className={contentClass.join(' ')}>{props.children}</div>;

  const renderDiv = () => <div className={containerClass.join(' ')}>{renderContent()}</div>;

  const renderSection = () => (
    <section id={props.id} className={containerClass.join(' ')}>
      {renderContent()}
    </section>
  );

  if (props.fullWidth) contentClass.push(scss.fullWidth);
  if (props.className) containerClass.push(props.className);
  if (props.backgroundColor) containerClass.push(scss[props.backgroundColor]);

  return props.id ? renderSection() : renderDiv();
};
export default Container;
