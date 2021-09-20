import React, { useState, useContext } from 'react';
import searchimg from '../../assets/img/search.svg';
import Walmart from '../components/Walmart';
import deleteImg from '../../assets/img/trash.svg';
import ThemeContext from '../Context/ThemeContext';

const Accounts = () => {
  const [isOpened, setOpened] = useState(false);
  const [account, setAccounts] = useState([
    {
      name: 'Walmart',
      id: 1,
      taskArr: [
        {
          id: 1,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 2,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 3,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 4,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 5,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
      ],
    },
    {
      name: 'Walmart',
      id: 2,
      taskArr: [
        {
          id: 1,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 2,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 3,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 4,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 5,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 6,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
      ],
    },
    {
      name: 'Walmart',
      id: 3,
      taskArr: [
        {
          id: 1,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 2,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 3,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 4,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 5,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 6,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
      ],
    },
    {
      name: 'Walmart',
      id: 4,
      taskArr: [
        {
          id: 1,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 2,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 3,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
        {
          id: 4,
          email: 'EMAIL:PASSWORD',
          password: 'Max Mustermann',
          active: false,
        },
      ],
    },
  ]);
  const [activeAccountGr, setActiveAccountGr] = useState(account[0]);

  const { theme } = useContext(ThemeContext);

  return (
    <div className="ProfileTaskContent flex justify-between tasks w-100 ">
      <div
        className={
          isOpened
            ? theme+'profile__content overflow-y-scroll h-full mb-auto w-70 isblur ' +
              theme +
              'innerBackground'
            : 'w-70 ' + theme + 'innerBackground'
        }
      >
        <div className={"flex items-center justify-between "+theme+"tasks__header"}>
          <div
            className={
              'taskTitle font-Gilroy-Bold font-13 ' + theme + 'text-white'
            }
          >
            Accounts
          </div>
          <div
            className={
              'search__task font-Gilroy-Bold font-10 ' +
              theme +
              'text-gray flex items-center'
            }
          >
            <div className="mr-1">Search Accounts</div>
            <img src={searchimg} alt="search" />
          </div>
        </div>
        <div className=" w-100">
          <Walmart
            walmart={account}
            activeWalmart={activeAccountGr}
            setActive={setActiveAccountGr}
            setWalmart={setAccounts}
          />
        </div>
        <div className={theme+"middleLine"}></div>
        <div className="block">
          <div className="block items-center justify-between ">
            {activeAccountGr?.taskArr.map((items, i) => (
              <div
                className={
                  'flex items-center justify-between ' +
                  theme +
                  'border-task '+theme+'AccountContent border-radius-5'
                }
              >
                <div className={"font-Gilroy-Bold font-11 "+theme+"custom-color"}>{items.email}</div>
                <img src={deleteImg} alt="" />
              </div>
            ))}
            <div className={"font-Gilroy-Bold font-11 "+theme+"custom-color"}>{}</div>
          </div>
        </div>
      </div>

      <div className={"tasks__sidebar "+theme+"innerBackground w-30"}>
        <div
          className={
            'flex items-center ' +
            theme +
            'bg-custom-task ' +
            theme +
            'border-task taskGroupsTitle font-13 font-Gilroy-Bold ' +
            theme +
            'text-white border-radius-5'
          }
        >
          Add Accounts
        </div>
        <div className="border-radius-5">
          <textarea
            name="account"
            cols={30}
            rows={10}
            placeholder="Email:Password"
            className={
              'accountTextArea ' +
              theme +
              'bg-task border-radius-5 ' +
              theme +
              'border-task ' +
              theme +
              'text-gray'
            }
            defaultValue={''}
          />
        </div>
        <div className="flex justify-center">
          <button className={"btn  bg-blue "+theme+"btnAccount text-center border-radius-3"}>
            Add Accounts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
