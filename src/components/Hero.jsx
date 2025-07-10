import React from "react";
import Button from "./Button";
import { arrowRight } from "../assets/icons";
import {shoes , statistics } from "../contants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "./ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [BigShoe, setBigShoe] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col gap-10 max-container min-h-screen  "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className=" mt-10  font-palanquin text-8xl font-bold max-sm:text-[72px]  max-sm:leading-[82px] ">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10 relative">
            The New Arrival
          </span>
          <br  className=""/>{" "}
          <span className="text-coral-red mt-6 inline-block "> Nike </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mb-14 mt-6 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-center w-full mt-20 gap-16 ">
          {statistics.map((stat, index) => (
            <div key={index} className="">
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center
       items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero ">
        <img
          src={BigShoe}
          alt=""
          width={610}
          height={500}
          className="object-contain relative z-10 "
        />
         <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {
          shoes.map((shoe , index) => (
            <div key={index}>
              <ShoeCard imgUrl ={shoe} 
               changeBigShoeImg={(s)=>setBigShoe(s)}
               BigShoe={BigShoe}
                />
            </div>
          ))
        }
      </div>
      </div>
     
    </section>
  );
};

export default Hero;
