import React, { useState, useContext } from 'react';
import ArrowRight from '../../assets/img/arrow-right.svg';
import TaskGroupInput from './TaskGroupInput';
import { TaskGroupModal } from './TaskGroupModal';
import ThemeContext from '../Context/ThemeContext';

const TaskSidebar = ({ task, activeTask, setActive, setTasks }: any) => {
  const defaultGroup = {
    name: 'Task Group 1',
    id: task.length + 1,
    taskArr: [
      {
        id: 'A1',
        profile: 'Profile 1',
        site: 'Footlocker US',
        product: 'Nike SB Dunk Low Pro Blue',
        sizes: [9],
        proxy: 'Proxy List 1',
      },
      {
        id: 'A1',
        profile: 'Profile 1',
        site: 'Footlocker US',
        product: 'Nike SB Dunk Low Pro Blue',
        sizes: [7],
        proxy: 'Proxy List 1',
      },
    ],
  };
  const [modal, showModal] = useState(false);
  const { theme } = useContext(ThemeContext);
  const closeModal = () => {
    showModal(false);
  };
  const addGroup = (name: any) => {
    if (task.length < 1) {
      setActive({ ...defaultGroup, name });
    }
    setTasks((prev: any) => [...prev, { defaultGroup, name }]);
  };
  return (
    <div className={theme+'taskGroup border-radius-5 ' + theme + 'border-task'}>
      <div
        className={
          'flex items-center ' +
          theme +
          'bg-task ' +
          theme +
          'border-task taskGroupsTitle font-13 font-Gilroy-Bold'
        }
      >
        Task Groups
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
      <div className="taskgroupContent">
        {task.map((item: any, i: any) => (
          <TaskGroupInput
            key={item.id}
            taskgroup={item}
            idx={i}
            active={item.id === activeTask.id}
            setActive={setActive}
          />
        ))}
      </div>
      {modal && (
        <div
          onClick={(e) => {
            if (e.target.classList[0] === 'cont') {
              closeModal();
            }
          }}
        >
          <TaskGroupModal closeModal={closeModal} addGroup={addGroup} />
        </div>
      )}
    </div>
  );
};

export default TaskSidebar;
