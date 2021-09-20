import React, { useState, useContext } from 'react';
import deleteImg from '../../assets/img/trash.svg';
import ActivedeleteImg from '../../assets/img/ActiveTrash.svg';
import ThemeContext from '../Context/ThemeContext';

const ProxyGroupInput = ({ proxygroup, idx, active, setActive }: any) => {
  const handleSelect = () => {
    setActive(proxygroup);
  };
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        active
          ? ' taskgroupInput ' +
            theme +
            'border-task bg-activeBg cursor-pointer'
          : 'taskgroupInput ' +
            theme +
            'border-task ' +
            theme +
            'bg-inactiveBg cursor-pointer'
      }
      onClick={handleSelect}
    >
      <div className="flex items-center justify-between">
        <div
          className={
            active
              ? 'font-11 font-Gilroy-Bold text-blue'
              : 'font-11 font-Gilroy-Bold ' + theme + 'text-white'
          }
        >
          {proxygroup.name}
        </div>
      </div>
      <div
        className={active ? 'border-bottom' : theme + 'border-inactiveBottom'}
      ></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span
            className={
              active
                ? 'font-Gilroy-Bold font-11 activeProfileColor'
                : 'font-11 font-Gilroy-Bold ' + theme + 'text-white'
            }
          >
            {proxygroup.taskArr.length} Proxies{' '}
          </span>
        </div>
        {active ? (
          <img src={ActivedeleteImg} alt="" />
        ) : (
          <img src={deleteImg} alt="" />
        )}
      </div>
    </div>
  );
};

export default ProxyGroupInput;
