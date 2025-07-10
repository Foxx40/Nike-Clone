import React from "react";
import Button from "./Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-ful max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="   font-palanquin text-4xl capitalize font-bold lg-max-w-lg">
          We Provide you <span className="text-coral-red  "> Super </span>{" "}
          <br />
          <span className="text-coral-red  "> Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          A legendary football shoe that has grown to become an icon of
          streetwear fashion, the Samba line has stood the test of time. First
          coming to prominence as an indoor trainer, the sleek,
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        
          dedicated clothing and sport-specific styles also available.
        </p>
        <div className="mt-11">
 <Button label="Veiw Detials"/>
        </div>
       
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8"
        width={570}
        height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
