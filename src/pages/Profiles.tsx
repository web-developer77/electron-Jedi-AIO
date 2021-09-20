// @flow
import * as React from 'react';
import { useState, useContext } from 'react';
import { ProfileModal } from '../components/ProfileModal';
import searchimg from '../../assets/img/search.svg';
import ProfileSidebar from '../components/ProfileSidebar';

import ProfileInput from '../components/ProfileInput';
import ProfilePart from '../components/ProfilePart';
import profile from '../../assets/img/profile.svg';
import ActivedeleteImg from '../../assets/img/ActiveTrash.svg';
import edit from '../../assets/img/edit.svg';
import ActiveEditImg from '../../assets/img/ActiveEdit.svg';
import DeleteImg from '../../assets/img/Trash.svg';
import { Prev } from 'react-bootstrap/esm/PageItem';
import { NavItem } from 'react-bootstrap';
import ThemeContext from '../Context/ThemeContext';

export const Profiles = () => {
  const [data] = useState(Array(15).fill(''));
  const [isOpened, setOpened] = useState(false);
  const [profiles, setProfiles] = useState([
    {
      name: 'Group Name',
      id: 1,
      taskArr: [
        {
          id: 1,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 2,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 3,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 4,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 5,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
      ],
    },
    {
      name: 'Group Name',
      id: 2,
      taskArr: [
        {
          id: 1,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 2,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 3,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 4,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 5,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
      ],
    },
    {
      name: 'Group Name',
      id: 3,
      taskArr: [
        {
          id: 1,
          profile: 'Profile 1',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 2,
          profile: 'Profile 2',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 3,
          profile: 'Profile 3',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 4,
          profile: 'Profile 4',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
        {
          id: 5,
          profile: 'Profile 5',
          max: 'Max Mustermann',
          data: '12/23',
          card: '1234 1234 1234',
          active: false,
        },
      ],
    },
  ]);

  const [activeProfileGr, setActiveProfile] = useState(profiles[0]);
  const [selected, setSelected] = useState(profiles[0].taskArr);
  const [is_open, setIsOpen] = useState(false);

  const { theme } = useContext(ThemeContext);
  // function handleSelect(e:any,i:any){
  //   // selected.filter(name=>name.map(id))
  //   console.log(i);
  //   // setSelected(!(i))
  //   // setSelected((prev:any)=>[...prev]);
  //   const newItemsArr = activeProfileGr?.taskArr.map(obj =>
  //     obj.id === i ? {id: obj.id, profile:obj.profile,max:obj.max,data:obj.data,card:obj.card, active: !obj.active} : obj);
  //   // console.log(newItemsArr);

  //   const object = {name:activeProfileGr.name,'id':1,taskArr:newItemsArr};
  //   console.log(object);
  //   setActiveProfile(object)

  // }
  function handleSelect(e: any, i: any) {
    // selected.filter(name=>name.map(id))
    console.log(i);
    // setSelected(!(i))
    // setSelected((prev:any)=>[...prev]);
    const newItemsArr = activeProfileGr?.taskArr.map((obj) =>
      obj.id === i
        ? {
            id: obj.id,
            profile: obj.profile,
            max: obj.max,
            data: obj.data,
            card: obj.card,
            active: !obj.active,
          }
        : obj
    );
    // console.log(newItemsArr);

    const object = { name: activeProfileGr.name, id: 1, taskArr: newItemsArr };
    console.log(object);
    setSelected(newItemsArr);
  }
  // console.log(typeof activeProfileGr);

  return (
    // <div className="profiles  h-full">
    <div className="ProfileTaskContent flex justify-between tasks w-100 ">
      <div
        className={
          isOpened
            ? theme+'Profile__Content overflow-y-scroll h-full mb-auto w-70 isBlur'
            : theme+'Profile__Content overflow-y-scroll h-full mb-auto w-70'
        }
      >
        <div className={"flex items-center justify-between "+theme+"tasks__header"}>
          <div
            className={
              'taskTitle font-Gilroy-Bold font-13 ' + theme + 'text-white'
            }
          >
            Profiles ({profiles.length})
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
        <div className="profile__Part">
          <div className="w-full flex flex-wrap profileTable profile-gap">
            {selected.map((item: any, i: any) => (
              <div
                className={
                  item.active
                    ? 'profileActivePart ' +
                      theme +
                      'border-task cursor-pointer'
                    : theme+'profilePart '+theme+'profileInBorder cursor-pointer'
                }
                onClick={(e) => handleSelect(e, item.id)}
                key={i}
              >
                <div
                  className={
                    'flex items-center justify-between profileContent bg-ActiveBg'
                  }
                >
                  <div className="block">
                    <div className="font-Gilroy-Bold font-11 ">
                      {item.profile}
                    </div>
                    <div className="font-Gilroy-Bold font-10">{item.max}</div>
                  </div>
                  <img src={profile} alt="profile" />
                </div>
                <div className="flex items-center justify-between profileDate">
                  {item.data}
                </div>
                <div className="profileBorder"></div>
                <div className="flex items-center justify-between">
                  <div className="font-Gilroy-Bold font-10">{item.card}</div>
                  {/* {active ? (

                  ) : (
                    <div className="flex items-center">
                      <img src={edit} alt="" className="mr-1" />
                      <img src={DeleteImg} alt="" />
                    </div>
                  )} */}
                  <div className="flex items-center">
                    <img src={ActiveEditImg} alt="" className="mr-1" />
                    <img src={ActivedeleteImg} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between footerProfile">
          <div className="createTask">
            <button
              className={"btn "+theme+"createBtn font-Gilroy-Bold font-11  border-radius-3 cursor-pointer"}
              onClick={() => setIsOpen(true)}
            >
              Create Profile
            </button>
          </div>
          <div className="flex items-center rightBtn btnGap">
            <button className="btn startBtn font-Gilroy-Bold font-10 border-radius-3 cursor-pointer">
              Export
            </button>
            <button className="btn stopBtn font-Gilroy-Bold font-10 border-radius-3 cursor-pointer">
              Import
            </button>

            <button className="btn deleteBtn font-Gilroy-Bold font-10 border-radius-3 cursor-pointer">
              Delete All
            </button>
          </div>
        </div>
      </div>
      <div className="tasks__sidebar w-30">
        <ProfileSidebar
          profile={profiles}
          activeProfile={activeProfileGr}
          setActive={setActiveProfile}
          setProfile={setProfiles}
        />
      </div>
    </div>

    // {/* <ProfileModal isOpen={isOpened} isClosed={() => setOpened(false)} /> */}
    // {/* </div> */}
  );
};
