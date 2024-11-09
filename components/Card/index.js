"use client"
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip";

export default function App() {
  const list = [
    {
      title: "Orange",
      img: "/box/box1.svg",
      index: 1,
    },
    {
      title: "Tangerine",
      img: "/box/box2.svg",
      index: 2,
    },
    {
      title: "Raspberry",
      img: "/box/box3.svg",
      index: 3,
    },
    {
      title: "Lemon",
      img: "/box/box4.svg",
      index: 4,
    },
    {
      title: "Avocado",
      img: "/box/box5.svg",
      index: 5,
    },
    {
      title: "Lemon 2",
      img: "/box/box6.svg",
      index: 6,
    },
    {
      title: "Banana",
      img: "/box/box7.svg",
      index: 7,
    },
    {
      title: "Watermelon",
      img: "/box/box8.svg",
      index: 8,
    },
    {
      title: "Watermelon",
      img: "/box/box9.svg",
      index: 9,
    },
    {
      title: "Watermelon",
      img: "/box/box10.svg",
      index: 10,
    },
    {
      title: "Watermelon",
      img: "/box/box11.svg",
      index: 11,
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (

        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="max-sm:scale-95">
          <CardBody className="overflow-visible p-5">
            <Image
              shadow="none"
              radius="lg"
              width="80%"
              alt={item.title}
              className="w-full object-fill h-[140px]"
              src={item.img}
            />
          </CardBody>
            <p className="bg-gray-200 w-full text-primary-800">#{item.index} Customizable Box</p>
          <CardFooter className="text-small w-[13rem] text-wrap ">
            <div className="flex flex-col gap-2">
            <Chip color="primary" variant="dot" className="max-sm:text-[0.7rem] text-xs">Corrugated Box</Chip>
            <Chip color="primary" variant="dot" className="max-sm:text-[0.7rem] text-xs">Carton Box</Chip>
            <Chip color="primary" variant="dot" className="max-sm:text-[0.7rem] text-xs">Printed Corrugated Box</Chip>
            </div>
          </CardFooter>
        </Card>

      ))}
    </div>
  );
}