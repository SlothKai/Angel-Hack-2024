import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";

export interface OppCardsProps {
  title: string;
  date: string;
  address: string;
  image: string | undefined;
}

const OppCards: React.FC<OppCardsProps> = ({ title, date, address, image }) => {
  return (
    <Card className="flex items-center justify-center w-[235px]">
      <CardHeader className="flex pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={
            image ? image : `https://nextui.org/images/hero-card-complete.jpeg`
          }
          width={270}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h4 className="font-bold text-large truncate">{title}</h4>
        <div className="flex flex-col justify-end">
          <p className="text-tiny uppercase font-bold">{date}</p>
          <p className="text-default-500 text-xs max-w-[70%]">{address}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default OppCards;
