// @flow
import * as React from 'react';
import {useState} from "react";
import close from "../assets/img/header/close.png";

type Props = {
  proxyOpen:boolean;
  proxyClose:any;
};

export function ProxyListModal({proxyOpen, proxyClose}: Props) {
  if(!proxyOpen) return null;
  const [value, setValue] = useState('');
  const onSubmit = () =>{
    // @ts-ignore
    event.preventDefault();
  };
  return (
    <div className="create-proxyList">
      <div className="modalHeader">
        <h2 className="modalTitle">Add new list</h2>
      </div>
      <img src={close} alt="close" className="modal-close" onClick={proxyClose}/>
      <div className="proxyList-modal-content">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="List 1"
                value = {value}
                onChange={(e) =>setValue(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button className="button button-create addBtn w-100" type={"submit"} >Add</button>
            </div>
          </form>

      </div>
    </div>
  );
};
