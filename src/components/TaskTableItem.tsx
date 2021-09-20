import React, { useState, useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const TaskTableItem = ({ task }: any) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        'grid  ' +
        theme +
        'bg-task ' +
        theme +
        'border-task font-Gilroy-Bold taskItem items-center'
      }
    >
      <div className={'font-11 ' + theme + 'text-white'}>{task.id}</div>
      <div className={'font-11 ' + theme + 'text-white'}>{task.site}</div>
      <div className="font-11 text-blue">{task.product}</div>
      <div className={'font-11 ' + theme + 'text-white'}>{task.profile}</div>
      <div className={'font-10 ' + theme + 'text-gray'}>{task.sizes}</div>
      <div className={'font-10 ' + theme + 'text-gray'}>{task.proxy}</div>
      <div className="font-11 text-green">{task.status}</div>
    </div>
  );
};

export default TaskTableItem;
