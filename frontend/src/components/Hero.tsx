import { FC } from "react";
import { IconLabel } from "./IconLabel";

export const Hero: FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 
          bg-gradient-to-t 
          from-black via-black to-transparent 
          bg-[linear-gradient(0deg,_#2A2D2C_0.09%,_rgba(42,_45,_44,_0)_59.97%)] 
          bg-cover bg-center bg-no-repeat 
          bg-[url('/images/hero-image-sm.jpg')] 
          sm:bg-[url('/images/hero-image-sm.jpg')] 
          md:bg-[url('/images/hero-image-md.jpg')] 
          lg:bg-[url('/images/hero-image-lg.jpg')]"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[8.75rem] bg-black sm:h-0 sm:bg-transparent px-4 pt-3">
        <p className="text-white leading-[1.375rem] tracking-[-0.02rem] font-serif">
          Hike, bike and snorkel this unique archipelago and encounter its
          special wildlife, on an adventure immersed in the natural world
        </p>
      </div>

      <div className="absolute bottom-[9.5rem] sm:top-auto left-0 right-0 mx-4 inline-flex flex-col justify-start items-start gap-6 sm:gap=[1.62rem]">
        <h1 className="text-white text-[2rem] sm:text-[3rem] font-extrabold font-sans leading-9 sm:leading-[3.375rem] tracking-[-0.04rem]">
          ISLAND HOPPING ADVENTURE IN THE GALAPAGOS
        </h1>
        <div className="flex gap-6 flex-wrap">
          <IconLabel icon="location" label="Galapagos islands, Ecuador" />
          <IconLabel icon="duration" label="9 nights" />
          <IconLabel icon="difficulty" label="Easy" />
        </div>
      </div>
    </div>
  );
};
