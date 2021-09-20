import React from 'react';
import refresh from '../assets/img/refresh.png';

export  function Footer(){
//   const [fields, setFields] =useState({
//     hours: 0,
//     minutes: "00",
//     seconds: "00",
//     timeThing: "am",
//
//   });
// useEffect(()=>{
//   setInterval(() => {
//     let tempTime = new Date ();
//     setFields({
//       hours: (tempTime.getHours() >= 12) ? tempTime.getHours() - 12: tempTime.getHours(),
//       minutes: (tempTime.getMinutes() > 10 ) ? tempTime.getMinutes().toString(): "0" + tempTime.getMinutes(),
//       seconds: (tempTime.getSeconds()>10) ? tempTime.getSeconds().toString() : "0" + tempTime.getSeconds(),
//       timeThing: (tempTime.getHours() >= 12) ? "pm": "am"
//     })
//   }, 1000);
//
// })

  return (
    <div className="footer">

      <div className="current-time">
        {/*<span>{fields.hours}:{fields.minutes}:{fields.seconds} </span>*/}
        <span>0.10.10 </span>
        <button className="refresh">
          <img src={refresh} alt=""/>
        </button>
      </div>
      <div className="taskBtn">
        <button className="startAllTask">Start All Tasks</button>
        <button className="stopAllTask">Stop All Tasks</button>
        <button className="editAllTask">Edit All Tasks</button>
        <button className="clearAllTask">Clear All Tasks</button>
      </div>
      <div className="connectedBtnReady">
        <button className="readytogo">
          <div />
          Ready to Go
        </button>
        <button className="connected">
          <div />
          Connected
        </button>

      </div>
    </div>
  );
}
