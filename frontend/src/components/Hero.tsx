import { FC } from "react";

export const Hero: FC = () => {
  return (
    <div className="relative w-full h-screen sm:h-[500px] overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 
          bg-gradient-to-t 
          from-black via-black to-transparent 
          bg-[linear-gradient(0deg,_#2A2D2C_0.09%,_rgba(42,_45,_44,_0)_59.97%)] 
          bg-cover bg-center bg-no-repeat 
          bg-[url('/images/hero-image-xs.jpg')] 
          sm:bg-[url('/images/hero-image-sm.jpg')] 
          md:bg-[url('/images/hero-image-md.jpg')] 
          lg:bg-[url('/images/hero-image-lg.jpg')]"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[8.75rem] bg-black sm:h-0 sm:bg-transparent" />

      <div className="absolute bottom-0 top-[23rem] left-0 right-0 mx-[1rem] pb-[2.5rem] inline-flex flex-col justify-start items-start gap-[1.5rem]">
        <h1 className="text-white text-4xl sm:text-5xl font-bold font-sans">
          ISLAND HOPPING ADVENTURE IN THE GALAPAGOS
        </h1>
        <p className="text-white text-lg sm:text-xl">
          Your subtitle or call to action.
        </p>
      </div>
    </div>
  );
};
