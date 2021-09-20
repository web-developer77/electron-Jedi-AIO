import React, { useState, useContext } from 'react';
import TaskSidebar from '../components/TaskSidebar';
import searchimg from '../../assets/img/search.svg';
import TaskTableItem from '../components/TaskTableItem';
import { TaskModal } from '../components/TaskModal';
import ThemeContext from '../Context/ThemeContext';
export const Task = () => {
  const [tasks, setTasks] = useState([
    {
      name: 'Group Name',
      id: 1,
      taskArr: [
        {
          id: '1',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Successful Checkout ',
        },
        {
          id: '2',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'In Queue ',
        },
        {
          id: '3',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Card Declined',
        },
        {
          id: '4',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Successful Checkout ',
        },
        {
          id: '5',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Successful Checkout ',
        },
        {
          id: '6',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'In Queue',
        },
        {
          id: '7',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Waiting for prod...',
        },
      ],
    },
    {
      name: 'Group Name',
      id: 2,
      taskArr: [
        {
          id: '1',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Successful Checkout ',
        },
        {
          id: '2',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Successful Checkout ',
        },
        {
          id: '3',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Successful Checkout ',
        },
        {
          id: '4',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Successful Checkout ',
        },
        {
          id: '5',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Successful Checkout ',
        },
        {
          id: '6',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Successful Checkout ',
        },
        {
          id: '7',
          profile: 'Test Profile',
          site: 'Footlocker DE',
          product: 'Nike SB Dunk Low Pro Blue Fury',
          sizes: 'US 8.5 / 9',
          proxy: 'Proxy List 1',
          status: 'Successful Checkout ',
        },
      ],
    },
  ]);
  const [activeTaskGr, setActiveTask] = useState(tasks[0]);
  const [is_open, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex justify-between tasks w-100">
      <div
        className={
          is_open
            ? 'tasks__content overflow-y-scroll h-full mb-auto w-70 isBlur'
            : 'tasks__content overflow-y-scroll h-full mb-auto w-70'
        }
      >
        <div className={"flex items-center justify-between "+theme+"tasks__header"}>
          <div
            className={
              'taskTitle font-Gilroy-Bold font-13 ' + theme + 'text-white'
            }
          >
            Tasks {activeTaskGr?.taskArr.length}
          </div>
          <div className={"search__task font-Gilroy-Bold font-10 "+theme+"text-gray flex items-center"}>
            <div>Search Task</div>
            <img src={searchimg} alt="search" />
          </div>
        </div>
        <div className="w-full table-auto tasksTable">
          <div className="">
            <div className="w-full grid taskContent__header items-center">
              <div className={"font-Gilroy-Bold font-10 "+theme+"text-gray text-left"}>
                ID
              </div>
              <div className={"font-Gilroy-Bold font-10 "+theme+"text-gray text-left"}>
                Site
              </div>
              <div className={"font-Gilroy-Bold font-10 "+theme+"text-gray text-left"}>
                Product
              </div>
              <div className={"font-Gilroy-Bold font-10 "+theme+"text-gray text-left"}>
                Profile
              </div>
              <div className={"font-Gilroy-Bold font-10 "+theme+"text-gray text-left"}>
                Size
              </div>
              <div className={"font-Gilroy-Bold font-10 "+theme+"text-gray text-left"}>
                Proxy
              </div>
              <div className={"font-Gilroy-Bold font-10 "+theme+"text-gray text-left"}>
                Status
              </div>
              <div className="" />
            </div>
          </div>
          <div className={theme+"task__border"}></div>
          <div className="taskTableItem overflow-y-scroll">
            {activeTaskGr &&
              activeTaskGr?.taskArr.map((task, i) => (
                <TaskTableItem key={i} task={task} />
              ))}
          </div>
        </div>
        <div className="flex items-center justify-between footerTask">
          <div className="createTask">
            <button
              className={"btn "+theme+"createBtn font-Gilroy-Bold font-11  border-radius-3 cursor-pointer"}
              onClick={() => setIsOpen(true)}
            >
              Create Tasks
            </button>
          </div>
          <div className="flex items-center rightBtn btnGap">
            <button className="btn startBtn font-Gilroy-Bold font-10 border-radius-3 cursor-pointer">
              Start All
            </button>
            <button className="btn stopBtn font-Gilroy-Bold font-10 border-radius-3 cursor-pointer">
              Stop All
            </button>
            <button className="btn editBtn font-Gilroy-Bold font-10 border-radius-3 cursor-pointer">
              Edit All
            </button>
            <button className="btn deleteBtn font-Gilroy-Bold font-10 border-radius-3 cursor-pointer">
              Delete All
            </button>
          </div>
        </div>
      </div>
      <div className="tasks__sidebar w-30">
        <TaskSidebar
          task={tasks}
          activeTask={activeTaskGr}
          setActive={setActiveTask}
          setTasks={setTasks}
        />
        <TaskModal is_open={is_open} Close={() => setIsOpen(false)} />
      </div>
    </div>
  );
};
