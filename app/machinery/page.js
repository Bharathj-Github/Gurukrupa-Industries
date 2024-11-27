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
        <CapCard img="/machine2.jpeg" name="5 ply board unit" />
        <CapCard img="/machine4.jpeg" name="Two colour printer slotter" />
        <CapCard img="/machine5.jpeg" name="Thin blade slitter scorer machine" />
        <CapCard img="/machine1.jpeg" name="Fully Automatic flap gluing machine" />
        <CapCard img="/machine3.jpeg" name="semi-Automatic stitching machine" />
        <CapCard img="/machine6.jpeg" name="Manual box stitching machine" />
        <CapCard img="/machine8.jpeg" name="4 bar sheet pasting machine" />
        <CapCard img="/machine7.jpeg" name="Heavy duty die punching machine" />
      </div>
    </div>
  );
}
