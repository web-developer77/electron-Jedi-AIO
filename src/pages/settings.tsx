import React, { useState, useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

import logOut from '../../assets/img/logOut.svg';
import ArrowRight from '../../assets/img/arrow-right.svg';
import logo from '../../assets/img/MainLogo.svg';
import profile from '../../assets/img/profile.svg';
import { ipcRenderer } from 'electron';

const Settings = (props: any) => {
  const [progress, setProgress] = useState('23');

  const { theme, setTheme } = useContext(ThemeContext);

  function handleSelect(color: any) {
    setTheme(color);
  }

  const logout = () => {
    ipcRenderer.send('logout');
  };

  return (
    <div className={'w-100 ' + theme + 'innerBackground settings'}>
      <div
        className={
          'flex items-center justify-between ' + theme + 'tasks__header'
        }
      >
        <div
          className={
            'taskTitle font-Gilroy-Bold font-13 ' + theme + 'text-white'
          }
        >
          Settings
        </div>
        <div
          className={
            'search__task font-Gilroy-Bold font-10 ' +
            theme +
            'text-gray flex items-center'
          }
        >
          <div
            className={
              'active flex justify-center text-center cursor-pointer logout-color ' +
              theme
            }
            onClick={logout}
          >
            <div className="mr-1">Log Out</div>
            <img src={logOut} alt="search" />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-3 w-100">
        <div
          className={
            ' overflow-y-scroll h-full mb-auto w-50 ' +
            theme +
            'innerBackground setting__content_left'
          }
        >
          <div className="block setting__content">
            <div className="flex items-center justify-between openDashboard">
              <div
                className={
                  'LogInUser ' + theme + 'text-white font-Gilroy-Bold font-13'
                }
              >
                Boss-1#8087
              </div>
              <div className="flex items-center">
                <div className="font-Gilroy-Bold font-10 text-blue">
                  Open Dashboard
                </div>
                <img src={ArrowRight} alt="arrowRight" />
              </div>
            </div>
            <div className={theme + 'middleLine'}></div>
            <div className="flex items-center justify-between">
              <div className="block">
                <div
                  className={'font-Gilroy-Bold font-10 ' + theme + 'text-gray'}
                >
                  License Key
                </div>
                <div
                  className={'font-Gilroy-Bold font-13 ' + theme + 'text-white'}
                >
                  XXX-XXXX-XXXX-XXXX
                </div>
              </div>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className={'flex items-center ' + theme + 'loggedFooter'}>
            <img src={profile} alt="profile" />
            <div className={theme + 'progress'}>
              <div
                className="filler"
                style={{ width: `${progress}%`, height: '6px' }}
              />
            </div>
            <div className="flex items-center">
              <span className="text-green font-10 font-Gilroy-Bold">
                23 Days &nbsp;
              </span>
              <span className={theme + 'text-gray font-10 font-Gilroy-Bold'}>
                / next charge
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            'setting__content_right overflow-y-scroll h-full mb-auto w-50  '
          }
        >
          <div
            className={
              'block ' +
              theme +
              'bg-task ' +
              theme +
              'border-task  setting__webhook border-radius-5'
            }
          >
            <div className="flex items-center justify-between mb-4">
              <div className={theme + 'text-white font-13 font-Gilroy-Bold '}>
                Discord Webhook
              </div>
              <div className="flex items-center">
                <div className="font-Gilroy-Bold font-10 text-green mr-1">
                  Test Webhooks
                </div>
                <img src={ArrowRight} alt="arrowRight" />
              </div>
            </div>
            <div className={theme + 'middleLine'}></div>
            <div className="block w-100 mt-3 mb-3">
              <input
                type="text"
                name="Success"
                placeholder="Success Webhook"
                className={
                  'successWebhook font-Gilroy-Bold font-10 ' +
                  theme +
                  'text-gray ' +
                  theme +
                  'innerBackground'
                }
              />
            </div>
            <div className="block w-100 mb-4">
              <input
                type="text"
                name="Success"
                placeholder="Enter License Key"
                className={
                  'enter font-Gilroy-Bold font-10 ' +
                  theme +
                  'text-gray ' +
                  theme +
                  'innerBackground'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-3 w-100">
        <div
          className={
            ' overflow-y-scroll h-full mb-auto w-50 ' +
            theme +
            'innerBackground setting__content_left'
          }
        >
          <div className="block setting__content">
            <div className="flex items-center justify-between openDashboard mt-3">
              <div
                className={
                  'LogInUser ' +
                  theme +
                  'text-white font-Gilroy-Bold font-13 mb-4'
                }
              >
                Change Theme
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div
                className={
                  theme == 'dark'
                    ? 'block ' +
                      theme +
                      'bg-task themeChange border-radius-5 cursor-pointer activetask'
                    : 'block ' +
                      theme +
                      'bg-task themeChange border-radius-5 cursor-pointer'
                }
                onClick={() => handleSelect('dark')}
              >
                <div
                  className={
                    theme +
                    'text-white font-11 font-Gilroy-Bold text-center themeColor'
                  }
                >
                  Dark Theme
                </div>
                <div
                  className={
                    theme == 'dark'
                      ? theme + 'middleLine activeline'
                      : theme + 'middleLine'
                  }
                ></div>
                <div className={theme + 'text-gray font-11 font-Gilroy-Bold'}>
                  {theme == 'dark' ? 'Selected' : 'Click to select'}
                </div>
              </div>
              <div
                className={
                  theme == 'light'
                    ? 'block ' +
                      theme +
                      'bg-task themeChange border-radius-5 cursor-pointer activetask'
                    : 'block ' +
                      theme +
                      'bg-task themeChange border-radius-5 cursor-pointer'
                }
                onClick={() => handleSelect('light')}
              >
                <div
                  className={
                    theme +
                    'text-white font-11 font-Gilroy-Bold text-center themeColor'
                  }
                >
                  Light Theme
                </div>
                <div
                  className={
                    theme == 'light'
                      ? theme + 'middleLine activeline'
                      : theme + 'middleLine'
                  }
                ></div>
                <div className={theme + 'text-gray font-11 font-Gilroy-Bold'}>
                  {theme == 'light' ? 'Selected' : 'Click to select'}
                </div>
              </div>
              <div
                className={
                  theme == ''
                    ? 'block ' +
                      theme +
                      'bg-task themeChange border-radius-5 cursor-pointer activetask'
                    : 'block ' +
                      theme +
                      'bg-task themeChange border-radius-5 cursor-pointer'
                }
                onClick={() => handleSelect('')}
              >
                <div
                  className={
                    theme +
                    'text-white font-11 font-Gilroy-Bold text-center themeColor'
                  }
                >
                  Blue Theme
                </div>
                <div
                  className={
                    theme == ''
                      ? theme + 'middleLine activeline'
                      : theme + 'middleLine'
                  }
                ></div>
                <div className={theme + 'text-gray font-11 font-Gilroy-Bold'}>
                  {theme == '' ? 'Selected' : 'Click to select'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            'setting__content_right overflow-y-scroll h-full mb-auto w-50  '
          }
        >
          <div
            className={
              'block ' +
              theme +
              'bg-task ' +
              theme +
              'border-task  setting__webhook border-radius-5'
            }
          >
            <div className="flex items-center justify-between mb-4">
              <div className={theme + 'text-white font-13 font-Gilroy-Bold '}>
                Captcha API Keys
              </div>
              <div className="flex items-center">
                <div className="font-Gilroy-Bold font-10 text-blue mr-1">
                  Open Guide
                </div>
                <img src={ArrowRight} alt="arrowRight" />
              </div>
            </div>
            <div className={theme + 'middleLine'}></div>
            <div className="block w-100 mt-3 mb-3">
              <input
                type="text"
                name="captcha"
                placeholder="2captcha"
                className={
                  'successWebhook font-Gilroy-Bold font-10 ' +
                  theme +
                  'text-gray ' +
                  theme +
                  'innerBackground'
                }
              />
            </div>
            <div className="block w-100 mb-4">
              <input
                type="text"
                name="Success"
                placeholder="Capmonster"
                className={
                  'enter font-Gilroy-Bold font-10 ' +
                  theme +
                  'text-gray ' +
                  theme +
                  'innerBackground'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={theme + 'innerBackground text-center settingFooter'}>
        <div className={theme + 'text-white font-13 font-Gilroy-Bold  thanks'}>
          Thanks for using VelocityAIO !
        </div>
        <div className={theme + 'text-gray font-11 font-Gilroy-Bold mt-3'}>
          All Rights reserved © 2021{' '}
        </div>
      </div>
    </div>
  );
};

export default Settings;
