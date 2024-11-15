import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function App(props) {
  return (
    <div className="py-4 sm:w-[30rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white rounded-lg flex flex-col items-center justify-center">
        <p className="text-tiny uppercase font-bold text-wrap">{props.name}</p>
        {/* <small className="text-default-500">12 Tracks</small> */}
        {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
      <div className="overflow-visible py-2 flex items-center justify-center">
        <Image
          alt=""
          className="sm:w-[80rem] h-[20rem] object-contain"
          src={`${props.img}`}
          width={370}
        />
      </div>
    </div>
  );
}