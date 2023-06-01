import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";

import { useStateContext } from "../context";
import { CustomButton } from "./";
import { thirdweb } from "../assets";
import useThemeStore from "./themeStore/themeStore";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();
  const theme = useThemeStore((state) => state.theme);
  const [stateTheme, setStateTheme] = useState(theme);

  useEffect(() => {
    setStateTheme(theme);
  }, [theme]);

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div
        className={
          "lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px]" +
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
              ? "text-gray-900 text-gray-50"
              : "text-grey-100 text-rose-50") +
            " bg-transparent outline-none"
          }
        />

        <div className='w-[72px] h-full rounded-[20px] bg-purple-500 flex justify-center items-center cursor-pointer'>
          <RiSearch2Line size='1.5rem' />
        </div>
      </div>

      <div className='sm:flex hidden flex-row justify-end gap-4'>
        <CustomButton
          btnType='button'
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
        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <div className='flex mx-4'>
            <CustomButton
              btnType='button'
              title={address ? "Create a campaign" : "Connect"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
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
