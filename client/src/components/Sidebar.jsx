import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useThemeStore from "./themeStore/themeStore.jsx";
import { TiArrowBack } from "react-icons/ti";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { RiDashboardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const navigate = useNavigate();
  const theme = useThemeStore((state) => state.theme);
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const [stateTheme, setStateTheme] = useState(theme);

  useEffect(() => {
    setStateTheme(theme);
  }, [theme]);

  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
      <button onClick={() => navigate(-1)}>
        <TiArrowBack size='2rem' className='text-purple-500' />
      </button>

      <div
        className={
          "flex-1 flex flex-col justify-between items-center outline outline-3" +
          (stateTheme === 1
            ? " bg-zinc-800 outline-rose-50"
            : " bg-zinc-100 outline-slate-800") +
          " rounded-[20px] w-[76px] py-4 mt-12"
        }
      >
        <div className='flex flex-col justify-center items-center gap-6'>
          <button
            type='submit'
            className='focus:text-amber-500'
            onClick={() => navigate("/")}
          >
            <RiDashboardFill size='1.5rem' />
          </button>
          <button
            type='submit'
            className='focus:text-amber-500'
            onClick={() => navigate("/create-campaign")}
          >
            <HiSpeakerphone size='1.5rem' />
          </button>
          <button
            type='submit'
            className='focus:text-amber-500'
            onClick={() => navigate("/profile")}
          >
            <CgProfile size='1.5rem' />
          </button>
        </div>
        <a onClick={changeTheme} className='cursor-pointer'>
          {stateTheme === 1 ? (
            <FaSun size='1.5rem' />
          ) : (
            <FaMoon size='1.5rem' className='text-black' />
          )}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
