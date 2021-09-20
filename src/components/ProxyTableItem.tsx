import React, { useContext } from 'react';
import deleteImg from '../../assets/img/trash.svg';
import ThemeContext from '../Context/ThemeContext';
const ProxyTableItem = ({ proxy }: any) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        'grid '+theme+'bg-task ' +
        theme +
        'border-task font-Gilroy-Bold proxyItem items-center mt-3'
      }
    >
      <div className={'font-11 ' + theme + 'text-white'}>{proxy.id}</div>
      <div className={'font-11 ' + theme + 'text-white'}>{proxy.proxy}</div>
      <div className="font-11 custom-delay text-center">{proxy.delay}</div>
      <div className={'font-11 ' + theme + 'text-white text-center'}>
        <img src={deleteImg} alt="" />
      </div>
    </div>
  );
};

export default ProxyTableItem;
