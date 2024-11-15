"use client";
import React from "react";
import Image from "next/image";
import CapCard from "../../components/CapCard";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={"/blurry.svg"}
        alt="blurry"
        width={500}
        height={0}
        className="absolute sm:top-[-6rem] sm:left-[-7rem] max-sm:w-[20rem] left-[-10rem] top-[-5rem]"
      />
      <p className="sm:pt-[1rem] pt-5 uppercase sm:text-3xl text-2xl font-bold">
        Machinery
      </p>
      <p className="h-[0.4rem] bg-primary-300 rounded-full mt-1 w-[5rem]"></p>
      <div className="pt-10 grid sm:grid-cols-2 items-center justify-center gap-5 relative z-10">
        <CapCard img="/machine1.jpeg" name="Digital Bursting Strength Tester" />
        <CapCard img="/machine2.jpeg" name="Fully Automatic flap gluing machine" />
        <CapCard img="/machine3.jpeg" name="Digital Bursting Strength Tester" />
        <CapCard img="/machine4.jpeg" name="Digital Bursting Strength Tester" />
      </div>
    </div>
  );
}
