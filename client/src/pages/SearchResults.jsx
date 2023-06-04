import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const params = useParams();

  const { address, contract, getCampaignsByTitle } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaignsByTitle(params.title);
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract, params]);
  return (
    <>
      <DisplayCampaigns
        title='Results'
        isLoading={isLoading}
        campaigns={campaigns}
        message={'No campaigns with this title found'}
      />
    </>
  );
};

export default SearchResults;
