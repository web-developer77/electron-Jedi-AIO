import React, { useContext } from 'react';
import ActivedeleteImg from '../../assets/img/ActiveTrash.svg';
import ThemeContext from '../Context/ThemeContext';

import deleteImg from '../../assets/img/trash.svg';

const WalmartGroup = ({
  walmartGroup,
  idx,
  active = false,
  setActive,
}: any) => {
  const handleSelect = () => {
    setActive(walmartGroup);
  };
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        active
          ? 'flex items-center justify-between walmart ' +
            theme +
            'border-task bg-activeBg cursor-pointer border-radius-5'
          : 'flex items-center justify-between walmart ' +
            theme +
            'border-task ' +
            theme +
            'bg-task cursor-pointer border-radius-5'
      }
      onClick={handleSelect}
    >
      <div className="w-100">
        <div
          className={'block ' + theme + 'text-white font-Gilroy-Bold font-11 '+theme+'custom-color'}
        >
          {walmartGroup.name}
        </div>
        <div
          className={active ? 'border-bottom' : theme+'border-inactiveBottom'}
        ></div>

        <div className="flex items-center justify-between">
          <div className={"font-Gilroy-Bold font-11 "+theme+"custom-color"}>
            {walmartGroup.taskArr.length} Accounts
          </div>
          <img src={deleteImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WalmartGroup;
