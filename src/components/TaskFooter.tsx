// @flow
import * as React from 'react';
import {TaskModal} from "./TaskModal";
import {useState} from "react";
import {ipcRenderer} from 'electron';

export function TaskFooter() {
  const [ is_open, setIsOpen] = useState(false);
  const openCaptcha = () => {
    console.log("captcha handler!");
    ipcRenderer.send('captcha');
  };
  return (
    <div>
        <div className="taskFooter">
            <div className="first">
                <button className="createTask" onClick={()=>setIsOpen(true)}>Create task</button>
                <button className="DeleteTask">Delete tasks</button>
            </div>
            <div className="second">
                <button className="StartTask">Start tasks</button>
                <button className="StopTask">Stop tasks</button>
            </div>
            <div className="third">
                <button className="EditTask">Edit tasks</button>
                <button className="Captcha" onClick={openCaptcha}>Captcha</button>
            </div>

        </div>
      <TaskModal  Close={()=>setIsOpen(false)} is_open={is_open}/>

    </div>

  );
};
