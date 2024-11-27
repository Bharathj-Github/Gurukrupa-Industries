"use client"
import { animate, animations, motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 font-medium text-[1.5rem] sm:text-[3rem] overflow-hidden relative">
        <div className="inline-block max-w-[37rem] text-center justify-center sm:leading-[3.3rem] leading-[2rem] max-sm:font-bold max-sm:pt-[40%] pt-16 relative z-30 ">
          <span className="">We make&nbsp;</span>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          Quality&nbsp;Boxes
          </span>
          <br />
          <span className="">Built to Protect, Designed to Impress.</span>
          <div className="sm:text-[1rem] text-[0.7rem]">
            Boxing Up Quality, Crafted for Your Every Need.
          </div>
          <motion.div className="flex justify-center h-[40vh] max-sm:pb-[6rem] ">
            <Image
              src={"Asset1.svg"}
              alt="Box1"
              width={400}
              height={0}
              className="max-sm:w-[12rem] relative z-[2] w-[20vw] "
            />
          </motion.div>
        </div>

        <div className="h-full w-full absolute ">
        <motion.div animate={{ y: [-80,0]}} transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "easeInOut"
      }} className="relative z-20">
            <Image
              src={"/Asset3.svg"}
              alt="Box3"
              width={400}
              height={0}
              className="absolute sm:top-[18vh] right-2 sm:right-5 max-sm:hidden w-[20vw]"
            />
        </motion.div>
        <Image
              src={"Asset4.svg"}
              alt="Box3"
              width={100}
              height={0}
              className="absolute sm:top-[65vh] right-2 sm:right-0 max-sm:w-[20rem] max-sm:bottom-[-0.5rem] w-[20vw] z-10"
            />
          <Image
            src={"Asset2.svg"}
            alt="Box2"
            width={400}
            height={0}
            className="absolute top-[0rem] left-0 max-sm:w-[13.5rem] z-20"
          />
          <Image
            src={"/blurry.svg"}
            alt="blurry"
            width={600}
            height={0}
            className="absolute sm:top-[-15rem] top-[-5rem] right-[-5rem] max-sm:w-[20rem] z-10"
          />
          <Image
            src={"blurry.svg"}
            alt="blurry"
            width={600}
            height={0}
            className="absolute sm:hidden top-[15rem] left-[-11rem] max-sm:w-[20rem]"
          />
          <Image
            src={"roll.svg"}
            alt="Box1"
            width={2000}
            height={0}
            className="sm:bottom-[-4rem] sm:top-[24rem] absolute left-0  bottom-0 max-sm:scale-150 max-sm:left-[6rem] max-sm:bottom-[-6rem] max-sm:hidden"
          />
        </div>
      </div>

      {/* <div className="h-[5rem] "></div> */}
      <div className="bg-[#006FEE] flex justify-center pb-10">
        <div className="relative">

        <Image
          src={"/home.svg"}
          alt="layout"
          width={50000}
          height={0}
          className="relative sm:w-[50vw] w-[80vh]"
          />
          {/* <Image
          src={"/homebox1.png"}
          alt="Box1"
          width={500}
          height={0}
          className="absolute w-[10rem] bottom-2 left-[5rem]"
        /> */}
          </div>
        
      </div>
    </div>
  );
}
