import React, { useContext } from 'react';
import { ipcRenderer } from 'electron';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import routes from '../routes/routes.json';
import Logo from '../../assets/img/MainLogo.svg';
import ThemeContext from '../Context/ThemeContext';
// eslint-disable-next-line import/prefer-default-export
export function Header() {
  const location = useLocation();
  const appQuit = () => {
    ipcRenderer.send('quit-app');
  };

  const { theme } = useContext(ThemeContext);

  const appMinimize = () => {
    ipcRenderer.send('minimize-app');
  };
  return (
    <div className="panel">
      <div className={theme + 'sidebar'}>
        <div className="header-part">
          <div className="block justify-center text-center items-center">
            <img src={Logo} alt="logo" className="m-auto mainlogo" />
            <div
              className={
                'font-Gilroy-Bold font-12 ' +
                theme +
                'text-white ' +
                theme +
                'AIO_text p-3'
              }
            >
              VelocityAIO
            </div>
          </div>
          <div className="block text-center justify-center p-6 menu">
            <Link
              to={routes.DASHBOARD}
              className={
                location.pathname === routes.DASHBOARD
                  ? 'active flex justify-center text-center ' +
                    theme +
                    'submenu'
                  : 'flex justify-center text-center ' + theme + 'submenu'
              }
            >
              <span className="Dashboard headerTitle">Dashboard</span>
            </Link>
            <Link
              to={routes.TASKS}
              className={
                location.pathname === routes.TASKS
                  ? 'active  flex justify-center text-center ' +
                    theme +
                    'submenu'
                  : 'flex justify-center text-center ' + theme + 'submenu'
              }
            >
              <span className="Tasks headerTitle">Tasks</span>
            </Link>
            <Link
              to={routes.Profile}
              className={
                location.pathname === routes.Profile
                  ? 'active  flex justify-center text-center ' +
                    theme +
                    'submenu'
                  : 'flex justify-center text-center ' + theme + 'submenu'
              }
            >
              <span className="Profiles headerTitle">Profiles</span>
            </Link>
            <Link
              to={routes.PROXIES}
              className={
                location.pathname === routes.PROXIES
                  ? 'active  flex justify-center text-center ' +
                    theme +
                    'submenu'
                  : 'flex justify-center text-center ' + theme + 'submenu'
              }
            >
              <span className="Proxies headerTitle">Proxies</span>
            </Link>

            <Link
              to={routes.Accounts}
              className={
                location.pathname === routes.Accounts
                  ? 'active  flex justify-center text-center ' +
                    theme +
                    'submenu'
                  : 'flex justify-center text-center ' + theme + 'submenu'
              }
            >
              <span className="Settings headerTitle">Accounts</span>
            </Link>
            <Link
              to={routes.SETTINGS}
              className={
                location.pathname === routes.SETTINGS
                  ? 'active  flex justify-center text-center ' +
                    theme +
                    'submenu'
                  : 'flex justify-center text-center ' + theme + 'submenu'
              }
            >
              <span className="Settings headerTitle">Settings</span>
            </Link>
          </div>
          <div className="flex items-center text-center justify-center login-state">
            <span className="font-Gilroy-Bold font-10 text-green">
              Connected
            </span>
          </div>
        </div>
        {/* <div className="window-buttons">
        <span onClick={() => appMinimize()} >
          <img src={minize} alt=""/>
        </span>
                <span onClick={() => appQuit()} className="close">
          <img src={close} alt=""/>
        </span>
            </div> */}
      </div>
    </div>
  );
}
