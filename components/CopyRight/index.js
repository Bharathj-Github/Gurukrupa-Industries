import React from 'react'
import Image from "next/image";

export default function CopyRight() {
  return (

      <div className="w-full sm:h-[82vh] flex max-sm:flex-col gap-[10vw] sm:px-10 sm:items-center sm:justify-center">
        <Image
        src={"/blurry.svg"}
        alt="blurry"
        width={500}
        height={0}
        className="absolute sm:top-[-6rem] sm:left-[-7rem] max-sm:w-[20rem] left-[-10rem] top-[-5rem]"
      />
      <div className="flex flex-col gap-5 items-center sm:justify-center relative z-10 max-sm:h-[84vh] max-sm:mt-[5rem]">
        <div className='flex flex-col items-center justify-center'>
        <div className="sm:text-7xl  text-2xl text-wrap uppercase max-sm:font-black font-bold">Copyright Reserved</div>
        <p className="h-[0.4rem] bg-primary-300 rounded-full w-[7rem] mt-1"></p>
        </div>
        <p className='max-sm:px-10 text-sm text-center'>Copyright © 2024 Gurukrupa Industries - All Rights Reserved</p>
      </div>

        <Image
          src={"watermark.svg"}
          alt="Box1"
          width={400}
          height={0}
          className="max-sm:w-[90vw] z-[2] w-[35vw] absolute bottom-0 right-0"
        />

    </div>


  )
}
