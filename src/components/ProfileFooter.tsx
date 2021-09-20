// @flow
import * as React from 'react';
export function ProfileFooter() {
  return (
    <div className="ProfileFooter">
      <div className="first">
        <button className="createProfile">Add Profile</button>
        <button className="DeleteProfile">Delete Profiles</button>
      </div>
      <div className="second">

      </div>
      <div className="third">
        <button className="EditProfile">Edit Profiles</button>
        <button className="DeleteAllProfile">Delete all Profiles</button>
      </div>
    </div>
  );
};
