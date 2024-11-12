"use client"
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip";

export default function App() {
  const list = [
    {
      title: "Orange",
      img: "/box/box1.png",
      index: 1,
    },
    {
      title: "Orange",
      img: "/box/box2.jpg",
      index: 2,
    },
    {
      title: "Orange",
      img: "/box/box3.jpg",
      index: 3,
    },
    {
      title: "Tangerine",
      img: "/box/box4.jpg",
      index: 4,
    },
    {
      title: "Raspberry",
      img: "/box/box5.jpg",
      index: 5,
    },
    {
      title: "Lemon",
      img: "/box/box6.jpg",
      index: 6,
    },
    {
      title: "Avocado",
      img: "/box/box7.jpg",
      index: 7,
    },
    {
      title: "Lemon 2",
      img: "/box/box8.jpg",
      index: 8,
    },
    {
      title: "Banana",
      img: "/box/box9.jpg",
      index: 9,
    },
    {
      title: "Watermelon",
      img: "/box/box10.jpeg",
      index: 10,
    },
    {
      title: "Watermelon",
      img: "/box/box11.jpg",
      index: 11,
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (

        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="max-sm:scale-95">
          <CardBody className="overflow-visible p-5 items-center">
            <Image
              shadow="none"
              radius="lg"
              width="80%"
              alt={item.title}
              className="w-full object-contain h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small w-[13rem] text-wrap ">
          </CardFooter>
        </Card>

      ))}
    </div>
  );
}