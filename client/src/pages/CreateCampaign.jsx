import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { CustomButton, FormField, Loader } from "../components";
import { checkIfImage } from "../utils";
import useThemeStore from "../components/themeStore/themeStore";
import { SiEthereum } from "react-icons/si";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useThemeStore((state) => state.theme);
  const [stateTheme, setStateTheme] = useState(theme);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  useEffect(() => {
    setStateTheme(theme);
  }, [theme]);

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };

  return (
    <div
      className={
        (stateTheme === 1
          ? "bg-black text-slate-50"
          : "bg-white text-slate-900") +
        " flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4"
      }
    >
      {isLoading && <Loader />}
      <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px]'>
        Start a Campaign
      </h1>

      <form
        onSubmit={handleSubmit}
        className='w-full mt-[65px] flex flex-col gap-[30px]'
      >
        <div className='flex flex-wrap gap-[40px]'>
          <FormField
            labelName='Your Name *'
            placeholder='John Doe'
            inputType='text'
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName='Campaign Title *'
            placeholder='Write a title'
            inputType='text'
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </div>

        <FormField
          labelName='Story *'
          placeholder='Write your story'
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />

        <div className='w-full flex justify-start items-center p-4 outline-dotted outline-violet-500 h-[120px] rounded-[10px]'>
          <SiEthereum size='3rem' />
          <h4 className='font-epilogue font-bold text-[25px] ml-[20px]'>
            You will get 100% of the raised amount
          </h4>
        </div>

        <div className='flex flex-wrap gap-[40px]'>
          <FormField
            labelName='Goal *'
            placeholder='ETH 0.50'
            inputType='text'
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          />
          <FormField
            labelName='End Date *'
            placeholder='End Date'
            inputType='date'
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </div>

        <FormField
          labelName='Campaign image *'
          placeholder='Place image URL of your campaign'
          inputType='url'
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        />

        <div className='flex justify-center items-center mt-[40px]'>
          <CustomButton
            btnType='submit'
            title='Submit new campaign'
            styles='outline-double outline-violet-500 hover:bg-amber-500'
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
