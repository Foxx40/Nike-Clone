import React from "react";
import { offer } from "../assets/images";
import Button from "./Button";


const SpecialOffer = () => {
  return (
    <section className=" flex justify-center flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img
          src={offer}
          alt="offerImg"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="   font-palanquin text-4xl capitalize font-bold ">
          <span className="text-coral-red  "> Special </span> 
          Offer
        </h2>
        <p className="mt-4  info-text">
          Greatness doesn’t wait — and neither should you. Nike’s special offer
          is here to help you elevate your performance without stretching your
          budget.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          This isn’t just a sale — it’s your chance to gear up like the pros.
          Shop now and step into your next win with Nike{" "}
        </p>
        <div className="mt-11 flex gap-4 flex-wrap">
          <Button label="Shop Now"  />
         <Button label='Learn More' backgroundColor='bg-white' borderColor= "border-slate-gray" textColor='text-slate-gray' />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
