import React, { useState, useContext } from 'react';
import Logo from '../../assets/img/MainLogo.svg';
import ArrowRightGray from '../../assets/img/arrow-right-gray.svg';
import profile from '../../assets/img/profile.svg';
import Failure from '../../assets/img/Failure.svg';
import decline from '../../assets/img/decline.svg';
import cart from '../../assets/img/Total.svg';
import searchimg from '../../assets/img/search.svg';
import productImg from '../../assets/img/product.svg';
import log from '../../assets/img/log.svg';
import Buy from '../../assets/img/Buy-white.svg';
import ThemeContext from '../Context/ThemeContext';

import Tabs from './Tabs';
import Tab from './Tabs/Tab';
export function Dashboard() {
  const [progress, setProgress] = useState('23');
  // const [search, setSearch] = useState('');
  const { theme } = useContext(ThemeContext);

  const product = [
    {
      id: 1,
      product: productImg,
      site: 'Walmart',
      productName: 'Nike SB Dunk Low Pro Blue Fury',
      profile: 'Test Profile 1',
      size: 'US 8.5',
      data: 'August 14th, 2021',
    },
    {
      id: 2,
      product: productImg,
      site: 'Walmart',
      productName: 'Nike SB Dunk Low Pro Blue Fury',
      profile: 'Test Profile 1',
      size: 'US 8.5',
      data: 'August 14th, 2021',
    },
    {
      id: 3,
      product: productImg,
      site: 'Walmart',
      productName: 'Nike SB Dunk Low Pro Blue Fury',
      profile: 'Test Profile 1',
      size: 'US 8.5',
      data: 'August 14th, 2021',
    },
    {
      id: 4,
      product: productImg,
      site: 'Walmart',
      productName: 'Nike SB Dunk Low Pro Blue Fury',
      profile: 'Test Profile 1',
      size: 'US 8.5',
      data: 'August 14th, 2021',
    },
    {
      id: 5,
      product: productImg,
      site: 'Walmart',
      productName: 'Nike SB Dunk Low Pro Blue Fury',
      profile: 'Test Profile 1',
      size: 'US 8.5',
      data: 'August 14th, 2021',
    },
  ];
  return (
    <div className="flex items-center dashboard  p-6 w-100">
      <div className="leftPart w-70 h-screen block">
        <div className="flex justify-between btnGap">
          <div className="w-60">
            <div className={"flex items-center "+theme+"loggedPart"}>
              <img src={Logo} alt="logo" />
              <div className={"block "+theme+"loggedWelcome"}>
                <div className="welcome flex items-center">
                  <span className="font-Gilroy-Bold font-10 welcomeback">
                    Welcome back,
                  </span>
                  <span
                    className={
                      'font-Gilroy-Bold font-13 ' +
                      theme +
                      'text-white welcomeuser'
                    }
                  >
                    Boss-1#8087
                  </span>
                </div>
                <div className=" flex items-cener btnGap mt-2">
                  <img src={ArrowRightGray} alt="" />
                  <span className="subText font-Gilroy-Bold font-10">
                    Lorem ipsum dolor sit amet, consetetur{' '}
                  </span>
                </div>
                <div className=" flex items-cener btnGap">
                  <img src={ArrowRightGray} alt="" />
                  <span className="subText font-Gilroy-Bold font-10">
                    sadipscing elitr, sed diam non ...
                  </span>
                </div>
                <div className="flex items-center justify-between btnGap mt-3">
                  <button className={"btn font-11 font-Gilroy-Bold "+theme+"text-btn dashBtn"}>
                    Dashboard
                  </button>
                  <button className={"btn font-11 font-Gilroy-Bold "+theme+"text-btn guidBtn"}>
                    Guides
                  </button>
                </div>
              </div>
            </div>
            <div className={"flex items-center "+theme+"loggedFooter"}>
              <img src={profile} alt="profile" />
              <div className={theme+"progress"}>
                <div
                  className="filler"
                  style={{ width: `${progress}%`, height: '6px' }}
                />
              </div>
              <div className="flex items-center">
                <span className="text-green font-10 font-Gilroy-Bold">
                  23 Days
                </span>
                <span className={theme + 'text-gray font-10 font-Gilroy-Bold'}>
                  next charge
                </span>
              </div>
            </div>
          </div>
          <div className="w-40 TotalSpent   ">
            <div
              className={
                'text-center flex justify-center ' +
                theme +
                'text-white font-13 font-Gilroy-Bold '
              }
            >
              Total Spent
            </div>
            <div className="flex justify-center text-center text-green font-13 font-Gilroy-Bold mt-3 custom-dashboard">
              +180$ Today
            </div>

            <div className="flex justify-center text-center mt-5">
              <img src={cart} alt="cart" />
            </div>
            <div className="border"></div>
            <div
              className={
                'flex justify-center text-center ' +
                theme +
                'text-white font-18 font-Gilroy-Bold mt-5'
              }
            >
              3400$
            </div>
          </div>
        </div>
        <div className={theme+"lastCheckout mt-5"}>
          <div className={"flex items-center justify-between "+theme+"latestCheckoutHeader"}>
            <span
              className={'font-Gilroy-Bold font-13 ' + theme + 'text-white'}
            >
              Latest Checkouts
            </span>
            <div className="flex items-center ">
              <span className={theme + 'text-gray font-12 font-Gilroy-Bold'}>
                Search Checkout
              </span>
              <div className="flex items-center searchPart">
                {/* <input type="text" value={search} name="search" /> */}
                <img src={searchimg} alt="search" />
              </div>
            </div>
          </div>
          <div className={"grid "+theme+"checkProductHeader items-center"}>
            <div
              className={
                theme +
                'text-gray font-Gilroy-Bold font-10 text-center flex justify-center '
              }
            >
              Site
            </div>
            <div
              className={
                theme +
                'text-gray font-Gilroy-Bold font-10 text-center flex justify-center '
              }
            >
              Product
            </div>
            <div
              className={
                theme +
                'text-gray font-Gilroy-Bold font-10 text-center flex justify-center '
              }
            >
              Profile
            </div>
            <div
              className={
                theme +
                'text-gray font-Gilroy-Bold font-10 text-center flex justify-center '
              }
            >
              Size
            </div>
            <div
              className={
                theme +
                'text-gray font-Gilroy-Bold font-10 text-center flex justify-center '
              }
            >
              Date
            </div>
          </div>
          <div className="grid checkoutProduct items-center">
            {product.map((item) => (
              <div className={"grid items-center "+theme+"productContent"} key={item.id}>
                <div
                  className={
                    'flex items-center font-Gilroy-Bold justify-center font-11 ' +
                    theme +
                    'text-white btnGap'
                  }
                >
                  <img src={item.product} alt="" />
                  <span>{item.site}</span>
                </div>
                <div className="text-blue font-Gilroy-Bold font-10 text-center flex justify-center ">
                  {item.productName}
                </div>
                <div
                  className={
                    theme +
                    'text-white font-Gilroy-Bold font-10 text-center flex justify-center '
                  }
                >
                  {item.profile}
                </div>
                <div className="text-green font-Gilroy-Bold font-10 text-center flex justify-center ">
                  {item.size}
                </div>
                <div
                  className={
                    theme +
                    'text-gray font-Gilroy-Bold font-10 text-center flex justify-center '
                  }
                >
                  {item.data}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="TotalPart w-30 block">
        <div className={theme+"totalCheckoutDashboard"}>
          <div className="flex justify-between items-center mb-5">
            <div className="block">
              <div className="totalCheckoutTitle">Total Checkouts</div>
              <div className="todayTitle mt-2">+3 Today</div>
            </div>
            <div className="checkout-cart">
              <img src={Buy} alt="cart" />
            </div>
          </div>
          <Tabs>
            <Tab title="All">432</Tab>
            <Tab title="Weekly">500</Tab>
            <Tab title="Monthly">600</Tab>
          </Tabs>
        </div>
        <div className={theme+"totalFailures"}>
          <div className="flex justify-between items-center mb-5">
            <div className="block">
              <div className="totalFailureTitle">Total Failures</div>
              <div className="todayTitle mt-2">+16 Today</div>
            </div>
            <div className="checkout-cart">
              <img src={Failure} alt="cart" />
            </div>
          </div>
          <Tabs>
            <Tab title="All">432</Tab>
            <Tab title="Weekly">500</Tab>
            <Tab title="Monthly">600</Tab>
          </Tabs>
        </div>
        <div className={theme+"totalDeclines"}>
          <div className="flex justify-between items-center mb-5">
            <div className="block">
              <div className="totalDeclineTitle">Total Declines</div>
              <div className="todayTitle mt-2">+35 Today</div>
            </div>
            <div className="checkout-cart">
              <img src={decline} alt="cart" />
            </div>
          </div>
          <Tabs>
            <Tab title="All">432</Tab>
            <Tab title="Weekly">500</Tab>
            <Tab title="Monthly">600</Tab>
          </Tabs>
        </div>
        <div className={theme+"updatediscord"}>
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <div
                className={
                  'update ' + theme + 'text-white font-Gilroy-Bold font-11 '
                }
              >
                Update
              </div>
              <div className="available text-green font-Gilroy-Bold font-10">
                available !
              </div>
            </div>
            <div className="checkout-cart flex items-center">
              <img src={log} alt="cart" />
              <div className="flex items-center font-Gilroy-Bold font-10">
                <div className="update text-blue ">Logs</div>
                <div className={'available ' + theme + 'text-white '}>
                  posted in Discord
                </div>
              </div>
            </div>
          </div>
          <div className="updateBorder"></div>
          <div className="flex items-center justify-center btnGap">
            <button className="btn updateBtn text-blue font-Gilroy-Bold font-11 ">
              Version 2.0{' '}
            </button>
            <button className={"btn "+theme+"downloadBtn font-Gilroy-Bold font-11 "}>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
