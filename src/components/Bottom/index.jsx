import React from 'react';
import style from './Bottom.scss';
import flexStyle from '../../style/flex.scss';

// Componente de Layout Principal
const Bottom = () => {
  const MainContainerClassNames = [
    style.MainContainer,
    flexStyle.flex,
    flexStyle['layout-row'],
    flexStyle['layout-align-center'],
    flexStyle['layout-justify-content-center'],
  ].join(' ');

  const CreditButtonClassNames = [
    style.CreditButton,
    style.button,
    flexStyle['flex-1'],
    flexStyle['layout-column'],
    flexStyle['layout-align-center'],
    flexStyle['layout-justify-content-center'],
  ].join(' ');

  const DetailButtonClassNames = [
    style.DetailButton,
    style.button,
    flexStyle.flex,
    flexStyle['layout-column'],
    flexStyle['layout-align-center'],
    flexStyle['layout-justify-content-center'],
  ].join(' ');

  return (
    <div className={MainContainerClassNames}>
      <input
        className={CreditButtonClassNames}
        type="button"
        value="Obtené Crédito"
      />
      <input
        className={DetailButtonClassNames}
        type="button"
        value="Ver detalle de cuotas"
      />
    </div>
  );
};

export default Bottom;
