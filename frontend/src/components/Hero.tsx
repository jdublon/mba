import { FC } from "react";
import { IconLabel } from "./IconLabel";
import { HeroProps } from "@/types";
import { TextBox } from "./TextBox";

export const Hero: FC<HeroProps> = ({ product }) => (
  <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-between">
    <div
      className="h-full flex flex-col justify-end
        bg-cover bg-center bg-no-repeat
        bg-hero-xs
        sm:bg-hero-sm
        md:bg-hero-md
        lg:bg-hero-lg
        sm:absolute sm:top-0 sm:bottom-0 sm:left-0 sm:right-0"
    >
      <div className="mx-4 sm:mx-8 max-w-[59rem]">
        <h1 className="text-white text-[2rem] sm:text-[3rem] font-extrabold font-sans leading-9 sm:leading-[3.375rem] tracking-[-0.04rem] mb-6 sm:mb-[1.62rem] uppercase">
          {product.name}
        </h1>

        <div className="flex gap-6 flex-wrap pb-3 sm:pb-0">
          <IconLabel icon="location" label={product.location} />
          <IconLabel
            icon="duration"
            label={`${product.duration.toString()} nights`}
          />
          <IconLabel icon="difficulty" label={product.difficulty} />
        </div>

        <div className="hidden sm:block">
          <TextBox
            text={product.description}
            textStyles="text-white font-serif text-[1.5rem] leading-[1.875rem] tracking-[-0.03rem] max-w-[59rem]"
            containerStyles="bg-transparent sm:w-auto pt-[1.62rem] pb-12"
          />
        </div>
      </div>
    </div>

    <div className="sm:hidden">
      <TextBox
        text={product.description}
        textStyles="text-white font-serif leading-[1.375rem] tracking-[-0.02rem] max-w-[59rem]"
        containerStyles="bg-black w-screen px-4 pt-3 pb-10"
      />
    </div>
  </div>
);
