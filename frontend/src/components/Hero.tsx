import { FC } from "react";
import { IconLabel } from "./IconLabel";
import { HeroProps } from "@/types";

export const Hero: FC<HeroProps> = ({ product }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 
        bg-gradient-to-t 
        from-black via-black to-transparent 
        bg-[linear-gradient(0deg,_#2A2D2C_0.09%,_rgba(42,_45,_44,_0)_59.97%)] 
        bg-cover bg-center bg-no-repeat
        bg-hero-xs
        sm:bg-hero-sm
        md:bg-hero-md
        lg:bg-hero-lg"
      />

      <div className="absolute bottom-0 left-0 right-0 inline-flex flex-col justify-start items-start">
        <div className="mx-4 sm:mx-8 mb-3 sm:mb-[1.62rem] max-w-[59rem]">
          <h1 className="text-white text-[2rem] sm:text-[3rem] font-extrabold font-sans leading-9 sm:leading-[3.375rem] tracking-[-0.04rem] mb-6 sm:mb-[1.62rem] uppercase">
            {product.name}
          </h1>
          <div className="flex gap-6 flex-wrap">
            <IconLabel icon="location" label={product.location} />
            <IconLabel
              icon="duration"
              label={`${product.duration.toString()} nights`}
            />
            <IconLabel icon="difficulty" label={product.difficulty} />
          </div>
        </div>

        <div className="bg-black sm:bg-transparent w-screen px-4 sm:px-8 pt-3 sm:pt-0">
          <p className="text-white font-serif sm:text-[1.5rem] leading-[1.375rem] sm:leading-[1.875rem] tracking-[-0.02rem] sm:tracking-[-0.03rem] pb-10 sm:pb-12 max-w-[59rem]">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};
