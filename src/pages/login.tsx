import React, { useContext, useState } from 'react';
import { ipcRenderer } from 'electron';
import Logo from '../../assets/img/Logo.svg';
import ArrowRight from '../../assets/img/arrow-right.svg';
import cart from '../../assets/img/Buy.svg';
import Tabs from './Tabs';
import Tab from './Tabs/Tab';
import ThemeContext from '../Context/ThemeContext';
// eslint-disable-next-line import/prefer-default-export
export function Login() {
  const [key, setData] = useState('');
  const [retrieveData, setRetrieveData] = useState('');
  const confirmKey = (e: any) => {
    e.persist();
    if (e.key === 'Enter') {
      console.log('do validate');
      ipcRenderer.send('activated', key);
    }
  };
  const { theme } = useContext(ThemeContext);
  console.log(theme)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setData(event.target.value);
  };
  ipcRenderer.on('correct', (_e: any, data) => {
    setTimeout(() => {
      setRetrieveData(data);
    }, 3000);
  });
  const LoginPage = () => {
    if (retrieveData) {
      ipcRenderer.send('mainPage');
    }
  };
  return (
    <div
      className={
        'block w-screen h-screen bg-background items-center ' +
        theme +
        'text-white main-login'
      }
    >
      <div className={theme+"header flex flex  justify-between p-6"}>
        <div className="flex items-center">
          <img src={Logo} alt="logo" />
          <div className={theme+'logo-title font-white'}>VelocityAIO</div>
        </div>
        <div className="flex items-center">
          <div className="contactSupport mr-1">Contact Support</div>
          <img src={ArrowRight} alt="arrow-right" />
        </div>
      </div>
      <div className="flex justify-between w-screen ">
        <div className={"block "+theme+"bg-left p-5 w-50 rightPart"}>
          <div className="welometitle">Welcome to VelocityAIO!</div>
          <div className="licenseTitle">
            Please enter your License Key to continue
          </div>
          <div className="flex">
            <div className="OpenDashboard mr-1">Open Dashboard</div>
            <img src={ArrowRight} alt="arrow-right" />
          </div>
          <div className={"block "+theme+"inputLicenseKey mt-4"}>
            {retrieveData ? (
              <div className="flex justify-between items-center verifyKey">
                <div className="keyTitle">Key verified</div>
                <img
                  src="././../assets/img/verify.gif"
                  alt="key"
                  width="20px"
                />
              </div>
            ) : (
              <input
                type="text"
                placeholder="Enter License Key"
                name="key"
                onChange={handleChange}
                onKeyPress={confirmKey}
                value={key}
              />
            )}
          </div>
          <div className="mt-3">
            <button className="login btn cursor-pointer" onClick={LoginPage}>
              Login
            </button>
          </div>
        </div>
        <div className="block bg-right w-50 justify-center">
          <div className="flex justify-center automation mb-2 text-center">
            New era of automation
          </div>
          <div className="totalCheckout m-10 p-5">
            <div className="flex justify-between items-center mb-5">
              <div className="block">
                <div className="totalCheckoutTitle">Total Checkouts</div>
                <div className="today mt-2">+3 Today</div>
              </div>
              <div className="checkout-cart">
                <img src={cart} alt="cart" />
              </div>
            </div>
            <Tabs>
              <Tab title="All">432</Tab>
              <Tab title="Weekly">500</Tab>
              <Tab title="Monthly">600</Tab>
            </Tabs>
          </div>
          <div className="bottomTitle flex justify-center text-center">
            by VelocityAIO
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

function data(data: any) {
  throw new Error('Function not implemented.');
}
