import React, {useContext} from 'react';
import close from "../assets/img/header/close.png";
import ThemeContext from '../Context/ThemeContext';


export function TaskGroupModal({ closeModal, addGroup }:any){
  const { theme } = useContext(ThemeContext);
  return (
    <div>
        <div className="create-modal-wrapper" onClick={closeModal}/>
        <div className={theme+"create-task"}>
          <div className="modalHeader">
            <h2 className="modalTitle">Add task group</h2>
          </div>
          <img src={close} alt="close" className="modal-close" onClick={closeModal}/>
          <div className={theme+"task-modal-content"}>
            <div>
              <div className="h-100 form-group">
                <label className="form-label">Name</label>
                <div className="NameGroup">
                  <input type="text" placeholder="Group 1"/>
                </div>
              </div>
            </div>
            <div className="site-custom">
              <div className="form-group">
                <label className="form-label">
                  <span className="subSite">Site</span>
                  <span className="subCustom">/ Custom</span>
                </label>
                <img src={require('../assets/img/arrow_down.png').default} alt="" className="arrow-site"/>

                <select name="select" id="select">
                  <option value="Select">Select</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">
                  <span className="subProduct">Product</span>
                  <span className="subkeyWords">/ Key words</span>
                </label>
                <div className="w-100 productGroup">
                  <input type="text" placeholder="Enter"/>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">
                  <span  className="subSite">Size</span>
                  <span  className="subCustom">/ Custom</span>
                </label>
                <img src={require('../assets/img/arrow_down.png').default} alt="" className="arrow-size"/>

                <select name="select" id="select">

                  <option value="Select">Select</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">
                  <span  className="subSite">Size</span>
                  <span  className="subCustom">/ Custom</span>
                </label>
                <img src={require('../assets/img/arrow_down.png').default} alt="" className="arrow-sizze"/>

                <select name="select" id="select">

                  <option value="Select">Select</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Delay</label>
                <div className="w-100 delayGroup">
                  <input type="text" placeholder={'4000'}/>
                  <span className="miliSecond">ms</span>
                </div>
              </div>
              <div className="form-group">
                <button className="button button-create w-100" >Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
