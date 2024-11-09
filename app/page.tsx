import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 font-medium text-[1.5rem] sm:text-[3rem] overflow-hidden relative">
      <div className="inline-block max-w-xl text-center justify-center sm:leading-[3rem] leading-[2rem] max-sm:font-bold max-sm:pt-[40%] pt-16 relative z-10 ">
        <span className="">We make&nbsp;</span>
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          Beautiful&nbsp;Boxs
        </span>
        <br />
        <span className="">Built to Protect, Designed to Impress.</span>
        <div className="sm:text-[1rem] text-[0.7rem]">
          Boxing Up Quality, Crafted for Your Every Need.
        </div>
        <div className="flex justify-center h-[40vh] max-sm:pb-[6rem]">
        <Image
          src={"Asset1.svg"}
          alt="Box1"
          width={400}
          height={0}
          className="max-sm:w-[12rem] relative z-[2] w-[20vw] "
          />
          </div>
      </div>

      <div className="h-full w-full absolute">
      <Image
          src={"Asset3.svg"}
          alt="Box3"
          width={400}
          height={0}
          className="absolute sm:top-[25vh] right-2 sm:right-5 max-sm:w-[12rem] max-sm:bottom-[-0.1rem] z-[2] w-[21vw]"
        />
        <Image
          src={"Asset2.svg"}
          alt="Box2"
          width={400}
          height={0}
          className="absolute top-[0rem] left-0 max-sm:w-[13.5rem] z-[2]"
        />
        <Image
          src={"/blurry.svg"}
          alt="blurry"
          width={600}
          height={0}
          className="absolute sm:top-[-15rem] top-[-5rem] right-[-5rem] max-sm:w-[20rem]"
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
        className="sm:bottom-[-4rem] sm:top-[24rem] absolute left-0  bottom-0 max-sm:scale-150 max-sm:left-[6rem] max-sm:bottom-[-6rem]"
      />
        
      </div>

    </div>

    {/* <div className="h-[5rem] "></div> */}
    <div className="bg-[#006FEE] flex justify-center pb-10">
    <Image
        src={"/home.svg"}
        alt="Box1"
        width={500}
        height={0}
        className="relative sm:w-[50vw] w-[80vh]"
         /> 
    </div>
    </div>
  );
}
 