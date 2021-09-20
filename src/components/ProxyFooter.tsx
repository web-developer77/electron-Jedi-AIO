// @flow
import * as React from 'react';
import {ProxyModal} from "./ProxyModal";
import {useState} from "react";


export function ProxyFooter() {
  const [show, setShow] = useState(false);

  return (
   <div>
     <div className="proxyFooter">
       <div className="first">
         <button className="AddProxies" onClick={()=>setShow(true)}>Add proxies</button>
         <button className="DeleteProxies">Delete proxies</button>
       </div>
       <div className="second">
         <img src={require('../assets/img/arrow_down.png').default} alt="" className="arrow-kith"/>
         <select name="kithEu" id="selectBox">
           <option value="Kith EU">Kith EU</option>
           <option value="Kith EU">Kith EU</option>
         </select>
         <button className="TestProxies">Test proxies</button>
         <button className="StopTest">Stop test</button>
       </div>
       <div className="third">
         <button className="EditProfiles">Edit profiles</button>
         <button className="DeleteFailed">Delete failed</button>
       </div>
     </div>
     <ProxyModal open={show} onClose={()=>setShow(false)}/>
   </div>
  );
};
