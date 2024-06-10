import React from "react";
import { Slider} from "../index";



const Testimonial = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center justify-center my-10">
      <h1 className="text-3xl md:text-5xl text-center font-semibold mb-3">
        What Our Customers Say
      </h1>
      <div className="w-3/5 flex flex-col md:flex-row items-center justify-center gap-5">
        <Slider />

      </div>
    </div>
  );
};

export default Testimonial;
