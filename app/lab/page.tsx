"use client"
import { title } from "@/components/primitives";
import CapCard from "../../components/CapCard"
import Image from "next/image";


export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={"/blurry.svg"}
        alt="blurry"
        width={500}
        height={0}
        className="absolute sm:top-[-6rem] sm:left-[-7rem] max-sm:w-[20rem] left-[-10rem] top-[-5rem]"
      />
      <p className="sm:pt-[1rem] pt-5 uppercase sm:text-3xl text-2xl font-bold relative z-10">In House Lab</p>
      <p className="h-[0.4rem] bg-primary-300 rounded-full mt-1 w-[5rem]"></p>

      
      <div className="pt-10 grid sm:grid-cols-2 items-center justify-center gap-5 relative z-10 pb-10">
      <CapCard img="/capability/img1.jpeg" name="Digital Bursting Strength Tester"/>
      <CapCard img="/capability/img2.jpeg" name="COBB Tester"/>
      <CapCard img="/capability/img3.jpeg" name='Box Compression Tester'/>
      <CapCard img="/capability/img4.jpeg" name="Electronic Scale and Analytical Balance"/>
      </div>
      {/* <p className="flex justify-center">These are a few lab equipments</p> */}
    </div>
  );
}
