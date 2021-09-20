import React, { useState, useContext } from 'react';
import searchimg from '../../assets/img/search.svg';
import ProxySidebar from '../components/ProxySidebar';
import ProxyTableItem from '../components/ProxyTableItem';
import ThemeContext from '../Context/ThemeContext';

export const Proxies = () => {
  const [isOpen, setOpen] = useState(false);
  const [proxy, setProxy] = useState([
    {
      name: 'Group Name',
      id: 1,
      taskArr: [
        {
          id: '1',
          proxy: 'IP:PORT:USERNAME:PASSWORD',
          delay: '12 ms',
        },
        {
          id: '2',
          proxy: 'IP:PORT:USERNAME:PASSWORD',
          delay: '12 ms',
        },
        {
          id: '3',
          proxy: 'IP:PORT:USERNAME:PASSWORD',
          delay: '12 ms',
        },
        {
          id: '4',
          proxy: 'IP:PORT:USERNAME:PASSWORD',
          delay: '12 ms',
        },
        {
          id: '5',
          proxy: 'IP:PORT:USERNAME:PASSWORD',
          delay: '12 ms',
        },
      ],
    },
    {
      name: 'Group Name',
      id: 2,
      taskArr: [
        {
          id: '1',
          proxy: 'IP:PORT:USERNAME:PASSWORD',
          delay: '12 ms',
        },
        {
          id: '2',
          proxy: 'IP:PORT:USERNAME:PASSWORD',
          delay: '12 ms',
        },
        {
          id: '3',
          proxy: 'IP:PORT:USERNAME:PASSWORD',
          delay: '12 ms',
        },
        {
          id: '4',
          proxy: 'IP:PORT:USERNAME:PASSWORD',
          delay: '12 ms',
        },
        {
          id: '5',
          proxy: 'IP:PORT:USERNAME:PASSWORD',
          delay: '13 ms',
        },
      ],
    },
  ]);
  const { theme } = useContext(ThemeContext);
  const [activeProxyGr, setActiveProxy] = useState(proxy[0]);
  return (
    <div className="proxy flex justify-between tasks w-100 ">
      <div className={theme+"profile__content overflow-y-scroll h-full mb-auto w-70 isblur flex justify-between btnGap"}>
        <div className={"w-100 "+theme+"innerBackground"}>
          <div className={"flex items-center justify-between "+theme+"tasks__header"}>
            <div
              className={
                'taskTitle font-Gilroy-Bold font-13 ' + theme + 'text-white'
              }
            >
              Profiles ({proxy.length})
            </div>
            <div
              className={
                'search__task font-Gilroy-Bold font-10 ' +
                theme +
                'text-gray flex items-center'
              }
            >
              <div className="mr-1">Search Task</div>
              <img src={searchimg} alt="search" />
            </div>
          </div>
          <div className="proxyTableItem overflow-y-scroll">
            {activeProxyGr &&
              activeProxyGr?.taskArr.map((item, i) => (
                <ProxyTableItem key={i} proxy={item} />
              ))}
          </div>
        </div>
        <div className="w-100">
          <div className={"block items-center justify-between "+theme+"innerBackground"}>
            <div className={theme+"addProxy__header"}>
              <div
                className={
                  'taskTitle font-Gilroy-Bold font-13 ' + theme + 'text-white'
                }
              >
                Add Proxies
              </div>
            </div>

            <div className="proxyPart overflow-y-scroll w-100">
              <textarea
                name="proxy"
                id=""
                cols={30}
                rows={10}
                placeholder={'IP:PORT IP:PORT:USERNAME:PASSWORD'}
                className={
                  'proxyTextArea ' +
                  theme +
                  'bg-task border-radius-5 ' +
                  theme +
                  'border-task ' +
                  theme +
                  'text-gray'
                }
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className={"btn  bg-blue "+theme+"btnProxy text-center border-radius-3"}>
                Add Proxies
              </button>
            </div>
          </div>
          <div className={"block items-center justify-between "+theme+"innerBackground  mt-3"}>
            <div className={theme+"addProxy__header"}>
              <div
                className={
                  'taskTitle font-Gilroy-Bold font-13 ' + theme + 'text-white'
                }
              >
                Test Proxies
              </div>
            </div>
            <div className="flex justify-center">
              <select
                name="customSite"
                className={
                  theme +
                  'border-task bg-transparent w-100 ' +
                  theme +
                  ' text-white  testOn'
                }
              >
                <option value="Test On">Test On</option>
              </select>
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                name="customSite"
                className={theme + 'border-task bg-transparent w-100 custom'}
                placeholder={'Custom Site ( URL )'}
              />
            </div>
            <div className="flex justify-center">
              <button className={"btn  bg-blue "+theme+"btnTest text-center border-radius-3"}>
                Test All
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="proxy__sidebar w-30">
        <ProxySidebar
          proxy={proxy}
          activeProxy={activeProxyGr}
          setActive={setActiveProxy}
          setProxy={setProxy}
        />
      </div>
    </div>
  );
};
