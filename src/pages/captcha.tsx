import React from 'react';
import {ipcRenderer} from 'electron';
import minize from "../assets/img/header/minize.png";
import close from "../assets/img/header/close.png";

export function Captcha() {

  const captchaMinimize = () => {
    console.log("captcha minimize");
    ipcRenderer.send('minimize-captcha');
  };
  const captchaQuit = () => {
    console.log('captcha quite');
    ipcRenderer.send('captcha-quite')
  };
  return (

    <div className="captchaMain">
      <div className="captcha-header">
        <div className="catcha-logo">
          <span>Captcha harvestr</span>
        </div>
        <div className="captcha-close-button">
                  <span onClick={() => captchaMinimize()}>
                      <img src={minize} alt=""/>
                  </span>
          <span onClick={() => captchaQuit()} className="close">
                      <img src={close} alt=""/>
                  </span>
        </div>
      </div>
      <div className="captcha-section">
        <img src={require('../assets/img/captcha/ellipse.png').default} alt="" className={'rotate'}/>
        <img src={require('../assets/img/captcha/captchaLogo.png').default} alt="" className={'capchaLogo'}/>
      </div>
      <div className="captcha-footer">
        <div className="solver-buttons">
          <div className={'captchaSite'}>
            <label htmlFor="Site">Site</label>
            <img src={require('../assets/img/arrow_down.png').default} alt="" className="arrow-captcha"/>

            <select name="site">
              <option value="FootSites">FootSites</option>
              <option value="FootSites">FootSites</option>
            </select>
          </div>
          <button className="button button-solver">Login to chrome</button>
        </div>
        <div className="set-proxy">
          <div className="proxy-box">
            <label htmlFor="proxy">Proxy</label>
            <input type="text" className="input-proxy" placeholder="128.199.107.97:10809"/>
          </div>
        </div>
      </div>
    </div>
  );
}
