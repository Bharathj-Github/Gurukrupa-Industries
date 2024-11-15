import React from 'react'
import Image from "next/image";

export default function CopyRight() {
  return (

      <div className="w-full sm:h-[86vh] flex max-sm:flex-col items-center justify-center gap-[10vw] sm:px-10">
        <Image
        src={"/blurry.svg"}
        alt="blurry"
        width={500}
        height={0}
        className="absolute sm:top-[-6rem] sm:left-[-7rem] max-sm:w-[20rem] left-[-10rem] top-[-5rem]"
      />
      <div className="flex flex-col gap-5 max-sm:pt-[10vh] items-center justify-center relative z-10">
        <div className='flex flex-col items-center justify-center'>
        <div className="sm:text-7xl text-2xl text-wrap uppercase sm:w-[30vw] max-sm:font-black font-bold">Copyright Reserved</div>
        <p className="h-[0.4rem] bg-primary-300 rounded-full w-[7rem] mt-1"></p>
        </div>
        <p className='max-sm:px-10 text-sm text-center'>Copyright © 2024 Gurukrupa Industries - All Rights Reserved</p>
      </div>
      <div>
        <Image
          src={"copyrightslogo.svg"}
          alt="Box1"
          width={400}
          height={0}
          className="max-sm:w-[90vw] relative z-[2] w-[35vw] "
        />
      </div>
    </div>

  )
}
