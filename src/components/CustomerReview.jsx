import React from "react";
import { reviews } from "../contants";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text mt-4 m-auto max-w-lg text-center">
        Every step counts, and you deserve the best gear to match it. Unlock
        unbeatable style and performance with Nike today.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map((review)=>(
            <ReviewCard key={review.customerName} {...review}/>
          ))
        }
      </div>
    </section>
  );
};

export default CustomerReview;
