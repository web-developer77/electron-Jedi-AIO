import React, { useState } from 'react';
import ProfileInput from './ProfileInput';

const ProfilePart = ({
  profile,
  activeProfile,
  setActive,
  idx,
  setProfile,
}: any) => {
  return (
    <div className="w-full flex flex-wrap profileTable profile-gap">
      {profile.map((item: any, i: any) => (
        <ProfileInput
          key={item.id}
          profileGroup={item}
          idx={i}
          active={item.id === activeProfile.id}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export default ProfilePart;
