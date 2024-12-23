"use client";
import Image from "next/image";
import { Chip } from "@nextui-org/react";
import { TbTargetArrow } from "react-icons/tb";
import { FaLightbulb } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="relative w-full h-full">
      <Image
        src={"/blurry.svg"}
        alt="blurry"
        width={700}
        height={0}
        className="absolute sm:top-[-26rem] sm:left-[-16rem] max-sm:w-[20rem] left-[-11rem] top-[-10rem]"
      />

      <div className="relative flex flex-col items-center">
        <p className="sm:pt-[1rem] pt-5 uppercase sm:text-3xl text-2xl font-bold">
          About US
        </p>
        <p className="h-[0.4rem] bg-primary-300 rounded-full mt-1 w-[5rem] sm:mb-2"></p>
        <div className="overflow-hidden">
          <img
            src="/machine.png"
            alt="about"
            width={5000}
            height={0}
            className="w-screen sm:h-[30rem] pt-5 object-cover max-sm:pt-10"
          />
        </div>
        <div className="font-light text-base flex flex-col gap-4 pt-6 max-sm:text-sm text-wrap mx-[5vw] sm:px-[15vw]">
          <div className="">
            <div className="flex flex-col gap-3 text-wrap">
              <p className="font-medium sm:text-lg text-justify max-sm:px-5">
                Since 1994, Gurukrupa Industries has been one of the
                leading corrugated box manufacturing industry in Mysore. With 3
                decades of experience, we are committed in offering exceptional
                quality, service and innovative packaging solutions for a wide
                array of industries. We are equipped with all the necessary
                machines and lab equipment needed to craft unique packaging for
                our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 my-10 items-center  text-wrap max-sm:text-sm px-5 gap-10 max-sm:flex-col">
        <div className="flex items-center gap-5 max-sm:gap-3 bg-blue-100 p-5">
          <div className="text-5xl">
            <TbTargetArrow />
          </div>
          <div className="sm:w-[30vw]">
            <p className="uppercase font-bold pb-2">Our mission </p>
            <p>
              Create value for brands by providing innovative and environmental friendly packaging
            </p>
          </div>
        </div>

        <div className="flex flex items-center gap-5 max-sm:gap-3 bg-blue-100 py-5 px-5">
          <div className="text-5xl">
            <FaLightbulb />
          </div>
          <div className="sm:w-[30vw]">
            <p className="uppercase font-bold pb-2">Our vision</p>
            <p>Be the global leader in the packaging industry and satisfy the customers needs.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <p className="font-medium sm:text-3xl pb-2 text-xl">Our Values</p>
        <p className="sm:text-lg sm:w-[60vw] text-center w-[80vw]">At Gurukrupa Industries, we ignite a culture of innovation and continuous learning. we have grown responsible and ethical with our legacy</p>
      </div>
      <div className="mb-5 flex justify-center flex-col items-center bg-blue-100 py-10">
        <p className="font-bold sm:text-lg uppercase pb-5 max-sm:w-[80vw] text-center">Industries we serve</p>
        <div className="sm:flex sm:gap-10 ">
        <div className="">
<li>Automobile Industry</li>
<li>Beverages Industry</li>
<li>ice cream Industry</li>
<li>Ecommerce Industry</li>
<li>FMCG</li>
<li>Fruits and Vegetables</li>
</div>
<div>
<li>Garments and Textiles Industry</li>
<li>Infrastructure/Real Estate Industry</li>
<li>Industrial Goods</li>
<li>pharmaceutical Industry</li>
<li>Transportation and Shipping Industry</li>
<li>Furniture Industry</li>
</div>
</div>
      </div>

      <Footer></Footer>
    </div>
  );
}
