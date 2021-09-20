import React, { useContext } from 'react';
import deleteImg from '../../assets/img/trash.svg';
import ActivedeleteImg from '../../assets/img/ActiveTrash.svg';
import ThemeContext from '../Context/ThemeContext';

const TaskGroupInput = ({ taskgroup, setActive, active = false, idx }: any) => {
  const handleSelect = () => {
    setActive(taskgroup);
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
          {taskgroup.name}
        </div>
        <div
          className={
            active
              ? 'font-Gilroy-Bold font-11 activeProfileColor'
              : 'font-11 font-Gilroy-Bold ' + theme + 'text-white'
          }
        >
          {taskgroup.taskArr.length} Tasks
        </div>
      </div>
      <div
        className={active ? 'border-bottom' : theme + 'border-inactiveBottom'}
      ></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="activeState"></span>
          <span
            className={
              active
                ? 'font-Gilroy-Bold font-11 activeColor'
                : 'font-11 font-Gilroy-Bold inactiveColor'
            }
          >
            12
          </span>
          <span className="waitState"></span>
          <span
            className={
              active
                ? 'font-Gilroy-Bold font-11 waitColor'
                : 'font-11 font-Gilroy-Bold waitColor'
            }
          >
            34
          </span>
          <span className="declineState"></span>
          <span
            className={
              active
                ? 'font-Gilroy-Bold font-11 declineColor'
                : 'font-11 font-Gilroy-Bold declineColor'
            }
          >
            23
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
export default TaskGroupInput;
