import { CSSProperties, useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

import useIsDesktop from '~hooks/useIsDesktop';
// import { slugify } from '~utils/slugify';

import { IHeaderProps } from './types';

import InternalLink from '~components/InternalLink/InternalLink';

// import HeaderDrawer from './HeaderDrawer/HeaderDrawer';

import scss from './Header.module.scss';
import Logo from '../imagens/Logo-leonardo.png';

import BurguerIcon from './images/menu-hamburguer.svg';
import Image from 'next/image';

const Header = (props: IHeaderProps) => {
  const { y } = useWindowScroll();

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isSwipingDown, setIsSwipingDown] = useState(false);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  const isDesktop = useIsDesktop(1024);

  const containerClass = [scss.container];
  const contentDrawerClass = [scss.contentRight, scss.drawer];

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const renderLogo = () => (
    <InternalLink to="/" className={scss.logo}>
      {!isDesktop ? (
        <Image src={Logo} className={scss.logo} alt="Leonardo Schlichting" />
      ) : (
        <Image src={Logo} className={scss.logo} alt="Leonardo Schlichting" />
      )}
    </InternalLink>
  );

  const renderLinks = () => {
    const { links } = props;

    return links.map((link) => {
      const { label, to } = link;

      return (
        <InternalLink key={'link'} to={to} className={scss.link}>
          {label}
        </InternalLink>
      );
    });
  };

  const getStyle = () => {
    const style: CSSProperties = { top: '0px' };

    if (isSwipingDown && !isDesktop && y > 0) style.top = '-120px';

    return style;
  };

  useEffect(() => {
    if (y < previousScrollPosition && isSwipingDown) {
      setIsSwipingDown(false);
    } else if (y > previousScrollPosition && !isSwipingDown) {
      setIsSwipingDown(true);
    }

    setPreviousScrollPosition(y);
  }, [y, previousScrollPosition, isSwipingDown]);

  if (previousScrollPosition) containerClass.push(scss.scrolled);

  return (
    <header>
      <nav className={containerClass.join(' ')} style={getStyle()}>
        <div className={scss.menuWrapper}>
          {renderLogo()}
          <div className={scss.content}>{renderLinks()}</div>
          <div className={contentDrawerClass.join(' ')}>
            <button
              type="button"
              className={scss.iconButton}
              onClick={() => {
                setDrawerVisible(true);
              }}
            >
              <BurguerIcon />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
