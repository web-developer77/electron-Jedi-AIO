import React, {useState} from 'react';
import close from "../assets/img/header/close.png";

interface Props {
  open: boolean,
  onClose: any
}

export function ProxyModal({open, onClose}: Props){

  if(!open) return null;
  const [proxyValue, setProxy ] = useState('');

  function onSubmit() {
    // @ts-ignore
    event.preventDefault();
  }

  return (
    <div>
      <div className="create-modal-wrapper" onClick={onClose}/>
      <div className="create-proxy">
        <div className="modalHeader">
          <h2 className="modalTitle">Add proxies</h2>
        </div>
        <img src={close} alt="" className="modal-close" onClick={onClose}/>
        <div className="proxy-modal-content">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <textarea
                  placeholder="IP:Port:User:Password"
                  name="proxy"
                  value = {proxyValue}
                  onChange={(e) =>setProxy(e.target.value)}
                  required
                  className="form-textarea" />

              </div>
              <div className="form-group">
                <button className="button button-create AddBtn w-100" type={"submit"} >Add</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}
