import React, { useContext } from 'react';
import profile from '../../assets/img/profile.svg';
import ActivedeleteImg from '../../assets/img/ActiveTrash.svg';
import edit from '../../assets/img/edit.svg';
import ActiveEditImg from '../../assets/img/ActiveEdit.svg';
import deleteImg from '../../assets/img/trash.svg';
import ThemeContext from '../Context/ThemeContext';

const ProfileInput = ({ profile, active = false, idx, setActive }: any) => {
  const { theme } = useContext(ThemeContext);
  const handleSelect = () => {
    setActive(profile);
  };
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
          {profile.name}
        </div>
      </div>
      <div
        className={active ? 'border-bottom' : theme + 'border-inactiveBottom'}
      ></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span
            className={
              active
                ? 'font-Gilroy-Bold font-11  activeProfileColor'
                : 'font-11 font-Gilroy-Bold ' + theme + 'text-white'
            }
          >
            {profile.taskArr.length} Profiles{' '}
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

export default ProfileInput;
