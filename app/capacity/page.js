"use client";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className=" h-[87vh] flex items-center justify-center relative">
      <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover blur-sm absolute h-screen w-screen"></div>
      <Image
        src={"/blurry.svg"}
        alt="blurry"
        width={700}
        height={0}
        className="absolute sm:top-[-26rem] sm:left-[-16rem] max-sm:w-[20rem] left-[-11rem] top-[-10rem]"
      />
      <div className="flex flex-col items-center sm:mx-10 relative z-10 bg-white/80 sm:text-lg sm:p-10 rounded-2xl mx-5 max-sm:px-5 max-sm:py-10">
      <p className="sm:pt-[1rem] pt-5 uppercase sm:text-3xl text-2xl font-bold">
      Production Capacity
        </p>
        <p className="h-[0.4rem] bg-primary-300 rounded-full mt-1 w-[5rem]"></p>
        <div className="flex flex-col justify-center items-center ">
          <div className="sm:w-[40vw]">
      <p className="pt-5 text-center">
            Our facility is
            equipped with advanced B flute, C flute, and E flute automatic board
            units. We also have a dedicated manual plant allowing us to craft specialized, unique packaging designs for our
            customers.
          </p>
          <p className="pt-5 text-center">
            Our workforce consists of a dedicated team of skilled workers who
            are committed to meeting our customer’s needs with efficiency and
            precision. With their expertise, we ensure that every product is
            made to the highest standards.
          </p>
          </div>
        </div>
        </div>
    </div>
  );
}
