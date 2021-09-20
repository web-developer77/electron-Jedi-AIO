import React, { useState, useContext } from 'react';
import ArrowRight from '../../assets/img/arrow-right.svg';
import ProfileInput from './ProfileInput';
import ThemeContext from '../Context/ThemeContext';

const ProfileSidebar = ({
  profile,
  activeProfile,
  setActive,
  setProfile,
}: any) => {
  // console.log(activeProfile);
  const [modal, showModal] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme+'taskGroup border-radius-5 ' + theme + 'border-task'}>
      <div
        className={
          'flex items-center '+theme+'bg-task ' +
          theme +
          'border-task taskGroupsTitle font-13 font-Gilroy-Bold text-blue'
        }
      >
        Profile Groups
      </div>
      <div className={"flex items-center "+theme+"creatGroup "+theme+"task__border justify-between"}>
        <div className="font-10 font-Gilroy-Bold custom-group">Group Name</div>
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
      <div className="profileGroup__Content">
        {profile.map((item: any, i: any) => (
          <ProfileInput
            key={item.id}
            profile={item}
            idx={i}
            active={item.id === activeProfile.id}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
