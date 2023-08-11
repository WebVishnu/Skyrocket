import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className=" mx-auto max-w-[1300px] xl:w-[1300px] px-[1.5em] mt-28">
      <div className="animate-pulse flex justify-between lg:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 w-full mx-5">
          <div class="bg-slate-300 h-10 w-full rounded-lg"></div>
          <div class="bg-slate-300 h-10 w-full mt-5 rounded-lg"></div>
          <div class="bg-slate-300 h-8 w-full mt-5 rounded-lg"></div>
        </div>
        <div className="lg:w-1/2 w-full mx-5 lg:mt-0 mt-5">
          <div class="bg-slate-300 h-10 w-full rounded-lg"></div>
          <div class="bg-slate-300 h-10 w-full mt-5 rounded-lg"></div>
          <div class="bg-slate-300 h-10 w-full mt-5 rounded-lg"></div>
          <div class="bg-slate-300 h-10 w-full mt-5 rounded-lg"></div>
          <div class="bg-slate-300 h-10 w-full mt-5 rounded-lg"></div>
          <div class="bg-slate-300 h-28 w-full mt-5 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
