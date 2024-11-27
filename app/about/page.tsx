"use client";
import Image from "next/image";
import { Chip } from "@nextui-org/react";

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
        <p className="h-[0.4rem] bg-primary-300 rounded-full mt-1 w-[5rem]"></p>
        <div className=" overflow-hidden">
        <Image
          src={"/Company_Img.jpeg"}
          alt="Box1"
          width={5000}
          height={0}
          className="w-full sm:h-[20rem] pt-5 object-contain"
        /></div>
        <div className="font-light text-base flex flex-col gap-4 pt-6 max-sm:text-sm text-wrap mx-[5vw]">

          <div className="">
            <div className="flex flex-col gap-3 text-wrap">
              <p>
                Gurukrupa Industries is one of the leading
                corrugated box manufacturing industry based in Mysore,
                established in the year 1994. We are specialized in delivering high-quality packaging
                solutions tailored to the needs of our valued clients. We pride ourselves on providing custom
                packaging solutions to cater unique requirements.
              </p>
              {/* <p className="">
                At Gurukrupa Industries, we manufacture a wide range of
                packaging products, including:
              </p>
              <div className="flex flex-col gap-3">
                <Chip color="success" variant="dot">
                  Corrugated boxes
                </Chip>
                <Chip color="success" variant="dot">
                  Mono carton boxes
                </Chip>
                <Chip color="success" variant="dot">
                  2-ply rolls
                </Chip>
                <Chip color="success" variant="dot">
                  Multi-colour printed boxes
                </Chip>
                <Chip color="success" variant="dot">
                  Inner Cartons
                </Chip>
                <Chip color="success" variant="dot">
                  Plates and Partitions
                </Chip>
              </div> */}
            </div>
            
          </div>
          
          <p>
            With three decades of experience, we are committed to offering
            exceptional quality, service, and innovative packaging solutions for
            a wide array of industries. We are equipped with all the necessary
            paper and box testing lab equipments to ensure and supply the best
            quality.
          </p>
          {/* <p>
            We would be delighted to collaborate with you and discuss how
            Gurukrupa Industries can support your packaging needs. Please feel
            free to contact us for any inquiries or further information.
          </p> */}
        </div>
      </div>
      <div className="flex justify-center pb-5">
        {/* <Image
          src={"/aboutus.svg"}
          alt="Box1"
          width={800}
          height={0}
          className="sm:hidden"
        /> */}
      </div>
    </div>
  );
}
