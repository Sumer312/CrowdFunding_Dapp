import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className='grid grid-cols-1 gap-8'>
      <div className='place-self-center'>
        <h1 className='font-mono font-bold text-[24px]'>CrowdFunding DApp</h1>
        <img
          src='https://img.icons8.com/?size=512&id=64633&format=png'
          alt='logo'
          width='256'
          height='128'
        />
      </div>
      <DisplayCampaigns
        title='All Campaigns'
        isLoading={isLoading}
        campaigns={campaigns}
        message={'No campaigns here'}
      />
    </div>
  );
};

export default Home;
