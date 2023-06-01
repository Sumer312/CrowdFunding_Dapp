import React, { useEffect, useState } from "react";
import { thirdweb } from "../assets";
import { daysLeft } from "../utils";
import useThemeStore from "./themeStore/themeStore";
import {} from "react-icons/fc";

const FundCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);
  const theme = useThemeStore((state) => state.theme);
  const [stateTheme, setStateTheme] = useState(theme);
  useEffect(() => {
    setStateTheme(theme);
  }, [theme]);

  return (
    <div
      className={
        "sm:w-[288px] w-full rounded-[15px]" +
        (stateTheme === 1
          ? " bg-zinc-800 hover:bg-purple-800"
          : " bg-zinc-100 hover:bg-amber-400") +
        " cursor-pointer"
      }
      onClick={handleClick}
    >
      <img
        src={image}
        alt='fund'
        className='w-full h-[158px] object-cover rounded-[15px]'
      />

      <div className='flex flex-col p-4'>
        <div className='flex flex-row items-center mb-[18px]'></div>

        <div className='block'>
          <h3 className='font-epilogue font-bold text-[18px]  text-left leading-[26px] truncate'>
            {title}
          </h3>
          <p className='mt-[5px] font-epilogue font-normal  text-left leading-[18px] truncate'>
            {description}
          </p>
        </div>

        <div className='flex justify-between flex-wrap mt-[15px] gap-2'>
          <div className='flex flex-col'>
            <h4 className='font-epilogue font-semibold text-[14px]  leading-[22px]'>
              {amountCollected}
            </h4>
            <p className='mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] sm:max-w-[120px] truncate'>
              Raised of {target}
            </p>
          </div>
          <div className='flex flex-col'>
            <h4 className='font-epilogue font-bold text-[14px] leading-[22px]'>
              {remainingDays}
            </h4>
            <p className='mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] sm:max-w-[120px] truncate'>
              Days Left
            </p>
          </div>
        </div>

        <div className='flex items-center mt-[20px] gap-[12px]'>
          <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]'>
            <img
              src={thirdweb}
              alt='user'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <p className='flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate'>
            by <span className='text-[#b2b3bd]'>{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
