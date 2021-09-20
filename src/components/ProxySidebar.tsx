import React, { useState, useContext } from 'react';
import ArrowRight from '../../assets/img/arrow-right.svg';
import ProxyGroupInput from './ProxyGroupInput';
import ThemeContext from '../Context/ThemeContext';

const ProxySidebar = ({ proxy, activeProxy, setActive, setProxy }: any) => {
  console.log(proxy);
  const [modal, showModal] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme+'taskGroup border-radius-5 ' + theme + 'border-task'}>
      <div
        className={
          'flex items-center ' +
          theme +
          'bg-task ' +
          theme +
          'border-task proxyGroupsTitle font-13 font-Gilroy-Bold '
        }
      >
        Proxy Groups
      </div>
      <div className={"flex items-center "+theme+"creatGroup "+theme+"task__border justify-between"}>
        <div className="font-10 font-Gilroy-Bold text-green">Group Name</div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            showModal(true);
          }}
        >
          <div className="font-10 font-Gilroy-Bold text-blue mr-1">
            Create Group
          </div>
          <img src={ArrowRight} alt="arrowRight" />
        </div>
      </div>
      <div className={theme+"middleLine"}></div>
      <div className="proxygroup__Content">
        {proxy.map((item: any, i: any) => (
          <ProxyGroupInput
            key={item.id}
            proxygroup={item}
            idx={i}
            active={item.id === activeProxy.id}
            setActive={setActive}
          />
        ))}
      </div>
      {/* {modal && (
        <div
          onClick={(e) => {
            if (e.target.classList[0] === 'cont') {
              closeModal();
            }
          }}
        >
          <TaskGroupModal closeModal={closeModal} addGroup={addGroup} />
        </div>
      )} */}
    </div>
  );
};

export default ProxySidebar;
