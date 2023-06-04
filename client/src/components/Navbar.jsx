import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiSearch2Line, RiCloseFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { RiDashboardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import { useStateContext } from "../context";
import { CustomButton } from "./";
import { thirdweb } from "../assets";
import useThemeStore from "./themeStore/themeStore";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const searchQ = useRef("");
  const { connect, address, getCampaignsByTitle } = useStateContext();
  const theme = useThemeStore((state) => state.theme);
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const [stateTheme, setStateTheme] = useState(theme);

  useEffect(() => {
    setStateTheme(theme);
  }, [theme]);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        searchQ.current !== "" && navigate(`/search/${searchQ.current}`);
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div
        className={
          "lg:flex-1 flex flex-row max-w-[458px] ml-16 -mt-11 xl:mt-0 xl:ml-0 py-2 pl-4 pr-2 h-[52px]" +
          (stateTheme === 1 ? " bg-slate-100" : " bg-slate-900") +
          " rounded-[100px]"
        }
      >
        <input
          type='text'
          placeholder='Search for campaigns'
          className={
            "flex w-full font-epilogue font-normal text-[14px] placeholder:" +
            (stateTheme === 1
              ? "text-gray-900 text-gray-900"
              : "text-grey-100 text-rose-50") +
            " bg-transparent outline-none"
          }
          onChange={(event) => {
            searchQ.current = event.target.value;
          }}
        />

        <button
          className='w-[72px] h-full rounded-[20px] bg-purple-500 flex justify-center items-center cursor-pointer hover:bg-purple-600'
          onClick={() => {
            console.log("click");
            searchQ.current !== "" && navigate(`/search/${searchQ.current}`);
          }}
        >
          <RiSearch2Line size='1.5rem' />
        </button>
      </div>

      <div className='sm:flex hidden flex-row justify-end gap-4'>
        <CustomButton
          btnType='submit'
          title={address ? "Create a campaign" : "Connect"}
          styles={
            "outline outline-violet-500" +
            (stateTheme === 1 ? " text-slate-100" : " text-slate-900") +
            " hover:bg-amber-500"
          }
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }}
        />

        <Link to='/profile'>
          <div className='w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
            <img
              src={thirdweb}
              alt='user'
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        </Link>
      </div>

      {/* Small screen navigation */}
      <div className='sm:hidden flex justify-between items-center relative'>
        <button
          className='-mb-4 mt-2 cursor-pointer'
          onClick={() => {
            setToggleDrawer(!toggleDrawer);
          }}
        >
          {toggleDrawer ? (
            <RiCloseFill size='2rem' color='red' />
          ) : (
            <HiMenu size='2rem' />
          )}
        </button>
        <div
          className={
            `absolute top-[60px] rounded-3xl right-0 left-0 bg-opacity-95 outline outline-3` +
            (stateTheme === 1
              ? " bg-black outline-white"
              : " bg-white outline-black") +
            ` z-10 shadow-secondary py-4 ${
              !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
            } transition-all duration-700`
          }
        >
          <div className='grid grid-cols-1 gap-10 mx-4'>
            <button
              type='submit'
              className='flex gap-8 focus:text-amber-500'
              onClick={() => navigate("/")}
            >
              <RiDashboardFill size='1.5rem' /> Dashboard
            </button>
            <button
              type='submit'
              className='flex gap-8 focus:text-amber-500'
              onClick={() => navigate("/create-campaign")}
            >
              <HiSpeakerphone size='1.5rem' /> Create Campaign
            </button>
            <button
              type='submit'
              className='flex gap-8 focus:text-amber-500'
              onClick={() => navigate("/profile")}
            >
              <CgProfile size='1.5rem' />
              Profile
            </button>
            <a onClick={changeTheme} className='cursor-pointer'>
              {stateTheme === 1 ? (
                <div className='flex gap-8'>
                  <FaSun size='1.5rem' /> Light
                </div>
              ) : (
                <div className='flex gap-8'>
                  <FaMoon size='1.5rem' className='text-black' /> Dark
                </div>
              )}
            </a>
            <CustomButton
              btnType='submit'
              title={address ? "Create a campaign" : "Connect"}
              styles={
                "outline outline-violet-500" +
                (stateTheme === 1 ? " text-slate-100" : " text-slate-900") +
                " hover:bg-amber-500"
              }
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connect();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
