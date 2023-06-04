import { useEffect, useState } from "react";
import useThemeStore from "./themeStore/themeStore";
import {
  SiReact,
  SiEthereum,
  SiTailwindcss,
  SiSolidity,
  SiGit,
  SiVite,
  SiHtml5,
  SiGithub,
} from "react-icons/si";
import { GiFox } from "react-icons/gi";
import { FaHardHat } from "react-icons/fa";

const Footer = () => {
  const theme = useThemeStore((state) => state.theme);
  const [stateTheme, setStateTheme] = useState(theme);

  useEffect(() => setStateTheme(theme), [theme]);

  return (
    <footer
      aria-label='Site Footer'
      className={"mt-12 " + (stateTheme === 1 ? "bg-zinc-900" : "bg-zinc-100")}
    >
      <div className='max-w-screen-xl px-4 py-12 space-y-8 sm:px-6 lg:space-y-16 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div className='grid grid-cols-1'>
            <img
              src='https://img.icons8.com/?size=512&id=64633&format=png'
              alt='logo'
              width='180'
              height='128'
            />
            <a href='https://github.com/Sumer312/CrowdFunding_Dapp'>
              <SiGithub
                size='5rem'
                className='ml-8 cursor-pointer hover:text-purple-500'
              />
            </a>
          </div>
          <div className='grid grid-cols-1 gap-16 xl:gap-x-96 xl:ml-96 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
            <div className="xl:ml-56">
              <p className='font-extrabold'>Frontend</p>
              <nav aria-label='Footer Navigation - Services' className='mt-6'>
                <ul className='space-y-4 text-sm'>
                  <li>
                    <a href='#' className='transition hover:opacity-75'>
                      <SiReact size='1.5rem' /> React
                    </a>
                  </li>
                  <li>
                    <a href='#' className=' transition hover:opacity-75'>
                      <SiEthereum size='1.5rem' /> Ethers
                    </a>
                  </li>
                  <li>
                    <a href='#' className=' transition hover:opacity-75'>
                      <SiTailwindcss size='1.5rem' />
                      TailwindCSS
                    </a>
                  </li>
                  <li>
                    <a href='#' className='transition hover:opacity-75'>
                      <SiHtml5 size='1.5rem' /> HTML
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="xl:ml-28">
              <p className='font-extrabold'>Web3</p>
              <nav aria-label='Footer Navigation - Company' className='mt-6'>
                <ul className='space-y-4 text-sm'>
                  <li>
                    <a href='#' className=' transition hover:opacity-75'>
                      <SiSolidity size='1.5rem' /> Solidity
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className='font-extrabold'>Tools</p>
              <nav aria-label='Footer Navigation - Company' className='mt-6'>
                <ul className='space-y-4 text-sm'>
                  <li>
                    <a href='#' className=' transition hover:opacity-75'>
                      <GiFox size='1.5rem' /> MetaMask
                    </a>
                  </li>
                  <li>
                    <a href='#' className=' transition hover:opacity-75'>
                      <FaHardHat size='1.5rem' /> HardHat
                    </a>
                  </li>
                  <li>
                    <a href='#' className=' transition hover:opacity-75'>
                      <SiGit size='1.5rem' /> Git
                    </a>
                  </li>
                  <li>
                    <a href='#' className=' transition hover:opacity-75'>
                      <SiVite size='1.5rem' /> Vite
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
