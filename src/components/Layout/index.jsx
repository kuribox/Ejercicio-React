import React from 'react';
import PropTypes from 'prop-types';
import style from './Layout.scss';
import flexStyle from '../../style/flex.scss';

// Componente de Layout Principal
const Layout = ({ title, children }) => {
  const MainContainerClassNames = [
    style.MainContainer,
    flexStyle.flex,
    flexStyle['layout-row'],
    flexStyle['layout-align-center'],
    flexStyle['layout-justify-content-center'],
  ].join(' ');

  const SubContainerClassNames = [
    style.SubContainer,
    flexStyle.flex,
    flexStyle['layout-column'],
    flexStyle['layout-align-center'],
  ].join(' ');

  const ChildrenContainerClassNames = [
    style.ChildrenContainer,
    flexStyle.flex,
    flexStyle['layout-column'],
  ].join(' ');

  return (
    <div className={MainContainerClassNames}>
      <div className={SubContainerClassNames}>
        <h3 className={style.title}>{title}</h3>
        <div className={ChildrenContainerClassNames}>{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Layout;
